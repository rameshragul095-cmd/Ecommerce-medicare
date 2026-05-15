import Profile from "./Profile";

import { useNavigate } from "react-router-dom";

// import {
//   FaQuestionCircle,
//   FaSearch
// } from "react-icons/fa";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import { useState } from "react";


/* LEAFLET FIX */

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",

});


/* LOCATION PICKER */

function LocationMarker({
  setAddress,
  setPosition,
}) {

  useMapEvents({

    async click(e) {

      const lat = e.latlng.lat;

      const lng = e.latlng.lng;

      setPosition([lat, lng]);

      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );

      const data = await response.json();

      setAddress({

        area:
          data.address.suburb ||
          data.address.neighbourhood ||
          "Selected Area",

        street:
          data.address.road ||
          "Street",

        city:
          data.address.city ||
          data.address.town ||
          "City",

        pincode:
          data.address.postcode ||
          "000000",

        phone:
          "+91 9876543210",

      });

    },

  });

  return null;
}


export default function Address() {

  const navigate = useNavigate();

  const [search, setSearch] =
    useState("");

  const [position, setPosition] =
    useState([
      13.0827,
      80.2707,
    ]);

  const [address, setAddress] =
    useState({

      area: "Home",

      street: "123 Green Park",

      city: "Chennai",

      pincode: "600028",

      phone: "+91 9876543210",

    });


  /* SEARCH LOCATION */

  const searchLocation = async () => {

    if (!search) return;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${search}`
    );

    const data = await response.json();

    if (data.length > 0) {

      const lat =
        parseFloat(data[0].lat);

      const lon =
        parseFloat(data[0].lon);

      setPosition([lat, lon]);

      setAddress({

        area:
          data[0].display_name
            .split(",")[0],

        street:
          data[0].display_name
            .split(",")[1] || "",

        city:
          data[0].display_name
            .split(",")[2] || "",

        pincode: "600000",

        phone:
          "+91 9876543210",

      });

    }

  };


  return (

    <Profile>

      {/* GLOW EFFECTS */}

      <div className="premium-glow premium-glow1"></div>

      <div className="premium-glow premium-glow2"></div>


      {/* MAIN CONTAINER */}

      <div className="address-container">

        {/* TITLE */}

        <h1 className="address-title">

          Address Book

        </h1>


        {/* SEARCH */}

        <div className="address-search">

          <div className="address-search-box">

            <FaSearch className="text-gray-500 text-2xl" />

            <input
              type="text"
              placeholder="Search Address..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="address-input"
            />

          </div>


          <button
            onClick={searchLocation}
            className="address-search-btn"
          >

            Search

          </button>

        </div>


        {/* ADDRESS CARD */}

        <div className="premium-address-card">

          <h2 className="address-area">

            {address.area}

          </h2>

          <p className="address-detail">

            {address.street},

          </p>

          <p className="address-detail">

            {address.city}
            {" - "}
            {address.pincode}

          </p>

          <p className="address-phone">

            {address.phone}

          </p>

        </div>


        {/* MAP */}

        <div className="premium-map-container">

          <MapContainer
            center={position}
            zoom={13}
            style={{
              height: "600px",
              width: "100%",
            }}
          >

            <TileLayer
              attribution='&copy; OpenStreetMap'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <Marker position={position}>

              <Popup>

                Selected Address

              </Popup>

            </Marker>


            <LocationMarker
              setAddress={setAddress}
              setPosition={setPosition}
            />

          </MapContainer>

        </div>


        {/* HELP BUTTON */}

        <button

          onClick={() =>
            navigate("/help")
          }

          className="premium-help-btn"

        >

          <div className="flex items-center gap-4">

            <FaQuestionCircle />

            <span className="font-semibold text-2xl">

              Need Help

            </span>

          </div>

          →

        </button>

      </div>

    </Profile>

  );
}