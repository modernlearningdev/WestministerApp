import React from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import "./Map.scss";



const Map = () => {

    const [viewport, setViewport] = React.useState({
        latitude: -17.820646,
        longitude: 30.999092,
        zoom: 8
    });

    return (
        <div className="map">

        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={"pk.eyJ1IjoidHJpenlkZWJvaSIsImEiOiJja3Bnbml1bTIwNHUyMm9vODAzcDd2NzJ0In0.En3so0d4o0pBwyzr3zoamA"}
            width="100%"
            height="100%"
            mapStyle={"mapbox://styles/trizydeboi/ckpgpgcvg0vr617oaxi9u4znk"}
            onViewportChange={(viewport) => setViewport(viewport)}
        >

            <Marker

                latitude={-17.75667}
                longitude={31.10361}
            >
                Westminster International School

                </Marker>

        </ReactMapGL>

    </div>
    )
    
};


export default Map;
