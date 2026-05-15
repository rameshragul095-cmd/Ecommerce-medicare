import Navbar from "../components/Navbar";

import ProgressTracker
from "../components/ProgressTracker";

export default function Payment() {

  return (

    <div className="bg-[#f5f5f5] min-h-screen">

      <Navbar />

      <div className="flex justify-end p-6">

        <ProgressTracker step={4} />

      </div>


      <div className="grid grid-cols-12 gap-8 px-10">

        {/* PAYMENT */}

        <div className="col-span-8 bg-white rounded-2xl shadow p-8">

          <h1 className="text-3xl font-bold mb-8">

            Payment Options

          </h1>


          <div className="grid grid-cols-2 gap-5">

            <div className="border rounded-2xl p-6 hover:border-green-500 cursor-pointer">

              Credit Card

            </div>

            <div className="border rounded-2xl p-6 hover:border-green-500 cursor-pointer">

              Debit Card

            </div>

            <div className="border rounded-2xl p-6 hover:border-green-500 cursor-pointer">

              UPI

            </div>

            <div className="border rounded-2xl p-6 hover:border-green-500 cursor-pointer">

              Cash On Delivery

            </div>

          </div>

        </div>


        {/* SUMMARY */}

        <div className="col-span-4 space-y-6">

          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold">

              Cart Summary

            </h2>

          </div>


          <div className="bg-white rounded-2xl shadow p-6">

            <h2 className="text-2xl font-bold">

              Delivery Details

            </h2>

          </div>

        </div>

      </div>


      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-5 flex justify-center gap-8">

        <button className="px-12 py-4 rounded-full border text-red-500 border-red-500">

          Back

        </button>


        <button className="px-16 py-4 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-xl">

          Pay Now

        </button>

      </div>

    </div>

  );

}