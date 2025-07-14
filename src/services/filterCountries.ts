export const filterCountries = (
  data?: any,
  selectedRegion?: any,
  selectedSubregion?: any,
  search?: any
) => {
  let filteredCountries = data;

  // Apply region filter
  if (selectedRegion) {
    filteredCountries = filteredCountries.filter(
      (country: any) =>
        country.region.toLowerCase() === selectedRegion.toLowerCase()
    );
  }

  // Apply subregion filter
  if (selectedSubregion) {
    filteredCountries = filteredCountries.filter(
      (country: any) =>
        country.subregion.toLowerCase() === selectedSubregion.toLowerCase()
    );
  }

  // Apply search filter
  if (search) {
    filteredCountries = filteredCountries.filter(
      (country: any) =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filteredCountries;
};
