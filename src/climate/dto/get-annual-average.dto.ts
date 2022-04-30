import { GCMData } from 'climate/types/GCMData';
import { GetAverageAbstractDto } from './get-average-abstract.dto';

export class GetAnnualAverageDto extends GetAverageAbstractDto {
  readonly annualData: number[];

  constructor(
    gcmData: GCMData,
    variable: string,
    startYear: number,
    endYear: number,
  ) {
    super(gcmData, variable, startYear, endYear);
    this.annualData =
      gcmData.annualValue && gcmData.annualValue !== 0
        ? [gcmData.annualValue]
        : [];
  }
}
