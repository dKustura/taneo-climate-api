import { BASE_SERVICE_URL } from './climate.constants';
import { Variable } from './enums/variable.enum';

export const getRequestUrl = (
  variable: Variable,
  gcm: string,
  startYear: number,
  endYear: number,
  countryCode: string,
) => {
  return `${BASE_SERVICE_URL}/${variable}/median/annual/${gcm}/climatology/rcp85/${startYear}-${endYear}/country/${countryCode}/0`;
};
