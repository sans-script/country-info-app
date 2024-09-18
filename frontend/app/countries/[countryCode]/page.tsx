"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { FallBack } from "@/components/FallBack";
import { CountryHeader } from "@/components/CountryHeader";
import { CountryInfo } from "@/components/CountryInfo";
import { PopulationChart } from "@/components/PopulationChart";
import { CountryData } from "@/types";
import { getCountryDetails } from "@/lib/getCountryInfo";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
);

const CountryDetails = () => {
  const { countryCode } = useParams<{ countryCode: string }>();
  const [country, setCountry] = useState<CountryData | null>(null);

  useEffect(() => {
    if (countryCode) {
      const fetchCountry = async () => {
        try {
          const data = await getCountryDetails(countryCode);
          setCountry(data);
        } catch (error) {
          console.error("Failed to fetch country data", error);
        }
      };

      fetchCountry();
    }
  }, [countryCode]);

  if (!country) {
    return <FallBack />;
  }

  const hasPopulationData =
    country.populationData &&
    country.populationData.populationCounts &&
    country.populationData.populationCounts.length > 0;

  const populationData = hasPopulationData
    ? {
        labels: country.populationData?.populationCounts?.map((data) =>
          data.year.toString(),
        ),
        datasets: [
          {
            label: "Population",
            data: country.populationData?.populationCounts?.map(
              (data) => data.value,
            ),
            borderColor: "rgba(255,255,255)",
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "rgba(255,255,255)",
            pointBorderColor: "rgba(255,255,255)",
          },
        ],
      }
    : null;

  return (
    <div className="relative flex flex-col w-screen min-h-screen bg-cover bg-center bg-[url(/bg-globe.jpg)]">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <CountryHeader
        flagUrl={country.flagUrl}
        commonName={country.borderCountries.commonName}
      />

      <CountryInfo
        officialName={country.borderCountries.officialName}
        region={country.borderCountries.region}
        countryCode={country.borderCountries.countryCode}
        borders={country.borderCountries.borders}
      />

      <div className="flex flex-col justify-center z-10 p-3">
        {populationData &&
        populationData.labels &&
        populationData.labels.length > 0 ? (
          <div className="flex flex-col w-full">
            <h1 className="text-xl mb-2 font-bold text-white">
              Population Chart
            </h1>
            <PopulationChart data={populationData} />
            <h2 className="text-white flex flex-col w-full">
              Population of {country.borderCountries.commonName} between 1960
              and 2018
              <span>Source: Nager Date API</span>
            </h2>
          </div>
        ) : (
          <div className="w-full max-h-96 flex flex-col justify-center items-center">
            <h1 className="text-white text-2xl">Oops! 😬</h1>
            <h1 className="text-white text-2xl italic">
              Population chart not available
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
