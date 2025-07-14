/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/navigation";
import React from "react";

const SingleCountryCard = ({ countryData }: any) => {
  const data = countryData[0];
  const router = useRouter();

  function handleClick(cca2: string) {
    router.push(`/country/${cca2}`);
  }

  return (
    <div className="section-padding-x py-6 sm:py-8 lg:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-8 lg:gap-16 px-4 sm:px-0">
          {/* Flag Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-start md:justify-center lg:justify-start">
            <div className="w-full aspect-[4/3] rounded-lg flex">
              <img
                src={data?.flags.svg}
                alt={data?.flags.alt || `Flag of ${data?.name.common}`}
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>

          {/* Country Details */}
          <div className="w-full md:w-1/2 space-y-6 max-w-[480px] md:max-w-full md:mx-0">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
              {data?.name.common}
            </h1>
            <div className="flex gap-16 sm:flex-col sm:gap-0 lg:flex-row lg:gap-16">
              {/* Left Column */}
              <div className="space-y-3 mb-6 md:mb-0">
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Native Name:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.name.official}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Population:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.population.toLocaleString()}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Region:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.region}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Sub Region:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.subregion || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Capital:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.capital?.[0] || "N/A"}
                  </span>
                </div>
              </div>
              {/* Right Column */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Top Level Domain:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.tld?.[0] || "N/A"}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Currencies:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.currencies ? 
                      `${(Object.values(data.currencies)[0] as any).name} (${(Object.values(data.currencies)[0] as any).symbol})` 
                      : "N/A"
                    }
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center flex-wrap gap-x-1">
                  <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 min-w-[80px]">
                    Languages:
                  </span>
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-0 break-words whitespace-normal">
                    {data?.languages ? 
                      Object.values(data.languages)[0] as any 
                      : "N/A"
                    }
                  </span>
                </div>
              </div>
            </div>
            {/* Border Countries */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-semibold text-sm sm:text-base text-gray-700 dark:text-gray-300 whitespace-nowrap">
                  Border Countries:
                </span>
                {data?.borders?.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {data.borders.map((country: any, index: number) => (
                      <button
                        onClick={() => handleClick(country)}
                        key={index}
                        className="px-3 py-1.5 text-xs sm:text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        {country}
                      </button>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                    None
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCountryCard;
