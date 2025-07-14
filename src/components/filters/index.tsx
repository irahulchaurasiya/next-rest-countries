"use client";

import React, { useState, useMemo } from "react";
import { debounce } from "@/utils";

const FiltersSection = ({
  countriesData,
  setSelectedRegion,
  setSelectedSubregion,
  setSearch,
}: any) => {
  const [subRegionFilterOptions, setSubRegionFilterOptions] = useState([]);

  const regionFilterOptions = Array.from(
    new Set(countriesData.map((country: any) => country.region))
  );

  const handleRegionSelect = (e: any) => {
    setSelectedRegion(e.target.value);
    // Clear the selected subregion when region changes
    setSelectedSubregion("");
    
    if (e.target.value) {
      const subregions = countriesData
        .filter((country: any) => country.region === e.target.value)
        .map((country: any) => country.subregion)
        .filter((subregion: string) => subregion && subregion.trim() !== "");

      setSubRegionFilterOptions(Array.from(new Set(subregions)));
    } else {
      setSubRegionFilterOptions([]);
    }
  };

  const handleSubregionSelect = (e: any) => {
    setSelectedSubregion(e.target.value);
  };

  const handleSearch = (e: any) => {
    setSearch(e);
  };

  // Debounced version of handleSearch
  const debouncedHandleSearch = useMemo(() => debounce(handleSearch, 300), []);

  return (
    <div className="section-padding-x w-full h-full mx-auto flex flex-col justify-start sm:flex-row sm:justify-between items-center gap-4 sm:gap-8 max-w-[1920px]">
      <div className="w-full sm:w-auto">
        <input
          onChange={(e) => debouncedHandleSearch(e.target.value)}
          type="text"
          placeholder="Search for a country..."
          className="w-full sm:w-auto bg-[#ffffff] dark:bg-[#59545480] text-black dark:text-white py-2 px-4 rounded"
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto">
        <div className="w-full sm:w-auto">
          <select
            name=""
            id=""
            className="w-full sm:w-auto py-2 px-4 rounded text-gray-500 dark:text-[#c3bebe]"
            onClick={(e) => handleRegionSelect(e)}
          >
            <option value="">Filter by region</option>
            {regionFilterOptions.map((region: any) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full sm:w-auto">
          <select
            name=""
            id=""
            className="w-full sm:w-auto py-2 px-4 rounded text-gray-500 dark:text-[#c3bebe]"
            onClick={(e) => handleSubregionSelect(e)}
          >
            <option value="">Filter by subregion</option>
            {subRegionFilterOptions.length > 0 ? (
              subRegionFilterOptions.map((subregion: any) => (
                <option key={subregion} value={subregion}>
                  {subregion}
                </option>
              ))
            ) : (
              <option value="">No Subregion available</option>
            )}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FiltersSection;
