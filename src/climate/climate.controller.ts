import { Controller, Get, Param } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ClimateService } from './climate.service';
import { Variable } from './enums/variable.enum';
import { GetAverageDataParams } from './params/get-average-data.params';

@ApiTags('Climate')
@Controller('country')
export class ClimateController {
  constructor(private readonly climateService: ClimateService) {}

  @ApiParam({
    name: 'countryCode',
    type: 'string',
  })
  @ApiParam({
    name: 'endYear',
    type: 'string',
  })
  @ApiParam({
    name: 'startYear',
    type: 'string',
  })
  @ApiParam({
    name: 'variable',
    type: 'string',
    enum: Variable,
  })
  @Get('mavg/:variable/:startYear/:endYear/:countryCode')
  getMonthlyAverageData(@Param() params: GetAverageDataParams) {
    return this.climateService.getMonthlyAverageData(
      params.variable,
      params.startYear,
      params.endYear,
      params.countryCode,
    );
  }

  @ApiParam({
    name: 'countryCode',
    type: 'string',
  })
  @ApiParam({
    name: 'endYear',
    type: 'string',
  })
  @ApiParam({
    name: 'startYear',
    type: 'string',
  })
  @ApiParam({
    name: 'variable',
    type: 'string',
    enum: Variable,
  })
  @Get('annualavg/:variable/:startYear/:endYear/:countryCode')
  getAnnualAverageData(@Param() params: GetAverageDataParams) {
    return this.climateService.getAnnualAverageData(
      params.variable,
      params.startYear,
      params.endYear,
      params.countryCode,
    );
  }
}
