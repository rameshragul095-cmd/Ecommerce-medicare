import { useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

import {
  FaUserFriends,
  FaClipboardList,
  FaMoneyBill,
  FaCrown,
  FaMapMarkerAlt,
  FaTicketAlt,
  // FaQuestionCircle,
  FaSignOutAlt,
  FaGift,
} from "react-icons/fa";

export default function PharmacyVoucher() {

  const navigate = useNavigate();
  
  const [appliedVoucher, setAppliedVoucher] = useState("");
  const vouchers = [

    {
      id: 1,
      title: "Flat ₹100 OFF",
      code: "MEDI100",
      description: "Applicable on orders above ₹999",
      expiry: "30 May 2026",
      color: "bg-green-100",
    },

    {
      id: 2,
      title: "20% OFF Medicines",
      code: "HEALTH20",
      description: "Maximum discount ₹250",
      expiry: "12 June 2026",
      color: "bg-yellow-100",
    },

    {
      id: 3,
      title: "Free Delivery",
      code: "FREEDEL",
      description: "Unlimited free delivery",
      expiry: "28 May 2026",
      color: "bg-blue-100",
    },

    {
      id: 4,
      title: "₹500 Cashback",
      code: "CASH500",
      description: "For premium members only",
      expiry: "10 June 2026",
      color: "bg-pink-100",
    },

  ];

  const applyVoucher = (code) => {

  setAppliedVoucher(code);

  alert(`${code} Applied Successfully!`);

};

  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="flex gap-6 p-7">

        {/* LEFT MENU */}

        <div className="w-[300px] space-y-5">

          <button
            onClick={() => navigate("/manage-profile")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <FaUserFriends />
              <span className="font-semibold text-2xl">
                Manage Profiles
              </span>
            </div>
            →
          </button>

          <button
            onClick={() => navigate("/orders")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <FaClipboardList />
              <span className="font-semibold text-2xl">
                My Orders
              </span>
            </div>
            →
          </button>

          <button
            onClick={() => navigate("/payments")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <FaMoneyBill />
              <span className="font-semibold text-2xl">
                My Payments
              </span>
            </div>
            →
          </button>

          <button
            onClick={() => navigate("/membership")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <FaCrown />
              <span className="font-semibold text-2xl">
                My Memberships
              </span>
            </div>
            →
          </button>

          <button
            onClick={() => navigate("/address")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt />
              <span className="font-semibold text-2xl">
                Address Book
              </span>
            </div>
            →
          </button>

          <button className="bg-teal-50 border-2 border-teal-500 w-full rounded-2xl p-6 flex items-center justify-between shadow">

            <div className="flex items-center gap-4">
              <FaTicketAlt />
              <span className="font-semibold text-2xl">
                Pharmacy Voucher
              </span>
            </div>

            →

          </button>

          <button className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow">

            <div className="flex items-center gap-4">
              {/* <FaQuestionCircle /> */}
              <span className="font-semibold text-2xl">
                Need Help
              </span>
            </div>

            →

          </button>

          <button
            onClick={() => navigate("/")}
            className="bg-white w-full rounded-2xl p-6 flex items-center justify-between shadow"
          >

            <div className="flex items-center gap-4">
              <FaSignOutAlt />
              <span className="font-semibold text-2xl">
                Logout
              </span>
            </div>

            →

          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1 bg-white rounded-3xl p-8 shadow">

          <div className="flex items-center gap-4 mb-10">

            <FaGift className="text-5xl text-teal-700" />

            <h1 className="text-5xl font-bold">
              Pharmacy Vouchers
            </h1>

          </div>

          {/* VOUCHERS */}

          <div className="grid grid-cols-2 gap-8">

            {vouchers.map((voucher) => (

              <div
                key={voucher.id}
                className={`${voucher.color} rounded-3xl p-8 shadow-lg`}
              >

                <h2 className="text-4xl font-bold mb-4">
                  {voucher.title}
                </h2>

                <div className="bg-white rounded-2xl p-4 inline-block mb-5">

                  <p className="text-3xl font-bold tracking-widest text-teal-700">
                    {voucher.code}
                  </p>

                </div>

                <p className="text-2xl text-gray-700 mb-3">
                  {voucher.description}
                </p>

                <p className="text-xl text-gray-500">
                  Expiry: {voucher.expiry}
                </p>

                <button
                onClick={() => applyVoucher(voucher.code)}
                className={`mt-6 px-8 py-4 rounded-2xl text-xl font-semibold text-white ${
                appliedVoucher === voucher.code
                ? "bg-green-600"
                : "bg-teal-700 hover:bg-teal-800"
                }`}
                >

                 {appliedVoucher === voucher.code
                 ? "Applied ✓"
                 : "Apply Voucher"}

                 </button>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>

  );
}