# Eclipse Dirigible - Performance Test Project

## Overview

The sample project is modeled through the `Enity Data Modeling (EDM)` editor and generated with the `Application - full stack (AngularJS)` template.
The project has only one entity `Students` with few fields.

#### Students:

- `Id` - integer
- `FirstName` - varchar(20)
- `LastName` - varchar(20)
- `Age` - integer
- `Bio` - varchar(1024)
- `Bio2` - varchar(1024)
- `Bio3` - varchar(1024)
- `Bio4` - varchar(1024)
- `Bio5` - varchar(1024)
- `Bio6` - varchar(1024)
- `Bio7` - varchar(1024)
- `Bio8` - varchar(1024)
- `Bio9` - varchar(1024)
- `Bio10` - varchar(1024)

> The default generated data size, for `100` entites, is `803Kb`. For `1000` entities the data size is `8Mb`.

### User Interface

Access the sample application dashboard at: `/services/v4/web/university/`

## Perforamce Tests

#### Update the sample data size:

1. Access `/services/v4/js/university/api/Entities/Students.js/count` to check the sample data size _(default is `100`)_.
1. Set the sample data size to `1000` -  `/services/v4/js/university-data/generator.js?size=1000`.
1. Wait for the new data size to be set - `/services/v4/js/university/api/Entities/Students.js/count` _(usually it takes `~30 sec`)_

#### Monitor the response times:

1. List all entites: `/services/v4/js/university/api/Entities/Students.js`
1. List the first 200 entities: `/services/v4/js/university/api/Entities/Students.js?offset=0&limit=200`
