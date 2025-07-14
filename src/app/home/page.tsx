"use client";

import { useEffect, useState } from "react";
import { getCountries } from "@/services/countries";
import React from "react";
import Loader from "@/components/loader/loader";
import FiltersSection from "@/components/filters";
import Countries from "@/components/countries";
import { filterCountries } from "@/services/filterCountries";

const HomeSection = () => {
  const [countriesData, setCountriesData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredCountries, setFilteredCountries] = useState<any[]>([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [selectedSubregion, setSelectedSubregion] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await getCountries({
          fields: [
            "name",
            "capital",
            "flags",
            "population",
            "region",
            "cca2",
            "subregion",
          ],
        });
        setCountriesData(data);
      } catch (err: any) {
        setError(err.message || "Failed to load countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const filteredCountryData = filterCountries(
      countriesData,
      selectedRegion,
      selectedSubregion,
      search
    );
    setFilteredCountries(filteredCountryData);
  }, [selectedRegion, selectedSubregion, search, countriesData]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;
  return (
    <div>
      <FiltersSection
        countriesData={countriesData}
        setSelectedRegion={setSelectedRegion}
        setSelectedSubregion={setSelectedSubregion}
        setSearch={setSearch}
      />
      <Countries countriesData={filteredCountries} />
    </div>
  );
};

export default HomeSection;
