import { CountryData } from "../types";

export const getCountryDetails = async (
  countryCode: string,
): Promise<CountryData> => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${BASE_URL}/countries/info/${countryCode}`);
  if (!res.ok) {
    throw new Error("Failed to fetch country data");
  }
  const data: CountryData = await res.json();
  return data;
};
