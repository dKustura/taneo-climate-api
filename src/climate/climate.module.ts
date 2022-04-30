import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ClimateController } from './climate.controller';
import { ClimateService } from './climate.service';

@Module({
  imports: [HttpModule],
  controllers: [ClimateController],
  providers: [ClimateService],
})
export class ClimateModule {}
