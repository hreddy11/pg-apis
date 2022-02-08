
```diff
- (REFER to tasks.md for serialised learnining experience.)
```

1) create network 
```
docker network create pgnet
```
2) Create post gis docker
```
docker run -d --name postgis --network pgnet -e POSTGRES_PASSWORD=fr24Password -e POSTGRES_DB=flightradar -p 5432:5432 postgis/postgis
```

3) PGadmin install

```
docker run -d -p 8080:80 --network pgnet -e PGADMIN_DEFAULT_EMAIL=admin@gmail.com -e PGADMIN_DEFAULT_PASSWORD=Admin1234 dpage/pgadmin4
```

4) Install python libraries. requirements.txt
gdal has to be manually installed
geopandas has dependency on fiona, gdal, etc


```
pandas
geopandas
psycopg2-binary

```

as of 2020, - taken from Paul Ramsey blog
1) PostGIS provides core functionality
- bindings to PostgreSQL, the types and indexes,
- format reading and writing
- basic algorithms like distance and area
- performance tricks like caching
- simple geometry manipulations (add a point, dump rings, etc)
- algorithms that don’t exist in the other libraries
2) Proj provides coordinate system transformations
3) GDAL provides raster algorithms and format supports
4) GEOS provides computational geometry algorithms
- geometry relationships, like “intersects”, “touches” and “relate”
- geometry operations, like “intersection”, “union”
- basic algorithms, like “triangulate”