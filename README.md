# Kartenkarte

Eine Karte für viele Karten

http://kartenkarte.org

## Install local with Docker
```
docker-compose build
docker-compose down
docker-compose run overpass init
docker-compose up -d
```

## Example of a map
Wo parke ich mein Fahrrad?
### The query string for overpass API
```
query: "(node({{bbox}})[amenity=bicycle_parking];);out center;"
```
### Style the Map
You habe to define a marker with a icon from [Font Awesome](https://fontawesome.com/v6/search) and a color from [Leaflet.awesome-markers](https://github.com/sigma-geosistemas/Leaflet.awesome-markers).

Now you can assign a node group the defined marker.
```
marker: { parking: {icon: 'square-parking', color: 'blue'}}
mapping:{ amenity:{bicycle_parking:"parking"}}
```