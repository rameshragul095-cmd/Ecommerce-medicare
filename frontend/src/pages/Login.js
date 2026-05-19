import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
 
  
  const sendOtp = async () => {

  const cleanPhone = phone.trim();

  // VALIDATION

  if (!/^[0-9]{10}$/.test(cleanPhone)) {

    alert(
      "Enter valid 10 digit phone number"
    );

    return;
  }

  try {

    const response = await API.post("/send-otp", {
  phone: cleanPhone
});

    console.log(response.data);

    // SUCCESS

    if (response.data.success) {

      alert("OTP Sent Successfully");

      navigate("/verify-otp", {
        state: {
          phone: cleanPhone
        }
      });

    } else {

      alert(response.data.message);

    }

  } catch (error) {

    console.log(error);

    alert("Network Error");

  }

};
  return (

    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-[#eafcff] to-[#c8f3ff]">

    {/* Crystal Water Layer */}

    <div className="crystal-flow crystal1"></div>
    <div className="crystal-flow crystal2"></div>
    <div className="crystal-flow crystal3"></div>


    {/* CENTER WRAPPER */}

    <div className="relative z-10 min-h-screen flex items-center justify-center px-4">

      {/* MAIN CONTAINER */}

      <div className="relative w-full max-w-[720px] bg-white border border-green-100 rounded-[30px] shadow-lg px-8 py-10">

        {/* TOP GLOW */}

        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-r from-green-100/50 to-transparent rounded-t-[30px]"></div>


        {/* LOGO */}

        <div className="flex flex-col items-center mb-6">

          <div className="flex flex-col items-center">

            <div className="flex items-center gap-3">

              <img
                src="/logo.png"
                alt="MediCare Logo"
                className="w-10 h-10 object-contain"
              />

              <h1 className="text-4xl font-extrabold text-emerald-700">

                MediCare+

              </h1>

            </div>

            <p className="text-green-600 text-sm font-medium mt-1">

              Your Health, Our Priority

            </p>

          </div>


          <img
            src="/medical.png"
            alt="Medical"
            className="w-64 object-contain mt-6"
          />

        </div>


        {/* TITLE */}

        <div className="text-center mt-6">

          <h2 className="text-4xl font-bold text-gray-800">

            Login / Register

          </h2>

          <p className="text-gray-500 mt-4 text-lg">

            Enter your mobile number to receive secure OTP access

          </p>

        </div>


        {/* INPUT */}

        <div className="mt-6 flex items-center border-2 border-green-100 bg-white rounded-2xl overflow-hidden h-14 shadow-sm transition-all duration-300 hover:border-green-400 focus-within:border-green-500 focus-within:ring-4 focus-within:ring-green-100">

          <div className="px-5 text-lg font-semibold text-gray-700 border-r bg-green-50 h-full flex items-center">

            +91

          </div>

          <input
            type="tel"
            value={phone}
            maxLength={10}
            onChange={(e)=>
              setPhone(
                e.target.value.replace(/\D/g,"")
              )
            }
            placeholder="Enter Mobile Number"
            className="w-full h-full px-4 outline-none"
          />

        </div>


        {/* BUTTON */}

        <div className="flex justify-center">

          <button
            onClick={sendOtp}
            className="w-[320px] h-14 rounded-2xl bg-gradient-to-r from-green-600 to-emerald-700 text-white text-lg font-bold mt-8 shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >

            Send OTP

          </button>

        </div>


        {/* SECURITY */}

        <div className="mt-8 flex items-center justify-center gap-2">

          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>

          <p className="text-green-700 font-medium">

            Safe • Trusted • Instant Login

          </p>

        </div>


        {/* FOOTER */}

        <div className="text-center mt-10">

          <p className="text-gray-500 text-sm">

            By continuing, you agree to our

          </p>

          <p className="text-green-700 font-semibold mt-2 hover:underline cursor-pointer">

            Terms & Privacy Policy

          </p>

        </div>

      </div>

    </div>

</div>

  );

}