import Navbar from "../components/Navbar";

import ProgressTracker
from "../components/ProgressTracker";

import {
  useNavigate
} from "react-router-dom";

import {
  useContext
} from "react";

import {
  CartContext
} from "../context/CartContext";

import {
  DeliveryContext
} from "../context/DeliveryContext";

export default function Review() {

  const navigate = useNavigate();

  const {
    cartItems
  } = useContext(CartContext);

  const {

    deliveryAddress,
    selectedStore

  } = useContext(DeliveryContext);

  // TOTALS

  const subtotal =
    cartItems.reduce(

      (acc, item) =>

        acc +
        (item.price * item.quantity),

      0
    );

  const discount = 120;

  const deliveryCharge = 40;

  const total =
    subtotal -
    discount +
    deliveryCharge;

  return (

    <div className="bg-[#f5f7fb] min-h-screen pb-40">

      <Navbar />

      {/* TRACKER */}

      <div className="flex justify-end p-6">

        <ProgressTracker step={3} />

      </div>

      {/* MAIN */}

      <div className="grid grid-cols-12 gap-8 px-10">

        {/* LEFT */}

        <div className="col-span-8 space-y-8">

          {/* ORDER DETAILS */}

          <div className="bg-white rounded-3xl shadow overflow-hidden">

            <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-5 text-3xl font-bold">

              Order Details

            </div>

            <div>

              {

                cartItems.map((item) => (

                  <div

                    key={item.id}

                    className="flex justify-between items-center p-6 border-b"

                  >

                    {/* LEFT */}

                    <div className="flex items-center gap-6">

                      <img
                        src={item.image}
                        alt=""
                        className="w-24 h-24 object-contain"
                      />

                      <div>

                        <h2 className="text-2xl font-bold">

                          {item.name}

                        </h2>

                        <p className="text-gray-500 mt-2">

                          Qty :
                          {item.quantity}

                        </p>

                        <p className="text-gray-500">

                          {item.category}

                        </p>

                      </div>

                    </div>

                    {/* RIGHT */}

                    <div className="text-right">

                      <p className="text-gray-400 line-through text-xl">

                        ₹
                        {item.price + 50}

                      </p>

                      <p className="text-3xl font-black text-red-500">

                        ₹
                        {item.price}

                      </p>

                    </div>

                  </div>

                ))

              }

            </div>

          </div>

          {/* DELIVERY ADDRESS */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold mb-6">

              Delivery Address

            </h1>

            {

              deliveryAddress && (

                <div className="border rounded-2xl p-6">

                  <div className="flex justify-between">

                    <h2 className="font-bold text-2xl">

                      {deliveryAddress.type}

                    </h2>

                    <button
                      onClick={() =>
                        navigate("/delivery")
                      }
                      className="text-teal-600 font-bold"
                    >

                      Change

                    </button>

                  </div>

                  <p className="mt-4 text-2xl font-bold">

                    {deliveryAddress.name}

                  </p>

                  <p className="mt-4 text-gray-600 text-lg">

                    {deliveryAddress.address}

                  </p>

                  <p className="mt-3 text-lg">

                    {deliveryAddress.mobile}

                  </p>

                </div>

              )

            }

          </div>

          {/* STORE DETAILS */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold mb-6">

              Pickup Store

            </h1>

            {

              selectedStore && (

                <div className="border rounded-2xl p-6">

                  <h2 className="text-2xl font-bold">

                    {selectedStore.name}

                  </h2>

                  <p className="text-gray-500 mt-3 text-lg">

                    {selectedStore.address}

                  </p>

                </div>

              )

            }

          </div>

        </div>

        {/* RIGHT */}

        <div className="col-span-4 space-y-8">

          {/* OFFERS */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold">

              Applicable Offers

            </h1>

            <div className="border-2 border-dashed border-green-400 rounded-3xl p-8 mt-6 bg-green-50">

              <h1 className="text-red-500 text-5xl font-black">

                10% OFF

              </h1>

              <p className="mt-4 text-lg text-gray-600">

                Applicable on medicines above ₹999

              </p>

            </div>

          </div>

          {/* SUMMARY */}

          <div className="bg-white rounded-3xl shadow p-8">

            <h1 className="text-3xl font-bold mb-8">

              Cart Summary

            </h1>

            <div className="space-y-5 text-xl">

              <div className="flex justify-between">

                <span>

                  No. Of Items

                </span>

                <span>

                  {cartItems.length}

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Subtotal

                </span>

                <span>

                  ₹{subtotal}

                </span>

              </div>

              <div className="flex justify-between text-green-600">

                <span>

                  Discount

                </span>

                <span>

                  -₹{discount}

                </span>

              </div>

              <div className="flex justify-between">

                <span>

                  Delivery Charges

                </span>

                <span>

                  ₹{deliveryCharge}

                </span>

              </div>

              <hr />

              <div className="flex justify-between text-3xl font-black">

                <span>

                  Total

                </span>

                <span className="text-red-500">

                  ₹{total}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* FOOTER BUTTONS */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-5 flex justify-center gap-8 z-40">

        <button

          onClick={() =>
            navigate("/delivery")
          }

          className="px-14 py-4 rounded-full border border-red-500 text-red-500 text-2xl font-semibold"

        >

          Back

        </button>

        <button

          onClick={() =>
            navigate("/payment")
          }

          className="px-20 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white text-2xl font-bold shadow-xl"

        >

          Proceed To Payment

        </button>

      </div>

    </div>

  );

}