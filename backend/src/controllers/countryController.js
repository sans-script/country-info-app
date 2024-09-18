import {
  fetchAvailableCountries,
  fetchCountryInfo,
} from "../services/countryService.js";

export const getAvailableCountries = async (req, res) => {
  try {
    const countries = await fetchAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCountryInfo = async (req, res) => {
  const { countryCode } = req.params;
  try {
    const countryInfo = await fetchCountryInfo(countryCode);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
