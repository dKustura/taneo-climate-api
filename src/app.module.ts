import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClimateModule } from 'climate/climate.module';
import config from 'config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ClimateModule,
  ],
})
export class AppModule {}
