---
id: schema
title: Schema
---

If you are familiar with [GraphQL](https://graphql.org), you may wish to see the schema that the UniNinja API uses:

```graphql
type Query {
  universities: [University]
  courses(pubukprn: String!): [Course]
  course(pubukprn: String!, kiscourseid: String!, isFullTime: FullTime!): Course
  university(pubukprn: String!): University
}

type University {
  name: String!
  sortableName: String!
  pubukprn: String!
  campuses: [Campus]!
  uniType: UniversityType
  unionUrl: String
  url: String
  color: String
  courses: [Course]
}

type Campus {
  name: String
  location: Location!
  locationType: LocationType
  nearestTrainStation: TrainStation
  averageRent: Float
}

type Course {
  title: String!
  kiscourseid: String!
  isFullTime: FullTime
  courseURL: String
  years: Int
  placementYearAvailable: Boolean
  yearAbroadAvailable: Boolean
  degreeLabel: String
  isHons: Boolean
}

type Location {
  lat: Float!
  lon: Float!
}

type TrainStation {
  name: String!
  code: String
  location: Location!
  distance: Float!
}

enum LocationType {
  CITY
  SEASIDE_CITY
  TOWN
}

enum FullTime {
  FullTime
  PartTime
}

enum UniversityType {
  CAMPUS
  CITY
}
```
