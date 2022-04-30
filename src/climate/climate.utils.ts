const BASE_URL =
  'https://climateknowledgeportal.worldbank.org/climate_tab/cmip5/climatology';

export const getRequestUrl = (
  variable: string,
  gcm: string,
  startYear: number,
  endYear: number,
  countryCode: string,
) => {
  return `${BASE_URL}/${variable}/median/annual/${gcm}/climatology/rcp85/${startYear}-${endYear}/country/${countryCode}`;
};
