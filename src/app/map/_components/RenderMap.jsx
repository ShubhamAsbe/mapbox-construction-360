"use client"
import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import plotpoints from './plotpoints';
import { pointsData } from './PointsDummyData';

mapboxgl.accessToken = "pk.eyJ1IjoicmFzdGEtYWkiLCJhIjoiY2xwNnc4NzhvMGR3NDJrb2lmeG9jcjE2ZyJ9.KeN3jW2_wBNQaSPvJwmYxQ";

export default function RenderMap() {

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/rasta-ai/clp9kjai4002g01pk3rc3fh1z', // style URL
            center: [73.7172889, 18.5960884], // starting position [lng, lat]
            zoom: 12, 
            attributionControl: false,

        });

        map.on('style.load', () => {
            plotpoints(map, pointsData);
        });

        // plotpoints(map,pointsData)

        // Cleanup function to remove the map when the component is unmounted
        return () => {
            map.remove();
        };
    }, []); // Empty dependency array ensures this effect runs only once after mount

    return (
        <div id="map" style={{ width: '100%', height: '100%' }}>
        </div>
    );
}
