import axios from "axios";

type CountryField =
  | "name"
  | "capital"
  | "population"
  | "region"
  | "flags"
  | "cca2"
  | "subregion";

  
type Country = {
  name?: {
    common: string;
    official: string;
  };
  population?: number;
  region?: string;
  capital?: string[];
  flags?: {
    png: string;
    svg: string;
  };
  cca2?: string;
  subregion?: string;
};

interface GetCountriesParams {
  fields?: CountryField[];
}

export const getCountries = async (
  params: GetCountriesParams
): Promise<Country[]> => {
  const apiUrl = process.env.NEXT_PUBLIC_COUNTRIES_API;

  if (!apiUrl) {
    throw new Error("Api is not defined");
  }

  const query = params.fields?.length
    ? `?fields=${params.fields.join(",")}`
    : "";

  try {
    const res = await axios.get<Country[]>(`${apiUrl}${query}`);
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch countries: ${error.message}`);
  }
};

export const getSingleCountry = async (countryCode: string) => {
  const apiUrl = process.env.NEXT_PUBLIC_SINGLE_COUNTRY_API;

  if (!apiUrl) {
    throw new Error("Api is not defined");
  }

  try {
    const res = await axios.get(`${apiUrl.replace("{code}", countryCode)}`);
    return res.data;
  } catch (error: any) {
    throw new Error(`Failed to fetch country: ${error.message}`);
  }
};
