export interface BorderCountry {
  commonName: string;
  countryCode: string;
  flagUrl: string;
}

export interface PopulationCount {
  year: number;
  value: number;
}

export interface CountryData {
  borderCountries: {
    commonName: string;
    officialName: string;
    region: string;
    countryCode: string;
    borders: BorderCountry[];
  };
  populationData: {
    populationCounts: PopulationCount[];
  };
  flagUrl: string;
}

export interface Country {
  countryCode: string;
  name: string;
}
