import Profile from "./Profile";
import MedicalChatBot from "../components/MedicalChatBot";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaTimesCircle,
  FaMoneyCheckAlt,
  FaCreditCard,
  FaWallet,
  FaHeadset,
  FaAmbulance,
  FaQuestionCircle,
  FaWhatsapp
} from "react-icons/fa";

export default function Help() {

  return (

    <Profile>

      {/* MAIN PAGE */}

      <div className="min-h-screen px-8 py-10 relative overflow-hidden">

        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300 opacity-20 blur-[140px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-300 opacity-20 blur-[140px] rounded-full"></div>


        {/* TITLE */}

        <div className="mb-10">

          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-500 to-green-500 bg-clip-text text-transparent">

            Help & Support

          </h1>

          <p className="text-gray-500 mt-3 text-lg">

            We are here to help you 24/7 with orders,
            medicines, refunds and healthcare support.

          </p>

        </div>


        {/* TOP SUPPORT BANNER */}

        <div className="bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-[35px] p-10 flex items-center justify-between shadow-2xl mb-10">

          <div>

            <h1 className="text-white text-4xl font-bold">

              Need Instant Medical Support?

            </h1>

            <p className="text-white/90 text-lg mt-3 max-w-[600px]">

              Our MediCare healthcare experts are
              available 24/7 to guide you with
              medicines, delivery, prescriptions
              and emergency support.

            </p>

            <button className="mt-6 bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:scale-105 transition-all">

              Contact Support

            </button>

          </div>

          <div className="text-[120px]">

            🩺

          </div>

        </div>


        {/* HELP GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {/* CUSTOMER CARE */}

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl border border-white/40 hover:scale-[1.02] transition-all">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white text-4xl shadow-lg">

              <FaHeadset />

            </div>

            <h2 className="text-3xl font-bold mt-6 text-gray-800">

              Customer Care

            </h2>

            <p className="text-gray-500 mt-2">

              Speak directly with our healthcare support team.

            </p>

            <div className="mt-6 space-y-4">

              <div className="flex items-center gap-4 text-lg">

                <FaPhoneAlt className="text-cyan-600" />

                +91 9876543210

              </div>

              <div className="flex items-center gap-4 text-lg">

                <FaEnvelope className="text-cyan-600" />

                support@medicare.com

              </div>

              <div className="flex items-center gap-4 text-lg">

                <FaWhatsapp className="text-green-500" />

                WhatsApp Support

              </div>

            </div>

          </div>


          {/* ORDER HELP */}

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl border border-white/40 hover:scale-[1.02] transition-all">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-orange-400 to-pink-500 flex items-center justify-center text-white text-4xl shadow-lg">

              <FaTruck />

            </div>

            <h2 className="text-3xl font-bold mt-6 text-gray-800">

              Order Support

            </h2>

            <p className="text-gray-500 mt-2">

              Track and manage all medicine orders easily.

            </p>

            <div className="mt-6 space-y-4 text-lg">

              <p>• Track Orders</p>

              <p>• Cancel Orders</p>

              <p>• Replace Medicines</p>

              <p>• Refund Status</p>

              <p>• Delivery Issues</p>

            </div>

          </div>


          {/* PAYMENT HELP */}

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl border border-white/40 hover:scale-[1.02] transition-all">

            <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center text-white text-4xl shadow-lg">

              <FaCreditCard />

            </div>

            <h2 className="text-3xl font-bold mt-6 text-gray-800">

              Payment Help

            </h2>

            <p className="text-gray-500 mt-2">

              Secure payment support for all methods.

            </p>

            <div className="mt-6 space-y-4 text-lg">

              <div className="flex items-center gap-4">

                <FaWallet className="text-green-600" />

                UPI Payments

              </div>

              <div className="flex items-center gap-4">

                <FaMoneyCheckAlt className="text-green-600" />

                Debit/Credit Cards

              </div>

              <div className="flex items-center gap-4">

                <FaTimesCircle className="text-green-600" />

                Cash On Delivery

              </div>

            </div>

          </div>


          {/* EMERGENCY */}

          <div className="bg-gradient-to-r from-red-500 to-pink-500 rounded-[30px] p-8 shadow-2xl text-white">

            <div className="text-5xl">

              <FaAmbulance />

            </div>

            <h2 className="text-3xl font-bold mt-6">

              Emergency Help

            </h2>

            <p className="mt-4 text-lg">

              Need urgent medicine delivery or emergency support?

            </p>

            <button className="mt-6 bg-white text-red-500 px-8 py-3 rounded-2xl font-bold">

              Call Ambulance

            </button>

          </div>


          {/* FAQ */}

          <div className="bg-white/70 backdrop-blur-xl rounded-[30px] p-8 shadow-xl border border-white/40">

            <div className="text-5xl text-cyan-500">

              <FaQuestionCircle />

            </div>

            <h2 className="text-3xl font-bold mt-6 text-gray-800">

              Frequently Asked

            </h2>

            <div className="mt-6 space-y-5">

              <div>

                <h3 className="font-bold">

                  How to track my order?

                </h3>

                <p className="text-gray-500">

                  Open Orders section to track delivery.

                </p>

              </div>

              <div>

                <h3 className="font-bold">

                  How to cancel order?

                </h3>

                <p className="text-gray-500">

                  Orders can be cancelled before dispatch.

                </p>

              </div>

            </div>

          </div>


          {/* LIVE SUPPORT */}

          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[30px] p-8 shadow-2xl text-white">

            <h2 className="text-3xl font-bold">

              Live Chat Support

            </h2>

            <p className="mt-4 text-lg">

              Chat instantly with our support executives.

            </p>

            <button className="mt-8 bg-white text-cyan-600 px-8 py-4 rounded-2xl font-bold text-lg">

              Start Live Chat

            </button>

          </div>

        </div>

      </div>

      <MedicalChatBot />

    </Profile>

  );

}