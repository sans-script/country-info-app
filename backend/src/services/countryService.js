import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.BASE_URL;
const POPULATION_URL = process.env.POPULATION_URL;
const FLAG_URL = process.env.FLAG_URL;

export const fetchAvailableCountries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/AvailableCountries`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch available countries: ${error.message}`);
    throw error;
  }
};

export const fetchCountryInfo = async (countryCode) => {
  try {
    const borderCountriesResponse = await axios.get(
      `${BASE_URL}/CountryInfo/${countryCode}`,
    );
    const borderCountries = borderCountriesResponse.data;

    const populationDataResponse = await axios.get(POPULATION_URL);
    const populationDataArray = populationDataResponse.data.data;

    const countryName = borderCountries.commonName;
    const populationData = populationDataArray.find(
      (country) =>
        country.country.toLowerCase().includes(countryName.toLowerCase()) ||
        country.code === countryCode.toUpperCase(),
    );
    if (!populationData) {
      console.warn(`Population data not found for ${countryName}`);
    }
    const flagResponse = await axios.get(`${FLAG_URL}`);
    const flagData = flagResponse.data.data;
    const getFlagUrlByCountryCode = (code) => {
      const flag = flagData.find((flag) => flag.iso2 === code.toUpperCase());
      return flag ? flag.flag : null;
    };

    const bordersWithFlags = borderCountries.borders.map((border) => ({
      ...border,
      flagUrl: getFlagUrlByCountryCode(border.countryCode),
    }));
    return {
      borderCountries: {
        ...borderCountries,
        borders: bordersWithFlags,
      },
      populationData: populationData
        ? {
            country: populationData.country,
            code: populationData.code,
            iso3: populationData.iso3,
            populationCounts: populationData.populationCounts,
          }
        : null,
      flagUrl: getFlagUrlByCountryCode(countryCode),
    };
  } catch (error) {
    console.error(`Failed to fetch country info: ${error.message}`);
    throw error;
  }
};
