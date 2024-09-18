"use client";

import { getCountries } from "@/lib/getCountries";
import { Country } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch countries", error);
        setLoading(false);
      }
    };

    const heading = document.querySelector(".heading");
    const paragraph = document.querySelector(".paragraph");

    if (heading && paragraph) {
      setTimeout(() => {
        heading.classList.add("animate");
        paragraph.classList.add("animate");
      }, 100);
    }

    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col overflow-hidden w-screen h-screen items-start justify-center"
      style={{
        backgroundImage: "url(/bg-globe.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full flex flex-col gap-8 p-8 z-50">
        <h1 className="text-white text-5xl sm:text-6xl font-bold max-w-xl heading">
          Discover detailed information about{" "}
          <span className="underline">countries</span>
        </h1>
        <p className="text-white max-w-96 text-justify paragraph">
          Uncover detailed and fascinating information about countries around
          the globe. From essential statistics to vibrant flags and interactive
          charts, explore everything you need to know about each nation. Whether
          you&apos;re interested in geographical borders, population trends, or
          national symbols, this page offers a thorough overview, allowing you
          to dive deep into the unique attributes of each country.
        </p>
      </div>

      <div className="flex overflow-auto z-10 h-96">
        <div className="flex flex-wrap p-2 justify-around h-96">
          {loading ? (
            <div className="w-full h-80 flex flex-col items-center justify-center"></div>
          ) : countries.length > 0 ? (
            countries.map((country, index) => (
              <motion.div
                className="bg-white text-blue-500 border m-2 border-blue-600 rounded-lg px-4 py-2 flex shadow-lg hover:bg-blue-500 hover:text-white transition-colors duration-300 items-center justify-center"
                key={country.countryCode}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <Link href={`/countries/${country.countryCode}`}>
                  {country.name}
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="w-full text-center text-white">
              <p>No countries available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryList;
