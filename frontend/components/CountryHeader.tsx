import React from "react";
import Link from "next/link";
import Image from "next/image";

interface CountryHeaderProps {
  flagUrl?: string;
  commonName: string;
}

export const CountryHeader: React.FC<CountryHeaderProps> = ({
  flagUrl,
  commonName,
}) => (
  <div className="relative w-full h-48 flex items-center justify-center z-50 pt-10">
    <Link href="/" className="text-white underline absolute top-2 left-2 z-20">
      Back
    </Link>
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 z-20">
      {flagUrl ? (
        <Image
          src={flagUrl}
          alt={`${commonName} flag`}
          width={200}
          height={180}
          objectFit="contain"
          className="w-52 h-32"
        />
      ) : (
        <div className="w-52 h-32 flex items-center justify-center bg-white text-white flex-shrink-0">
          <h1 className="text-black font-semibold text-5xl">404</h1>
        </div>
      )}
      <h1 className="w-full text-center text-5xl lg:text-7xl font-bold text-white">
        {commonName || "Unknown Country"}
      </h1>
    </div>
  </div>
);
