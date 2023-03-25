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
### Wo essen?
The query string:
```
[out:json];

(
  nwr[shop=bakery]({{bbox}});
  nwr[amenity=restaurant]({{bbox}});
  nwr[amenity=fast_food]({{bbox}});
  nwr[amenity=cafe]({{bbox}});
  nwr[shop=supermarket]({{bbox}});
  nwr[shop=butcher]({{bbox}});
  
  
);
out body;
>;
out skel qt;
```
Style the output
```
{{style: /* this is the MapCSS stylesheet */
node, area
{ color:gray; fill-color:gray; }

node[amenity=restaurant],
node[amenity=fast_food],
node[amenity=cafe],
area[amenity=restaurant],
area[amenity=fast_food],
area[amenity=cafe]
{ color:blue; fill-color:gray; }

node[shop=bakery],
area[shop=bakery]
{ color:grey; fill-color:yellow; }

node[shop=supermarket],
area[shop=supermarket]
{ color:gray; fill-color:green; }


node[shop=butcher],
area[shop=butcher]
{ color:gray; fill-color:orange; }

}}
```