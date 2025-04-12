import Wrapper from "../assets/wrapper/FooterSection";
import {
  MapContainer,
  TileLayer,
  Marker,
  ZoomControl,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
const iconUrl =
  "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";
const markerIcon = icon({
  iconUrl: iconUrl,
  iconSize: [20, 30],
});

function FooterSection() {
  const defaultLocation: [number, number] = [25.1124, 55.139];
  return (
    <Wrapper id="info">
      <div className="info">
        <p>
          <IoLocationOutline />
          Dubai Palm Jumeirah
        </p>
        <p>
          <MdOutlinePhone />

          <a href="tel:+963949574984">+963-949574984</a>
        </p>
        <p>
          <TfiEmail />
          <a href="mailto:rami.sultana@gmail.com">rami.sultan@gmail.com</a>
        </p>
      </div>
      <span style={{ marginBottom: "1rem" }}>
        Lancaster Plaza Beirut is a 5-star hotel in the heart of Dubai,
        representing a refined world of hospitality. Lancaster Plaza Beirut
        soars itself with stunning views of the Palm Jumeirah . destinations,
        Lancaster Plaza is the optimal choice for business and leisure tourists.
        A perfect medley of 149 guest rooms and suites spread over 19 floors.
        Each room has a blend of modern and luxurious designs with an inspiring
        sea view.
      </span>
      <div>
        <MapContainer
          scrollWheelZoom={false}
          zoomControl={false}
          className="map"
          center={defaultLocation}
          zoom={13}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="bottomright" />
          <Marker position={defaultLocation} icon={markerIcon}>
            <Popup>
              <span>our location</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>

      <h2>copy rights Rami sultana</h2>
    </Wrapper>
  );
}
export default FooterSection;
