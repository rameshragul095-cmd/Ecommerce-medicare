import Navbar from "../components/Navbar";

import {
  useState,
  useContext
} from "react";

import { useNavigate } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaTimes
} from "react-icons/fa";

import {
  DeliveryContext
} from "../context/DeliveryContext";

export default function Delivery() {

  const navigate = useNavigate();

  const {

    deliveryAddress,
    setDeliveryAddress,

    selectedStore,
    setSelectedStore

  } = useContext(DeliveryContext);

  const [showAddressModal,
    setShowAddressModal] =
    useState(false);

  const [addressType,
    setAddressType] =
    useState("Home");

  const [fullName,
    setFullName] =
    useState("");

  const [mobile,
    setMobile] =
    useState("");

  const [manualAddress,
    setManualAddress] =
    useState("");

  const [useManual,
    setUseManual] =
    useState(false);

  const stores = [

    {
      id: 1,
      name:
        "MEDIPLUS CHENNAI STORE 1",
      address:
        "Anna Nagar Chennai"
    },

    {
      id: 2,
      name:
        "MEDIPLUS CHENNAI STORE 2",
      address:
        "Anna Nagar Chennai"
    },

    {
      id: 3,
      name:
        "MEDIPLUS CHENNAI STORE 3",
      address:
        "Anna Nagar Chennai"
    },

    {
      id: 4,
      name:
        "MEDIPLUS CHENNAI STORE 4",
      address:
        "Anna Nagar Chennai"
    },

    {
      id: 5,
      name:
        "MEDIPLUS CHENNAI STORE 5",
      address:
        "Anna Nagar Chennai"
    },

    {
      id: 6,
      name:
        "MEDIPLUS CHENNAI STORE 6",
      address:
        "Anna Nagar Chennai"
    }

  ];

  return (

    <div className="bg-[#f5f7fb] min-h-screen">

      <Navbar />

      {/* TRACKER */}

      <div className="flex justify-end gap-10 px-16 py-6 text-sm font-semibold">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">

            1

          </div>

          Shopping Cart

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">

            2

          </div>

          Delivery Details

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">

            3

          </div>

          Promotions & Review

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">

            4

          </div>

          Payment

        </div>

      </div>

      {/* MAIN */}

      <div className="flex gap-8 px-8 pb-32">

        {/* LEFT */}

        <div className="w-[420px] bg-white rounded-2xl shadow border">

          <div className="p-6 border-b font-bold text-xl">

            Home Delivery Options

          </div>

          {

            deliveryAddress ?

            (

              <div className="p-8">

                <div className="border rounded-2xl p-6">

                  <div className="flex justify-between">

                    <h2 className="font-bold text-2xl">

                      {deliveryAddress.type}

                    </h2>

                    <button

                      onClick={() =>
                        setShowAddressModal(true)
                      }

                      className="text-teal-600 font-bold"

                    >

                      Change

                    </button>

                  </div>

                  <p className="mt-5 text-2xl font-bold">

                    {deliveryAddress.name}

                  </p>

                  <p className="mt-4 text-gray-600 text-lg">

                    {deliveryAddress.address}

                  </p>

                  <p className="mt-3 text-lg">

                    {deliveryAddress.mobile}

                  </p>

                </div>

              </div>

            )

            :

            (

              <div className="flex flex-col items-center justify-center py-20">

                <FaMapMarkerAlt
                  className="text-pink-400"
                  size={100}
                />

                <h2 className="text-4xl mt-6 font-semibold">

                  No Address added

                </h2>

                <button

                  onClick={() =>
                    setShowAddressModal(true)
                  }

                  className="mt-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-5 rounded-full text-2xl font-bold shadow-lg"

                >

                  Add New Address

                </button>

              </div>

            )

          }

        </div>

        {/* RIGHT */}

        <div className="flex-1 bg-white rounded-2xl shadow border p-8">

          <h1 className="text-5xl font-bold mb-10">

            Pickup From Store

          </h1>

          <div className="grid grid-cols-2 gap-8">

            {stores.map((store) => (

              <div

                key={store.id}

                onClick={() =>
                  setSelectedStore(store)
                }

                className={`border rounded-2xl p-8 cursor-pointer transition-all duration-300
                
                ${
                  selectedStore?.id === store.id
                  ? "border-red-500 bg-red-50 shadow-xl scale-[1.02]"
                  : "hover:shadow-lg bg-white"
                }`}

              >

                <div className="flex items-start gap-5">

                  <input

                    type="radio"

                    checked={
                      selectedStore?.id ===
                      store.id
                    }

                    onChange={() =>
                      setSelectedStore(store)
                    }

                    className="mt-2 w-6 h-6 accent-red-500"

                  />

                  <div>

                    <h2 className="font-bold text-3xl">

                      {store.name}

                    </h2>

                    <p className="text-gray-500 mt-4 text-xl">

                      {store.address}

                    </p>

                    <button className="text-blue-600 mt-6 text-xl">

                      Get Directions

                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* BUTTONS */}

      <div className="fixed bottom-0 left-0 w-full bg-white border-t py-6 flex justify-center gap-10 z-40">

        <button

          onClick={() =>
            navigate("/cart")
          }

          className="border border-red-400 text-red-500 px-16 py-4 rounded-full text-2xl font-semibold"

        >

          Back

        </button>

        <button

          onClick={() => {

            if (!selectedStore) {

              alert(
                "Please select a store"
              );

              return;

            }

            if (!deliveryAddress) {

              alert(
                "Please add address"
              );

              return;

            }

            navigate("/review");

          }}

          className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-20 py-4 rounded-full text-2xl font-bold shadow-lg"

        >

          Proceed

        </button>

      </div>

      {/* ADDRESS MODAL */}

      {

        showAddressModal && (

          <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

            <div className="bg-white w-[95%] h-[92vh] rounded-3xl overflow-hidden relative flex">

              {/* CLOSE */}

              <button

                onClick={() =>
                  setShowAddressModal(false)
                }

                className="absolute top-6 right-6 z-50"

              >

                <FaTimes
                  size={35}
                  className="text-gray-500"
                />

              </button>

              {/* MAP */}

              <div className="w-1/2 h-full p-6 border-r overflow-y-auto">

                <div className="flex gap-4 mb-8">

                  <button

                    onClick={() =>
                      setUseManual(false)
                    }

                    className={`px-6 py-3 rounded-full font-bold
                      
                    ${
                      !useManual
                      ? "bg-red-500 text-white"
                      : "border"
                    }`}

                  >

                    Select From Map

                  </button>

                  <button

                    onClick={() =>
                      setUseManual(true)
                    }

                    className={`px-6 py-3 rounded-full font-bold
                      
                    ${
                      useManual
                      ? "bg-red-500 text-white"
                      : "border"
                    }`}

                  >

                    Enter Manually

                  </button>

                </div>

                {

                  useManual ?

                  (

                    <textarea

                      value={manualAddress}

                      onChange={(e) =>
                        setManualAddress(
                          e.target.value
                        )
                      }

                      placeholder="Enter Full Address"

                      className="w-full h-[300px] border rounded-2xl p-5 text-xl"

                    />

                  )

                  :

                  (

                    <iframe

                      title="map"

                      width="100%"

                      height="650"

                      style={{
                        border: 0,
                        borderRadius: "20px"
                      }}

                      loading="lazy"

                      allowFullScreen

                      src="https://maps.google.com/maps?q=Chennai&t=&z=13&ie=UTF8&iwloc=&output=embed"

                    />

                  )

                }

              </div>

              {/* FORM */}

              <div className="flex-1 overflow-y-auto">

                <div className="p-10">

                  <h1 className="text-6xl font-bold">

                    Add New Address

                  </h1>

                  <div className="mt-14">

                    <h2 className="text-4xl font-bold">

                      Selected Locality

                    </h2>

                    <input

                      type="text"

                      value={
                        useManual
                        ? manualAddress
                        : "Chennai, Tamil Nadu 600028, India"
                      }

                      readOnly

                      className="w-full mt-5 border rounded-xl px-6 py-5 text-2xl"

                    />

                  </div>

                  <div className="mt-12">

                    <h2 className="text-4xl font-bold">

                      Save this address as

                    </h2>

                    <div className="flex gap-5 mt-6">

                      {

                        ["Home", "Work", "Others"]
                        .map((type) => (

                          <button

                            key={type}

                            onClick={() =>
                              setAddressType(type)
                            }

                            className={`px-10 py-4 rounded-full text-2xl border
                            
                            ${
                              addressType === type
                              ? "bg-red-500 text-white border-red-500"
                              : ""
                            }`}

                          >

                            {type}

                          </button>

                        ))

                      }

                    </div>

                  </div>

                  <div className="mt-14">

                    <h2 className="text-4xl font-bold">

                      Fill Your Details

                    </h2>

                    <div className="grid grid-cols-2 gap-6 mt-6">

                      <input

                        type="text"

                        value={fullName}

                        onChange={(e) =>
                          setFullName(
                            e.target.value
                          )
                        }

                        placeholder="Enter your full name"

                        className="border rounded-xl px-6 py-5 text-2xl"

                      />

                      <input

                        type="text"

                        value={mobile}

                        onChange={(e) =>
                          setMobile(
                            e.target.value
                          )
                        }

                        placeholder="Enter Mobile Number"

                        className="border rounded-xl px-6 py-5 text-2xl"

                      />

                    </div>

                  </div>

                  {/* BUTTONS */}

                  <div className="flex justify-center gap-8 mt-20">

                    <button

                      onClick={() =>
                        setShowAddressModal(false)
                      }

                      className="border border-gray-400 px-20 py-5 rounded-full text-3xl"

                    >

                      Cancel

                    </button>

                    <button

                      onClick={() => {

                        const finalAddress =

                          useManual

                          ? manualAddress

                          : "Chennai, Tamil Nadu 600028, India";

                        setDeliveryAddress({

                          type: addressType,

                          name: fullName,

                          mobile,

                          address: finalAddress

                        });

                        setShowAddressModal(false);

                      }}

                      className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-20 py-5 rounded-full text-3xl font-bold shadow-lg"

                    >

                      Save Address

                    </button>

                  </div>

                </div>

              </div>

            </div>

          </div>

        )

      }

    </div>

  );

}