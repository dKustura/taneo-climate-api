# `Taneo` Climate Data API

## About the `Taneo` Climate Data API

Taneo Climate data API is an API which translates an existing API of the World Bank’s Climate Change Knowledge Portal into a deprecated Climate Data API specification. This document is a modified version of the specification of the deprecated API, which you can find [here](http://web.archive.org/web/20161126073309/https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api).

## About the Data

The data in the Climate Data API are derived from 10 global circulation models (GCMs). The models simulate the response of the global climate system to increasing greenhouse gas concentrations. The data in the Climate Data API have been aggregated to the country level, as explained below.

Note these data are modeled estimates of temperature and precipitation changes in different time periods under different GCMs and scenarios. They include changes for future time periods.

## The Basic Request

The Climate Data API uses REST-based requests, in which the general form looks like this:

https://taneo-climate-api.herokuapp.com/v1/country/**type**/**var**/**start**/**end**/**ISO3**

All boldface variables in this instance are required.

### type

| type      | description     |
| --------- | --------------- |
| mavg      | Monthly average |
| annualavg | Annual average  |

### var

| var | description                                                           |
| --- | --------------------------------------------------------------------- |
| pr  | Precipitation (rainfall and assumed water equivalent), in millimeters |
| tas | Temperature, in degrees Celsius                                       |

### start & end

The start and end time period variables must be paired as follows:

| start | end  |
| ----- | ---- |
| 2020  | 2039 |
| 2040  | 2059 |
| 2060  | 2079 |
| 2080  | 2099 |

### ISO3

ISO3 is an [ISO3 country code](https://unstats.un.org/unsd/methodology/m49/), indicating the country for the data request.

## Response Format

For any request, the API will return an array of objects, each representing data for one GCM for the requested country and time period.

For monthly data requests, each object contains a 12-value array with one value for each month (January-December). For annual requests, each object contains a single-value array representing an average year. Here is a typical monthly data response:

```json
[
  {
    "gcm": "access1-0",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      2.04, 3.27, 6.29, 10.84, 15.67, 21.02, 23.85, 23.73, 18.73, 12.34, 7.83,
      5.01
    ]
  },
  {
    "gcm": "bnu-esm",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      3.99, 3.46, 5.24, 8.95, 13.64, 19.4, 23.22, 24.38, 18.81, 13.08, 8.04,
      5.31
    ]
  },
  {
    "gcm": "canesm2",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      3.94, 4.87, 7.25, 10.82, 15.58, 22.03, 24.89, 23.88, 16.48, 10.15, 6.53,
      5.15
    ]
  },
  {
    "gcm": "csiro-mk3-6-0",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      2.2, 3.18, 5.87, 9.42, 14.44, 20.7, 24.03, 23.59, 18.2, 12.29, 7.64, 4.39
    ]
  },
  {
    "gcm": "gfdl-cm3",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      4.33, 4.78, 7.69, 11.6, 15.95, 20.42, 23.93, 24.79, 20.42, 14.78, 9.02,
      5.83
    ]
  },
  {
    "gcm": "hadgem2-ao",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      -0.78, 1.58, 6.47, 12.72, 17.85, 23.54, 25.63, 25.6, 18.62, 12.44, 5.39,
      1.76
    ]
  },
  {
    "gcm": "ipsl-cm5a-mr",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      3.39, 3.62, 6.42, 10.2, 14.97, 19.95, 23.36, 23.1, 19.22, 13.29, 8.88,
      4.73
    ]
  },
  {
    "gcm": "miroc5",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      1.54, 2.89, 7.59, 12.79, 18.56, 22.94, 25.85, 24.26, 18.91, 13.3, 6.94,
      2.57
    ]
  },
  {
    "gcm": "mri-cgcm3",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      3.48, 5.52, 6.83, 10.88, 14.95, 19.53, 22.11, 21.09, 16.72, 11.58, 7.78,
      4.78
    ]
  },
  {
    "gcm": "noresm1-m",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "monthVals": [
      5.46, 5.92, 7.74, 10.88, 15.14, 19.69, 22.29, 22.06, 17.37, 11.08, 8.02,
      6.05
    ]
  }
]
```

And here is a typical annual data response:

```json
[
  {
    "gcm": "access1-0",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.55]
  },
  {
    "gcm": "bnu-esm",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.29]
  },
  {
    "gcm": "canesm2",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.63]
  },
  {
    "gcm": "csiro-mk3-6-0",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.16]
  },
  {
    "gcm": "gfdl-cm3",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [13.63]
  },
  {
    "gcm": "hadgem2-ao",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.57]
  },
  {
    "gcm": "ipsl-cm5a-mr",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.59]
  },
  {
    "gcm": "miroc5",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [13.18]
  },
  {
    "gcm": "mri-cgcm3",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.1]
  },
  {
    "gcm": "noresm1-m",
    "variable": "tas",
    "fromYear": 2020,
    "toYear": 2039,
    "annualData": [12.64]
  }
]
```

### GCM

GCM in each of the objects in the response is one of:

- access1-0
- bnu-esm
- canesm2
- csiro-mk3-6-0
- gfdl-cm3
- hadgem2-ao
- ipsl-cm5a-mr
- miroc5
- mri-cgcm3
- noresm1-m

# Try it out

You can open the Swagger UI of the API on https://taneo-climate-api.herokuapp.com/ and try it yourself!

Be careful to enter correct start and end year pairs, e.g. 2020 and 2039.
One set of valid parameters is:

| parameter   | value |
| ----------- | ----- |
| variable    | tas   |
| startYear   | 2020  |
| endYear     | 2039  |
| countryCode | SVN   |
