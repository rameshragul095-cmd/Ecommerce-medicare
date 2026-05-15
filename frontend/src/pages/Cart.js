import Navbar from "../components/Navbar";

import { useContext } from "react";

import { CartContext }
from "../context/CartContext";

import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaTag,
  FaShieldAlt,
  FaTruck,
  FaCheckCircle
} from "react-icons/fa";

import { useNavigate }
from "react-router-dom";

export default function Cart() {

  const navigate = useNavigate();

  const {

    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty

  } = useContext(CartContext);

  // TOTAL

  const subtotal =
    cartItems.reduce(

      (sum, item) =>

        sum +
        item.price * item.quantity,

      0
    );

  const saved = 500;

  const deliveryCharge = 40;

  const total =
    subtotal -
    saved +
    deliveryCharge;

  return (

    <div className="min-h-screen bg-[#f4f8ff] pb-32">

      <Navbar />

      {/* TOP TRACKER */}

      <div className="flex justify-end gap-10 px-16 py-6 text-sm font-semibold">

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">

            1

          </div>

          Shopping Cart

        </div>

        <div className="flex items-center gap-3">

          <div className="w-8 h-8 rounded-full bg-gray-300 text-black flex items-center justify-center">

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

      <div className="px-10 py-4">

        <h1 className="text-5xl font-black mb-10">

          My Cart

        </h1>

        {

          cartItems.length === 0 ?

          (

            <div className="bg-white rounded-[40px] shadow-xl p-20 flex flex-col items-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt=""
                className="w-52 opacity-70"
              />

              <h1 className="text-5xl font-black mt-10">

                Cart is Empty

              </h1>

              <p className="text-gray-500 mt-4 text-2xl">

                Add medicines to continue

              </p>

              <button

                onClick={() =>
                  navigate("/home")
                }

                className="mt-10 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-16 py-5 rounded-full text-2xl font-bold shadow-xl"

              >

                Continue Shopping

              </button>

            </div>

          )

          :

          (

            <div className="grid grid-cols-12 gap-8">

              {/* LEFT */}

              <div className="col-span-8 space-y-8">

                {/* CART LIST */}

                <div className="bg-white rounded-[35px] shadow-lg overflow-hidden">

                  <div className="p-8 border-b flex justify-between items-center">

                    <div>

                      <h2 className="text-3xl font-bold">

                        Shopping Cart

                      </h2>

                      <p className="text-gray-500 mt-2">

                        {cartItems.length}
                        Items Added

                      </p>

                    </div>

                    <div className="bg-green-100 text-green-700 px-5 py-3 rounded-full font-bold">

                      Free Delivery Available

                    </div>

                  </div>

                  {

                    cartItems.map((item) => (

                      <div

                        key={item.id}

                        className="p-8 border-b flex justify-between items-center hover:bg-blue-50 transition-all duration-300"

                      >

                        {/* LEFT */}

                        <div className="flex gap-6">

                          <div className="bg-[#f4f8ff] p-5 rounded-3xl">

                            <img
                              src={item.image}
                              alt=""
                              className="w-32 h-32 object-contain hover:scale-110 transition"
                            />

                          </div>

                          <div>

                            <h2 className="text-3xl font-bold">

                              {item.name}

                            </h2>

                            <p className="text-gray-500 mt-2 text-lg">

                              {item.category}

                            </p>

                            <p className="text-green-600 font-bold mt-3">

                              In Stock

                            </p>

                            {/* QTY */}

                            <div className="mt-6 flex items-center gap-5">

                              <div className="flex items-center border-2 border-gray-200 rounded-full overflow-hidden shadow-sm">

                                <button

                                  onClick={() =>
                                    decreaseQty(item.id)
                                  }

                                  className="px-5 py-4 bg-red-500 text-white hover:bg-red-600 transition"

                                >

                                  <FaMinus />

                                </button>

                                <span className="px-8 text-2xl font-black">

                                  {item.quantity}

                                </span>

                                <button

                                  onClick={() =>
                                    increaseQty(item.id)
                                  }

                                  className="px-5 py-4 bg-green-500 text-white hover:bg-green-600 transition"

                                >

                                  <FaPlus />

                                </button>

                              </div>

                              <button

                                onClick={() =>
                                  removeFromCart(item.id)
                                }

                                className="border border-red-500 text-red-500 px-6 py-3 rounded-full flex items-center gap-3 hover:bg-red-50 transition"

                              >

                                <FaTrash />

                                Remove

                              </button>

                            </div>

                          </div>

                        </div>

                        {/* RIGHT */}

                        <div className="text-right">

                          <p className="line-through text-gray-400 text-2xl">

                            ₹{item.price + 80}

                          </p>

                          <h1 className="text-5xl font-black text-red-500">

                            ₹{item.price}

                          </h1>

                          <p className="text-green-600 font-bold mt-3 text-lg">

                            Save 45%

                          </p>

                        </div>

                      </div>

                    ))

                  }

                </div>

                {/* DELIVERY ESTIMATE */}

                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-[35px] shadow-lg p-8 flex items-center justify-between">

                  <div className="flex items-center gap-6">

                    <FaTruck size={50} />

                    <div>

                      <h2 className="text-3xl font-bold">

                        Delivery in 30 Minutes

                      </h2>

                      <p className="mt-2 text-lg">

                        Fast delivery available for your area

                      </p>

                    </div>

                  </div>

                  <FaCheckCircle size={45} />

                </div>

              </div>

              {/* RIGHT */}

              <div className="col-span-4">

                <div className="bg-white rounded-[35px] shadow-lg p-8 sticky top-10">

                  {/* COUPON */}

                  <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5 flex items-center gap-4">

                    <FaTag
                      className="text-orange-500"
                      size={28}
                    />

                    <div>

                      <h2 className="font-bold text-xl">

                        MEDICARE10 Applied

                      </h2>

                      <p className="text-gray-500">

                        You saved ₹500

                      </p>

                    </div>

                  </div>

                  {/* SUMMARY */}

                  <h2 className="text-3xl font-bold mt-10 mb-8">

                    Cart Summary

                  </h2>

                  <div className="space-y-6 text-xl">

                    <div className="flex justify-between">

                      <span>No. Of Items</span>

                      <span>

                        {cartItems.length}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span>Subtotal</span>

                      <span>

                        ₹{subtotal}

                      </span>

                    </div>

                    <div className="flex justify-between text-green-600 font-bold">

                      <span>Total Saved</span>

                      <span>

                        -₹{saved}

                      </span>

                    </div>

                    <div className="flex justify-between">

                      <span>Delivery Charges</span>

                      <span>

                        ₹{deliveryCharge}

                      </span>

                    </div>

                  </div>

                  <div className="border-t my-8"></div>

                  <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-black">

                      Total

                    </h1>

                    <h1 className="text-5xl font-black text-teal-700">

                      ₹{total}

                    </h1>

                  </div>

                  {/* SECURE */}

                  <div className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-5 flex items-center gap-4">

                    <FaShieldAlt
                      className="text-green-600"
                      size={28}
                    />

                    <div>

                      <h2 className="font-bold">

                        Secure Checkout

                      </h2>

                      <p className="text-gray-500 text-sm">

                        100% Safe Payments

                      </p>

                    </div>

                  </div>

                  {/* BUTTONS */}

                  <button

                    onClick={() =>
                      navigate("/delivery")
                    }

                    className="w-full mt-10 py-5 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white text-2xl font-bold shadow-xl hover:scale-105 transition"

                  >

                    Proceed

                  </button>

                  <button

                    onClick={() =>
                      navigate("/home")
                    }

                    className="w-full mt-5 py-5 rounded-2xl border text-2xl font-bold hover:bg-gray-50 transition"

                  >

                    Continue Shopping

                  </button>

                </div>

              </div>

            </div>

          )

        }

      </div>

    </div>

  );

}