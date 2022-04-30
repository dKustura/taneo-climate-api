import { GCMData } from 'climate/types/GCMData';

export abstract class GetAverageAbstractDto {
  readonly gcm: string;
  readonly variable: string;
  readonly fromYear: number;
  readonly toYear: number;

  constructor(
    gcmData: GCMData,
    variable: string,
    startYear: number,
    endYear: number,
  ) {
    this.gcm = gcmData.gcmName;
    this.variable = variable;
    this.fromYear = startYear;
    this.toYear = endYear;
  }
}
