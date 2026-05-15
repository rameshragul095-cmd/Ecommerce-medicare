// import { useState, useRef, useEffect } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import API from "../services/api";

// export default function VerifyOtp() {

//   const [otp, setOtp] = useState(["", "", "", "", "", ""]);
//   const [timer, setTimer] = useState(30);

//   const inputsRef = useRef([]);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const phone = location.state?.phone;

//   useEffect(() => {
//     inputsRef.current[0]?.focus();
//   }, []);

//   // TIMER
//   useEffect(() => {

//     if (timer <= 0) return;

//     const interval = setInterval(() => {
//       setTimer((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);

//   }, [timer]);

//   if (!phone) {
//     return (
//       <h2 className="text-center mt-10 text-red-500">
//         Invalid Access ❌
//       </h2>
//     );
//   }

//   const verifyOtp = async () => {

//     try {

//       const finalOtp = otp.join("");

//       await API.post("/auth/verify-otp", {
//         otp: finalOtp
//       });

//       alert("Login Successful ✅");

//      navigate("/Home");

//     } catch {

//       alert("Invalid OTP ❌");

//     }
//   };

//   return (

//     <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-blue-50 flex items-center justify-center px-4">

//       {/* BACKGROUND DESIGN */}
//       <div className="absolute top-0 left-0 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>

//       <div className="absolute bottom-0 left-0 w-96 h-52 bg-green-200 rounded-t-full blur-3xl opacity-40"></div>

//       <div className="absolute top-20 right-20 text-cyan-100 text-8xl font-bold">
//         +
//       </div>

//       <div className="absolute bottom-32 right-20 text-cyan-100 text-8xl font-bold">
//         ❤
//       </div>

//       {/* OTP CARD */}
//       <div className="relative w-full max-w-[520px] bg-white/90 backdrop-blur-md rounded-[35px] shadow-2xl overflow-hidden border border-cyan-50">

//         {/* TOP CONTENT */}
//         <div className="px-10 pt-10 pb-8">

//           {/* ICON */}
//           <div className="flex justify-center">

//             <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-cyan-100 flex items-center justify-center shadow-md border border-green-100">

//               <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-cyan-500 flex items-center justify-center text-white text-3xl font-bold">
//                 ✓
//               </div>

//             </div>

//           </div>

//           {/* TITLE */}
//           <h1 className="text-center text-5xl font-extrabold text-gray-800 mt-8">
//             Verify OTP
//           </h1>

//           <p className="text-center text-gray-500 text-lg mt-4 leading-relaxed">
//             Enter the 6-digit code sent to
//           </p>

//           <p className="text-center text-cyan-500 font-bold text-2xl mt-2">
//             +91 {phone}
//           </p>

//           {/* OTP INPUTS */}
//           <div className="flex justify-center gap-4 mt-10">

//             {otp.map((digit, index) => (

//               <input
//                 key={index}
//                 type="text"
//                 maxLength="1"
//                 value={digit}
//                 ref={(el) => (inputsRef.current[index] = el)}

//                 className="
//                   w-16 h-16
//                   rounded-2xl
//                   border-2 border-gray-200
//                   text-center
//                   text-2xl
//                   font-bold
//                   outline-none
//                   transition-all
//                   duration-300
//                   focus:border-green-400
//                   focus:ring-4
//                   focus:ring-green-100
//                   hover:border-cyan-300
//                 "

//                 onChange={(e) => {

//                   const value = e.target.value;

//                   if (!/^[0-9]?$/.test(value)) return;

//                   const newOtp = [...otp];

//                   newOtp[index] = value;

//                   setOtp(newOtp);

//                   if (value && index < 5) {
//                     inputsRef.current[index + 1].focus();
//                   }

//                 }}

//                 onKeyDown={(e) => {

//                   if (
//                     e.key === "Backspace" &&
//                     !otp[index] &&
//                     index > 0
//                   ) {
//                     inputsRef.current[index - 1].focus();
//                   }

//                 }}
//               />

//             ))}

//           </div>

//           {/* VERIFY BUTTON */}
//           <div className="flex justify-center mt-10">

//             <button
//               onClick={verifyOtp}
//               className="
//                 w-full
//                 h-16
//                 rounded-2xl
//                 bg-gradient-to-r
//                 from-green-400
//                 to-cyan-500
//                 text-white
//                 text-2xl
//                 font-bold
//                 shadow-xl
//                 hover:scale-[1.02]
//                 active:scale-[0.98]
//                 transition-all
//                 duration-300
//               "
//             >
//               Verify & Login →
//             </button>

//           </div>

//           {/* RESEND */}
//           <div className="flex justify-center items-center gap-2 mt-8">

//             <span className="text-gray-400 text-lg">
//               ⏱
//             </span>

//             <p className="text-gray-500 text-lg">
//               Resend OTP in
//             </p>

//             <span className="text-green-500 font-bold text-xl">
//               00:{timer < 10 ? `0${timer}` : timer}
//             </span>

//           </div>

//         </div>

