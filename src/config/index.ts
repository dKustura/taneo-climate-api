import { Config } from './config.interface';

const config: Config = {
  nest: {
    port: 3000,
  },
  cors: {
    enabled: true,
  },
  swagger: {
    enabled: true,
    title: 'Taneo Weather API',
    description: 'Taneo app weather API.',
    version: '1.0',
    path: 'v1',
  },
};

export default (): Config => config;
