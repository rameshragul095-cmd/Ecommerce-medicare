import Profile from "./Profile";
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
  FaPlus,
  FaMapMarkerAlt,
  FaHome,
  FaBriefcase
} from "react-icons/fa";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function LocationPicker({
  setPosition,
  setAddressData
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

      setAddressData((prev) => ({
        ...prev,
        address:
          data.display_name || "",
      }));

    }

  });

  return null;
}

export default function Address() {

  const [open, setOpen] =
    useState(false);

  const [position, setPosition] =
    useState([13.0827, 80.2707]);

  const [savedAddresses, setSavedAddresses] =
    useState([]);

  const [addressData, setAddressData] =
    useState({
      name: "",
      phone: "",
      type: "Home",
      address: "",
    });

  const saveAddress = () => {

    if (
      !addressData.name ||
      !addressData.phone ||
      !addressData.address
    ) {
      alert("Fill all details");
      return;
    }

    setSavedAddresses([
      ...savedAddresses,
      addressData
    ]);

    setOpen(false);

    setAddressData({
      name: "",
      phone: "",
      type: "Home",
      address: "",
    });

  };

  return (

    <Profile>

      <div className="min-h-screen p-8">

        {/* TITLE */}

        <h1 className="text-5xl font-bold text-cyan-600 mb-10">

          My Addresses

        </h1>

        {/* SAVED ADDRESS */}

        <div className="grid md:grid-cols-2 gap-8">

          {savedAddresses.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-[30px] p-6 shadow-xl border border-gray-100"
            >

              <div className="flex items-center gap-3">

                {item.type === "Home" ? (
                  <FaHome className="text-cyan-500 text-2xl" />
                ) : (
                  <FaBriefcase className="text-cyan-500 text-2xl" />
                )}

                <h2 className="text-2xl font-bold">

                  {item.type}

                </h2>

              </div>

              <p className="mt-4 text-gray-700">

                {item.name}

              </p>

              <p className="text-gray-700">

                {item.phone}

              </p>

              <p className="mt-2 text-gray-500">

                {item.address}

              </p>

            </div>

          ))}

        </div>

        {/* ADD BUTTON */}

        <button

          onClick={() => setOpen(true)}

          className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 text-lg font-bold"

        >

          <FaPlus />

          Add Address

        </button>

        {/* MODAL */}

        {open && (

          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

            <div className="bg-white w-[95%] max-w-7xl h-[85vh] rounded-[35px] overflow-hidden grid md:grid-cols-2">

              {/* MAP */}

              <div className="relative">

                <MapContainer
                  center={position}
                  zoom={15}
                  style={{
                    height: "100%",
                    width: "100%"
                  }}
                >

                  <TileLayer
                    attribution="&copy; OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Marker position={position} />

                  <LocationPicker
                    setPosition={setPosition}
                    setAddressData={setAddressData}
                  />

                </MapContainer>

                <div className="absolute top-5 left-5 bg-white px-5 py-3 rounded-2xl shadow-xl z-[1000] flex items-center gap-3">

                  <FaMapMarkerAlt className="text-red-500" />

                  <p className="font-semibold">

                    Select your delivery location

                  </p>

                </div>

              </div>

              {/* FORM */}

              <div className="p-10 overflow-y-auto">

                <div className="flex justify-between items-center">

                  <h1 className="text-4xl font-bold">

                    Add New Address

                  </h1>

                  <button
                    onClick={() => setOpen(false)}
                    className="text-3xl"
                  >

                    ×

                  </button>

                </div>

                <div className="mt-10 space-y-6">

                  <input
                    type="text"
                    placeholder="Full Name"
                    value={addressData.name}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        name: e.target.value
                      })
                    }
                    className="w-full border p-4 rounded-2xl outline-none"
                  />

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    value={addressData.phone}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        phone: e.target.value
                      })
                    }
                    className="w-full border p-4 rounded-2xl outline-none"
                  />

                  <textarea
                    rows="5"
                    placeholder="Selected Address"
                    value={addressData.address}
                    onChange={(e) =>
                      setAddressData({
                        ...addressData,
                        address: e.target.value
                      })
                    }
                    className="w-full border p-4 rounded-2xl outline-none"
                  />

                  {/* ADDRESS TYPE */}

                  <div className="flex gap-4">

                    <button
                      onClick={() =>
                        setAddressData({
                          ...addressData,
                          type: "Home"
                        })
                      }
                      className={`px-6 py-3 rounded-full ${
                        addressData.type === "Home"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >

                      Home

                    </button>

                    <button
                      onClick={() =>
                        setAddressData({
                          ...addressData,
                          type: "Work"
                        })
                      }
                      className={`px-6 py-3 rounded-full ${
                        addressData.type === "Work"
                          ? "bg-cyan-500 text-white"
                          : "bg-gray-100"
                      }`}
                    >

                      Work

                    </button>

                  </div>

                  <button

                    onClick={saveAddress}

                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-2xl text-xl font-bold shadow-xl"

                  >

                    Save Address

                  </button>

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    </Profile>

  );

}