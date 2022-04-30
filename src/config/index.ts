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
    title: 'Taneo Climate API',
    description: 'Substitute for the discontinued ClimateAPI from WorldBank.',
    version: '1.0',
    path: '/',
  },
};

export default (): Config => config;
