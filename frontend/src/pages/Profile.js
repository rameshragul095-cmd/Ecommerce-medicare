// import Navbar from "../components/Navbar";

// import { useNavigate } from "react-router-dom";

// export default function Profile({ children }) {

//   const navigate = useNavigate();

//   return (

//     <div className="profile-main-page">

//       {/* NAVBAR */}

//       <Navbar />


//       {/* MAIN LAYOUT */}

//       <div className="profile-layout">

//         {/* =======================================
//             LEFT PREMIUM SIDEBAR
//         ======================================= */}

//         <div className="premium-sidebar">

//           {/* MANAGE PROFILE */}

//           <div
//             onClick={() =>
//               navigate("/manage-profile")
//             }
//             className="premium-sidebar-btn active-sidebar-btn"
//           >

//             <span>

//               Manage Profiles

//             </span>

//             <span>›</span>

//           </div>


//           {/* ORDERS */}

//           <div
//             onClick={() =>
//               navigate("/orders")
//             }
//             className="premium-sidebar-btn"
//           >

//             <span>

//               My Orders

//             </span>

//             <span>›</span>

//           </div>


//           {/* PAYMENTS */}

//           <div
//             onClick={() =>
//               navigate("/payments")
//             }
//             className="premium-sidebar-btn"
//           >

//             <span>

//               Payments

//             </span>

//             <span>›</span>

//           </div>


//           {/* MEMBERSHIP */}

//           <div
//             onClick={() =>
//               navigate("/membership")
//             }
//             className="premium-sidebar-btn"
//           >

//             <span>

//               Membership

//             </span>

//             <span>›</span>

//           </div>


//           {/* ADDRESS */}

//           <div
//             onClick={() =>
//               navigate("/address")
//             }
//             className="premium-sidebar-btn"
//           >

//             <span>

//               Address Book

//             </span>

//             <span>›</span>

//           </div>


//           {/* HELP */}

//           <div
//             onClick={() =>
//               navigate("/help")
//             }
//             className="premium-sidebar-btn"
//           >

//             <span>

//               Need Help

//             </span>

//             <span>›</span>

//           </div>


//           {/* LOGOUT */}

//           <div
//             onClick={() =>
//               navigate("/")
//             }
//             className="premium-sidebar-btn logout-btn"
//           >

//             <span>

//               Logout

//             </span>

//             <span>›</span>

//           </div>

//         </div>


//         {/* =======================================
//             RIGHT PREMIUM CONTENT
//         ======================================= */}

//         <div className="premium-right-container">

          

//           {/* WATER GLOW */}

//           <div className="water-effect water1"></div>

//           <div className="water-effect water2"></div>

//           <div className="water-effect water3"></div>


//           {/* CONTENT */}

//           <div className="relative z-10">

//             {children}

//           </div>

//         </div>

//       </div>

//     </div>

//   );

// }
import Navbar from "../components/Navbar";

import { useNavigate } from "react-router-dom";

export default function Profile({ children }) {

  const navigate = useNavigate();

  return (

    <div className="profile-main-page">

      {/* NAVBAR */}

      <Navbar />


      {/* MAIN LAYOUT */}

      <div className="profile-layout">

        {/* =======================================
            LEFT PREMIUM SIDEBAR
        ======================================= */}

        <div className="premium-sidebar">

          {/* MANAGE PROFILE */}

          <div
            onClick={() =>
              navigate("/manage-profile")
            }
            className="premium-sidebar-btn active-sidebar-btn"
          >

            <span>

              Manage Profiles

            </span>

            <span>›</span>

          </div>


          {/* ORDERS */}

          <div
            onClick={() =>
              navigate("/orders")
            }
            className="premium-sidebar-btn"
          >

            <span>

              My Orders

            </span>

            <span>›</span>

          </div>


          {/* PAYMENTS */}

          <div
            onClick={() =>
              navigate("/payments")
            }
            className="premium-sidebar-btn"
          >

            <span>

              Payments

            </span>

            <span>›</span>

          </div>


          {/* MEMBERSHIP */}

          <div
            onClick={() =>
              navigate("/membership")
            }
            className="premium-sidebar-btn"
          >

            <span>

              Membership

            </span>

            <span>›</span>

          </div>


          {/* ADDRESS */}

          <div
            onClick={() =>
              navigate("/address")
            }
            className="premium-sidebar-btn"
          >

            <span>

              Address Book

            </span>

            <span>›</span>

          </div>


          {/* HELP */}

          <div
            onClick={() =>
              navigate("/help")
            }
            className="premium-sidebar-btn"
          >

            <span>

              Need Help

            </span>

            <span>›</span>

          </div>


          {/* LOGOUT */}

          <div
            onClick={() =>
              navigate("/")
            }
            className="premium-sidebar-btn logout-btn"
          >

            <span>

              Logout

            </span>

            <span>›</span>

          </div>

        </div>


        {/* =======================================
            RIGHT PREMIUM CONTENT
        ======================================= */}

        <div className="premium-right-wrapper">

          {/* TOP CONTAINER */}

          <div className="premium-top-container">

            <div className="water-effect water1"></div>

            <div className="water-effect water2"></div>

            <div className="water-effect water3"></div>

          </div>


          {/* WHITE GAP */}

          <div className="premium-container-gap"></div>


          {/* MAIN CONTENT */}

          <div className="premium-bottom-container">

            <div className="relative z-10">

              {children}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}