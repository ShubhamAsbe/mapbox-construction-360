const plotpoints = (map, pointsData) => {
    const featureCollection = {
      type: 'FeatureCollection',
      features: pointsData.map((point, index) => ({
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [point.long, point.lat],
        },
        properties: {
          index: index,
          circleColor: 'green', // Assuming you want all points to be green
        },
      })),
    };
  
    // Add the GeoJSON data as a source on the map
    map.addSource('points', {
      type: 'geojson',
      data: featureCollection,
    });
  
    // Add a layer for the points
    map.addLayer({
      id: 'points',
      type: 'circle',
      source: 'points',
      paint: {
        'circle-radius': 6,
        'circle-color': ['get', 'circleColor'], // Use the 'circleColor' property to determine the color
        'circle-stroke-width': 1,
        'circle-stroke-color': '#ffffff',
      },
    });
  };
  
  export default plotpoints;
  