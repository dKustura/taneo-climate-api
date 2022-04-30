import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
} from 'class-validator';
import { Variable } from 'climate/enums/variable.enum';

export class GetAverageDataParams {
  @IsString()
  @IsNotEmpty()
  @IsEnum(Variable, {
    each: true,
    message: 'Variable must be one of: [tas, pr]',
  })
  variable: Variable;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  startYear: number;

  @IsPositive()
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  endYear: number;

  @IsString()
  @IsNotEmpty()
  countryCode: string;
}
