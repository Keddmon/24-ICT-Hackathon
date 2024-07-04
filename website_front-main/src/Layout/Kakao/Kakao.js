import { useEffect, useState } from "react";
const { kakao } = window;

const Kakao = ({
    data,
    navigate
}) => {

    useEffect(() => {
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(35.103535, 129.042373),
            level: 7
        };

        const map = new kakao.maps.Map(container, options);

        const clusterer = new kakao.maps.MarkerClusterer({
            map: map,
            averageCenter: true,
            minLevel: 10,
            disableClickZoom: true
        });

        const markers = data.positions.map((position, i) => {
            const marker = new kakao.maps.Marker({
                position: new kakao.maps.LatLng(position.lat, position.lng),
            });

            kakao.maps.event.addListener(marker, 'click', function() {
                navigate(`/warnings/${i}`)
            });

            return marker;
        });
        
        clusterer.addMarkers(markers)

        kakao.maps.event.addListener(clusterer, 'clusterclick', function (cluster) {
            const level = map.getLevel()-4;
            
            map.setLevel(level, {anchor: cluster.getCenter()})
        })
    }, [data, navigate]);

    return (
        <>
            <div id="map" style={{
                width: '100%',
                height: '100%',
                borderRadius: '4px',
            }}>

            </div>
        </>
    );
};

export default Kakao;