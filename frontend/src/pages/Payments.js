// import Profile from "./Profile";

// import { useNavigate } from "react-router-dom";

// import { FaQuestionCircle } from "react-icons/fa";

// export default function Payments() {

//   const navigate = useNavigate();

//   return (

//     <Profile>

//       {/* GLOW EFFECTS */}

//       <div className="premium-glow premium-glow1"></div>

//       <div className="premium-glow premium-glow2"></div>


//       {/* PAYMENT CONTAINER */}

//       <div className="payments-container">

//         {/* TOP HEADER */}

//         <div className="payments-header">

//           <h1 className="payments-title">

//             PHARMACY PAYMENTS

//           </h1>

//           <h1 className="payments-title">

//             MANAGE PAYMENTS

//           </h1>

//         </div>


//         {/* EMPTY HISTORY */}

//         <div className="payments-empty">

//           {/* FLOATING ICON */}

//           <div className="payment-icon-container">

//             <div className="payment-glow"></div>

//             <img
//               src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
//               alt=""
//               className="payment-icon"
//             />

//           </div>


//           {/* TEXT */}

//           <h2 className="payment-empty-title">

//             No Payment History Found

//           </h2>

//           <p className="payment-empty-sub">

//             Your completed transactions
//             will appear here.

//           </p>

//         </div>


//         {/* HELP BUTTON */}

//         <button

//           onClick={() =>
//             navigate("/help")
//           }

//           className="premium-help-btn"

//         >

//           <div className="flex items-center gap-4">

//             <FaQuestionCircle />

//             <span className="font-semibold text-2xl">

//               Need Help

//             </span>

//           </div>

//           →

//         </button>

//       </div>

//     </Profile>

//   );
// }