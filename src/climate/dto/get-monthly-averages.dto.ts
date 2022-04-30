import { Variable } from 'climate/enums/variable.enum';
import { GCMData } from 'climate/types/GCMData';
import { GetAverageAbstractDto } from './get-average-abstract.dto';

export class GetMonthlyAverageDto extends GetAverageAbstractDto {
  readonly monthVals: number[];

  constructor(
    gcmData: GCMData,
    variable: Variable,
    startYear: number,
    endYear: number,
  ) {
    super(gcmData, variable, startYear, endYear);
    this.monthVals = gcmData.monthlyValues;
  }
}
