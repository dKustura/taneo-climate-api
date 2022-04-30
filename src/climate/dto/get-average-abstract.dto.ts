import { Variable } from 'climate/enums/variable.enum';
import { GCMData } from 'climate/types/GCMData';

export abstract class GetAverageAbstractDto {
  readonly gcm: string;
  readonly variable: Variable;
  readonly fromYear: number;
  readonly toYear: number;

  constructor(
    gcmData: GCMData,
    variable: Variable,
    startYear: number,
    endYear: number,
  ) {
    this.gcm = gcmData.gcmName;
    this.variable = variable;
    this.fromYear = startYear;
    this.toYear = endYear;
  }
}