//         {/* BOTTOM SECURITY BAR */}
//         <div className="bg-gray-50 py-5 border-t text-center">

//           <p className="text-gray-500 text-lg">
//             🔒 Your data is 256-bit encrypted and secure
//           </p>

//         </div>

//       </div>

//     </div>
//   );
// }
import { useState, useRef, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

import API from "../services/api";

export default function VerifyOtp() {

  const [otp, setOtp] = useState([
    "",
    "",
    "",
    "",
    "",
    ""
  ]);

  const [timer, setTimer] =
    useState(30);

  const inputsRef = useRef([]);

  const location = useLocation();

  const navigate = useNavigate();

  const phone =
    location.state?.phone;


  /* AUTO FOCUS */

  useEffect(() => {

    inputsRef.current[0]?.focus();

  }, []);


  /* TIMER */

  useEffect(() => {

    if (timer <= 0) return;

    const interval = setInterval(() => {

      setTimer((prev) => prev - 1);

    }, 1000);

    return () => clearInterval(interval);

  }, [timer]);


  /* INVALID ACCESS */

  if (!phone) {

    return (

      <h2 className="text-center mt-10 text-red-500">

        Invalid Access ❌

      </h2>

    );

  }


  /* VERIFY OTP */
const verifyOtp = async () => {

  const finalOtp = otp.join("").trim();

  console.log("FINAL OTP:", finalOtp);

  try {

    const response = await API.post(
      "/verify-otp",
      {
        phone,
        otp: finalOtp
      }
    );

    console.log("FULL RESPONSE:", response.data);

    if (response.data.success === true) {

      alert("Login Successful ✅");

      navigate("/home");

    } else {

      alert(response.data.message);

    }

  } catch (error) {

    console.log("FULL ERROR:", error);

    alert("Server Error ❌");

  }

};

  return (

    <div className="verify-otp-page">

      {/* GLOW EFFECTS */}

      <div className="otp-glow otp-glow1"></div>

      <div className="otp-glow otp-glow2"></div>

      <div className="otp-glow otp-glow3"></div>


      {/* FLOATING MEDICAL ICONS */}

      <div className="medical-icon icon1">

        🩺

      </div>

      <div className="medical-icon icon2">

        💊

      </div>

      <div className="medical-icon icon3">

        ❤️

      </div>

      <div className="medical-icon icon4">

        ➕

      </div>


      {/* OTP CARD */}

      <div className="premium-otp-card">

        {/* TOP CONTENT */}

        <div className="px-10 pt-10 pb-8">

          {/* ICON */}

          <div className="flex justify-center">

            <div className="w-28 h-28 rounded-full bg-white/40 backdrop-blur-lg flex items-center justify-center shadow-2xl border border-white/30">

              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-4xl font-bold shadow-xl">

                ✓

              </div>

            </div>

          </div>


          {/* TITLE */}

          <h1 className="otp-title">

            Verify OTP

          </h1>


          {/* SUBTITLE */}

          <p className="text-center text-gray-500 text-lg mt-5">

            Enter the 6-digit code sent to

          </p>


          {/* PHONE */}

          <p className="text-center text-cyan-600 font-bold text-3xl mt-2">

            +91 {phone}

          </p>


          {/* OTP INPUTS */}

          <div className="flex justify-center gap-4 mt-12">

            {otp.map((digit, index) => (

              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                ref={(el) =>
                  (inputsRef.current[index] = el)
                }

                className="otp-input"

                onChange={(e) => {

                  const value =
                    e.target.value;

                  if (
                    !/^[0-9]?$/.test(value)
                  )
                    return;

                  const newOtp = [...otp];

                  newOtp[index] = value;

                  setOtp(newOtp);

                  if (
                    value &&
                    index < 5
                  ) {

                    inputsRef.current[
                      index + 1
                    ].focus();

                  }

                }}

                onKeyDown={(e) => {

                  if (
                    e.key === "Backspace" &&
                    !otp[index] &&
                    index > 0
                  ) {

                    inputsRef.current[
                      index - 1
                    ].focus();

                  }

                }}
              />

            ))}

          </div>


          {/* VERIFY BUTTON */}

          <div className="flex justify-center mt-12">

            <button

              onClick={verifyOtp}

              className="verify-btn"

            >

              Verify & Login →

            </button>

          </div>


          {/* TIMER */}

          <div className="flex justify-center items-center gap-3 mt-8">

            <span className="text-2xl">

              ⏱

            </span>

            <p className="text-gray-600 text-lg">

              Resend OTP in

            </p>

            <span className="text-cyan-600 font-bold text-2xl">

              00:
              {timer < 10
                ? `0${timer}`
                : timer}

            </span>

          </div>

        </div>


        {/* BOTTOM SECURITY BAR */}

        <div className="bg-white/40 backdrop-blur-lg py-5 border-t border-white/30 text-center">

          <p className="text-gray-600 text-lg font-medium">

            🔒 Your data is 256-bit encrypted and secure

          </p>

        </div>

      </div>

    </div>

  );
}