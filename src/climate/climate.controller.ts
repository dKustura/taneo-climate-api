import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ClimateService } from './climate.service';

@ApiTags('Climate')
@Controller('country')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @Get('mavg/:variable/:startYear/:endYear/:countryCode')
  getMonthlyAverageData(
    @Param('variable') variable: string,
    @Param('startYear') startYear: number,
    @Param('endYear') endYear: number,
    @Param('countryCode') countryCode: string,
  ) {
    return this.climateService.getMonthlyAverageData(
      variable,
      startYear,
      endYear,
      countryCode,
    );
  }

  @Get('annualavg/:variable/:startYear/:endYear/:countryCode')
  getAnnualAverageData(
    @Param('variable') variable: string,
    @Param('startYear') startYear: number,
    @Param('endYear') endYear: number,
    @Param('countryCode') countryCode: string,
  ) {
    return this.climateService.getAnnualAverageData(
      variable,
      startYear,
      endYear,
      countryCode,
    );
  }
}
