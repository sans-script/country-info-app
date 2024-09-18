import { Country } from "@/types";

export const getCountries = async (): Promise<Country[]> => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${BASE_URL}/countries/available`);
  if (!res.ok) {
    throw new Error("Failed to fetch countries data");
  }
  const data: Country[] = await res.json();
  return data;
};
