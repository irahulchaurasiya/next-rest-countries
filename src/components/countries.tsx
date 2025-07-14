import CountriesCard from "./countriesCard";

const Countries = ({ countriesData }: any) => {
  return (
    <div className="py-[60px] lg:py-[120px] section-padding-x w-full h-full mx-auto grid grid-cols-1 t:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-start gap-3 t:gap-4 sm:gap-6 lg:gap-8 max-w-[1920px]">
      {countriesData.map((country: any) => (
        <div className="card w-full" key={country.name}>
          <CountriesCard country={country} />
        </div>
      ))}
    </div>
  );
};

export default Countries;
