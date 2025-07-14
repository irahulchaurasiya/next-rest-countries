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

// Debounce utility: delays function execution until after wait ms have elapsed since last call
export function debounce<T extends (...args: any[]) => void>(func: T, wait: number) {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
