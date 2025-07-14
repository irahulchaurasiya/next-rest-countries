"use client";

import Loader from "@/components/loader/loader";
import SingleCountryCard from "@/components/singleCountryCard";
import { getSingleCountry } from "@/services/countries";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Page = () => {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

  const [countryData, setCountryData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const data = await getSingleCountry(slug);
        setCountryData(data);
      } catch (err: any) {
        setError(err.message || "Failed to load countries");
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="min-h-screen bg-[#f3f3f3] dark:bg-[#59545480] text-black dark:text-white flex flex-col">
      <div className="section-padding-x py-4">
        <button
          className="py-2 px-4 flex items-center gap-1 shadow-md border border-gray-200 dark:border-gray-600 rounded-sm bg-white dark:bg-[#22222280] hover:bg-gray-200 dark:hover:bg-[#59545480] transition-colors"
          onClick={() => history.back()}
        >
          <KeyboardBackspaceIcon /> Back
        </button>
      </div>
      <div className="flex-1">
        <SingleCountryCard countryData={countryData!} />
      </div>
    </div>
  );
};

export default Page;
