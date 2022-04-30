import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsPositive, IsString } from 'class-validator';

export class GetAverageDataParams {
  @IsString()
  @IsNotEmpty()
  variable: string;

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
