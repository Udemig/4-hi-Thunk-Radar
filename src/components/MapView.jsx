import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import Leaflet from 'leaflet';
import icon from '../assets/flight.png';
import { useState } from 'react';
import SideDetail from './SideDetail';

const MapView = () => {
  const state = useSelector((store) => store.reducer);
  const [showDetails, setShowDetails] = useState(false);
  const [detailId, setDetailId] = useState();

  const planeIcon = new Leaflet.icon({
    iconUrl: icon,
    iconSize: [45, 45],
  });

  //   detay butonuna tıklanınca
  const handleClick = (id) => {
    setDetailId(id);
    setShowDetails(true);
  };

  return (
    <div>
      <h3 className="px-3 text-light">
        {state.flights.length} uçuş bulundu
      </h3>
      <MapContainer
        center={[39.925, 32.8662]}
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.flights.map((plane) => (
          <Marker
            position={[plane.lat, plane.lng]}
            icon={planeIcon}
          >
            <Popup>
              <div className="popup">
                <span>Kod: {plane.code}</span>
                <button
                  onClick={() => handleClick(plane.id)}
                >
                  Detay
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {showDetails && (
        <SideDetail
          detailId={detailId}
          setShowDetails={setShowDetails}
        />
      )}
    </div>
  );
};

export default MapView;
