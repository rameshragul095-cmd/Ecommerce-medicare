import { useContext, useState } from "react";

import { CartContext } from "../context/CartContext";

import {
  FaCheck,
  FaHeart
} from "react-icons/fa";

export default function ProductCard({ item }) {

  const { addToCart } =
    useContext(CartContext);

  const [loading, setLoading] =
    useState(false);

  const [added, setAdded] =
    useState(false);

  const handleAdd = () => {

  setLoading(true);

  setTimeout(() => {

    addToCart(item);

    setLoading(false);

    setAdded(true);

    // OPEN CART DROPDOWN
    window.dispatchEvent(
      new Event("openCart")
    );

    setTimeout(() => {

      setAdded(false);

    }, 1000);

  }, 500);

};

  return (

    <div className="relative bg-white rounded-[30px] p-5 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">

      {/* HEART */}

      <button
        className="absolute top-5 right-5 text-gray-400 text-2xl"
      >
        <FaHeart />
      </button>


      {/* IMAGE */}

      <div className="relative flex justify-center">

        <img
          src={item.image}
          alt=""
          className="w-40 h-40 object-contain hover:scale-110 transition duration-500"
        />


        {/* SUCCESS TICK */}

        {added && (

          <div className="absolute top-12 bg-green-500 w-20 h-20 rounded-full flex items-center justify-center animate-bounce shadow-2xl">

            <FaCheck className="text-white text-4xl" />

          </div>

        )}

      </div>


      {/* COMPANY */}

      <p className="text-gray-400 text-sm mt-5 uppercase">

        MEDICARE HEALTH SERVICES

      </p>


      {/* NAME */}

      <h2 className="text-2xl font-bold mt-2 leading-tight min-h-[70px]">

        {item.name}

      </h2>


      {/* PRICE */}

      <div className="mt-5">

        <div className="flex items-center gap-3">

          <h2 className="text-3xl font-extrabold">

            ₹{item.price}

          </h2>

          <p className="text-gray-400 line-through text-xl">

            ₹{item.price + 80}

          </p>

        </div>

        <p className="text-green-600 font-semibold mt-1">

          Save 45%

        </p>

      </div>


      {/* BUTTON */}

      <button

        onClick={handleAdd}

        disabled={loading}

        className={`

          mt-6 w-full py-4 rounded-2xl text-xl font-bold text-white transition-all duration-500

          ${loading
            ? "bg-gray-400"
            : added
            ? "bg-green-500"
            : "bg-gradient-to-r from-red-500 to-red-600 hover:scale-105 shadow-lg"
          }

        `}
      >

        {loading
          ? "Adding..."
          : added
          ? "Added To Cart"
          : "Add To Cart"}

      </button>

    </div>

  );
}