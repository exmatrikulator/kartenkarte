#!/bin/bash

case "$1" in
    "init")
        if [ ! -f /db/osm.bz2 ]; then
            #bin/download_clone.sh --source=https://dev.overpass-api.de/api_drolbr/ --db-dir="/db/" --meta=no
            #curl https://download.geofabrik.de/europe/germany/nordrhein-westfalen/duesseldorf-regbez-latest.osm.bz2 -o /tmp/osm.bz2
            #curl https://download.geofabrik.de/europe/germany/nordrhein-westfalen/koeln-regbez-latest.osm.bz2 -o /tmp/osm.bz2
            #curl https://download.geofabrik.de/europe/germany-latest.osm.bz2 -o /tmp/osm.bz2
            curl $OSM_DOWNLOAD_URL -o /db/osm.bz2
        else
            echo "osm file already downloaded"
        fi
        rm -f /db/osm3s_v0.7.58_osm_base
        /app/bin/init_osm3s.sh /db/osm.bz2 /db /app
    ;;
    "nginx")
        if [ $(ls -l /db | wc -l) -lt 30 ]; then
            echo "not init yet"
            exit
        fi
        /etc/init.d/fcgiwrap start
        nginx -g "daemon off;"
    ;;
    "dispatcher")
        if [ $(ls -l /db | wc -l) -lt 30 ]; then
            echo "not init yet"
            exit
        fi
        /etc/init.d/fcgiwrap start
        nginx #-g "daemon off;"
        # delete flag file
        rm /db//osm3s_*
        bin/dispatcher --osm-base --meta --db-dir=/db/
    ;;
    "fetch")
        if [ $(ls -l /db | wc -l) -lt 30 ]; then
            echo "not init yet"
            exit
        fi
        bin/fetch_osc.sh id "https://planet.openstreetmap.org/replication/minute/" "diffs/"
    ;;
    "apply_osc_to_db")
        if [ $(ls -l /db | wc -l) -lt 30 ]; then
            echo "not init yet"
            exit
        fi
        bin/apply_osc_to_db.sh "diffs/" id --meta=yes
    ;;
    *)
        echo "you must enter a mode"
        exec "$@"
        exit
esac
