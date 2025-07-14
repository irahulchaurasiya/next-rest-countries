/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string[];
  flags: {
    png: string;
  };
  cca2: string;
}

const CountriesCard = ({ country }: { country: Country }) => {
  const { name, population, region, capital, flags, cca2 } = country;

  const formattedPopulation = population?.toLocaleString("en-IN");

  const router = useRouter();

  function handleClick(cca2: string) {
    router.push(`/country/${cca2}`);
  }

  return (
    <div
      className="flex flex-col justify-start items-start w-full h-full bg-white text-black dark:bg-[#59545480] dark:text-white rounded-lg shadow-md hover:shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-400"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && handleClick(cca2!)}
      onClick={() => handleClick(cca2!)}
      aria-label={`View details about ${name?.common}`}
    >
      <div className="h-[160px] t:h-[180px] sm:h-[200px] md:h-[180px] lg:h-[200px] w-full">
        <img
          src={flags?.png}
          alt={`Flag of ${name?.official}`}
          className="h-full w-full object-fill"
        />
      </div>

      <div className="p-3 t:p-4 sm:p-5 space-y-1.5 t:space-y-2 w-full flex-1">
        <h3 className="font-semibold text-sm t:text-base sm:text-lg text-gray-900 dark:text-white font-poppins line-clamp-1">
          {name?.common}
        </h3>
        <div className="space-y-0.5 t:space-y-1 text-xs t:text-sm sm:text-base">
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Population:</span> {formattedPopulation}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Region:</span> {region}
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            <span className="font-medium">Capital:</span> {capital?.[0] || "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountriesCard;
