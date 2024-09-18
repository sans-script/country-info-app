import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BorderCountry {
  commonName: string;
  countryCode: string;
  flagUrl: string;
}

interface CountryInfoProps {
  officialName: string;
  region: string;
  countryCode: string;
  borders: BorderCountry[];
}

export const CountryInfo: React.FC<CountryInfoProps> = ({
  officialName,
  region,
  countryCode,
  borders,
}) => (
  <div className="flex flex-col p-8 z-10 gap-4">
    <h2 className="text-xl mb-2 font-bold text-white">
      Official Name:{" "}
      <span className="italic font-semibold">{officialName}</span>
    </h2>
    <h2 className="text-xl mb-2 font-bold text-white">
      Region: <span className="italic font-semibold">{region}</span>
    </h2>
    <h2 className="text-xl mb-2 font-bold text-white">
      Country Code: <span className="italic font-semibold">{countryCode}</span>
    </h2>
    <h2 className="text-xl mb-2 font-bold text-white">Border Countries:</h2>
    <ul className="flex flex-col list-disc pl-5 mb-4 text-xl gap-2 overflow-y-auto max-h-56">
      {borders.length > 0 ? (
        borders.map((border) => (
          <li
            key={border.countryCode}
            className="flex gap-2 font-bold text-white list-none items-center"
          >
            {border.flagUrl ? (
              <Image
                src={border.flagUrl}
                alt={`${border.commonName} flag`}
                width={40}
                height={40}
              />
            ) : (
              <p className="w-10 h-7 text-center bg-white text-black font-semibold">
                404
              </p>
            )}
            <Link
              href={`/countries/${border.countryCode}`}
              className="text-white underline"
            >
              {border.commonName}
            </Link>
          </li>
        ))
      ) : (
        <p className="text-white italic">No border countries</p>
      )}
    </ul>
  </div>
);
