FROM ubuntu:22.04 as build
ARG OVERPASS_VERSION=0.7.58
WORKDIR /app

RUN apt update && apt -y install g++ make expat libexpat1-dev zlib1g-dev

ADD http://dev.overpass-api.de/releases/osm-3s_v${OVERPASS_VERSION}.tar.gz /app/overpass.tar.gz

RUN tar --strip-components 1 -xzf overpass.tar.gz && \
    ./configure --prefix=/output && nice make -j$(grep -c ^processor /proc/cpuinfo) install



FROM ubuntu:22.04
WORKDIR /app
VOLUME /db
ENV OSM_DOWNLOAD_URL https://download.geofabrik.de/europe/germany-latest.osm.bz2

RUN apt update && apt -y install bzip2 curl expat nginx fcgiwrap

COPY --from=build /output /app
ADD docker-* /usr/local/bin/
ADD nginx.conf /etc/nginx/sites-available/default

ENTRYPOINT [ "/usr/local/bin/docker-entrypoint.sh" ]