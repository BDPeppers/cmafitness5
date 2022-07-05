import * as React from "react";
import GoogleMapReact from "google-map-react";
import RoomIcon from "@mui/icons-material/Room";

export interface ICmaMarkerProps {
  lat: number;
  lng: number;
}

function CmaMarker(props: ICmaMarkerProps) {
  return <RoomIcon style={{ fontSize: "2.5rem", color: "#F8234D" }} />;
}

//Gym coordinates
const defaultMapProps = {
  center: { lat: 32.611931, lng: -83.678253 },
  zoom: 13,
};

const CmaMap = () => {
  return (
    <div style={{ height: "35rem", width: "100vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCsp9_jlm4odj6ub2wxf7iS3RhrDM2pVbM" }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
        draggable={false}
      >
        <CmaMarker lat={32.611931} lng={-83.678253} />
      </GoogleMapReact>
    </div>
  );
};

export default CmaMap;
