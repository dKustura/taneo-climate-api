import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

import { parse } from 'csv-parse/sync';

import {
  FIRST_MONTH_VALUE_INDEX,
  GLOBAL_CIRCULATION_MODELS,
  READ_LINE_NUMBER,
  YEAR_VALUE_INDEX,
} from './climate.constants';
import { getRequestUrl } from './climate.utils';
import { GCMData } from './types/GCMData';

// DTOs
import { GetMonthlyAverageDto } from './dto/get-monthly-averages.dto';
import { GetAnnualAverageDto } from './dto/get-annual-average.dto';

@Injectable()
export class ClimateService {
  constructor(private httpService: HttpService) {}

  public async getMonthlyAverageData(
    variable: string,
    startYear: number,
    endYear: number,
    countryCode: string,
  ): Promise<GetMonthlyAverageDto[]> {
    return this.fetchDataAndMapResult(
      variable,
      startYear,
      endYear,
      countryCode,
      (gcmData) =>
        new GetMonthlyAverageDto(gcmData, variable, startYear, endYear),
    );
  }

  public async getAnnualAverageData(
    variable: string,
    startYear: number,
    endYear: number,
    countryCode: string,
  ) {
    return this.fetchDataAndMapResult(
      variable,
      startYear,
      endYear,
      countryCode,
      (gcmData) =>
        new GetAnnualAverageDto(gcmData, variable, startYear, endYear),
    );
  }

  private async fetchDataAndMapResult(
    variable: string,
    startYear: number,
    endYear: number,
    countryCode: string,
    mappingFunction: (gcmData: GCMData) => any,
  ) {
    const dataForAllGCMs = await this.getDataForAllGCMs(
      variable,
      startYear,
      endYear,
      countryCode,
    );

    return dataForAllGCMs.map(mappingFunction);
  }

  private async getDataForAllGCMs(
    variable: string,
    startYear: number,
    endYear: number,
    countryCode: string,
  ): Promise<GCMData[]> {
    const data = await Promise.all(
      GLOBAL_CIRCULATION_MODELS.map(async (gcmName) => {
        const requestUrl = getRequestUrl(
          variable,
          gcmName,
          startYear,
          endYear,
          countryCode,
        );

        const response = await firstValueFrom(
          this.httpService.get<string>(requestUrl),
        );

        const { annualValue, monthlyValues } = await this.parseResponse(
          response.data,
        );
        return { gcmName, annualValue, monthlyValues };
      }),
    );

    return data;
  }

  private async parseResponse(response: string) {
    const lines: string[][] = parse(response, {
      skipEmptyLines: true,
      fromLine: READ_LINE_NUMBER,
      toLine: READ_LINE_NUMBER,
    });

    const records = lines[0];

    const annualValue = parseFloat(records[YEAR_VALUE_INDEX]);
    const monthlyValues = records
      .slice(FIRST_MONTH_VALUE_INDEX)
      .map((stringValue) => parseFloat(stringValue));

    return { annualValue, monthlyValues };
  }
}
