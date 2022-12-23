<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Built with <a href="https://nestjs.com/" target="_blank">NestJS</a> a progressive Node.js framework for building efficient and scalable server-side applications.</p>

## Description

After some extensive digging around the available and the removed APIs of the World Bank I've managed to detect the API used for fetching CSV data from the Climatology tab on the [Download data](https://climateknowledgeportal.worldbank.org/download-data) page of the World Banks Gorup's Climate Change Knowledge Portal.
This service is built to partially translate that existing API to the discontinued Climate API of World Bank.

It is modeled after the specification for the old API which was located [here](https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api) but can still be found on the Wayback machine [here](http://web.archive.org/web/20161126073309/https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api).

Since not all models of the data returned from the old API are described in the specification, I had to look into some old packages used for fetching data from the API. Specifically the following two:

- [wbpy](https://github.com/mattduck/wbpy)
- [rWBclimate](https://github.com/ropensci/rWBclimate)

The old API returned data for 15 different GCMs (global circulation models) and the time periods could range from year 1920 to year 2099. This service provides data from 10 GCMs and the valid time periods are following:

- 2020 - 2039
- 2040 - 2059
- 2060 - 2079
- 2080 - 2099

The reason behind this decision is that I haven't managed to map data from the existing API to time periods in the past and that there are many more climate projection models to pick from (some of which don't return any data). Therefore, this service provides only the previously mentioned intervals and 10 different hand-picked projection models from the CMIP5 collection of models (first dropdown on the Download data page).

## Access

You can access the API and its specification on http://taneo.poscic.net/.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Navigate to `localhost:3000` to view the Swagger page of the service.
