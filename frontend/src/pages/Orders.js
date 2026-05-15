// import { useContext } from "react";

// import { OrderContext } from "../context/OrderContext";

// import Profile from "./Profile";

// import { useNavigate } from "react-router-dom";

// import { FaQuestionCircle } from "react-icons/fa";

// export default function Orders() {

//   const navigate = useNavigate();

//   const { orders } =
//     useContext(OrderContext);

//   return (

//     <Profile>

//       {/* BACKGROUND GLOWS */}

//       <div className="orders-glow glow1"></div>

//       <div className="orders-glow glow2"></div>

//       <div className="orders-glow glow3"></div>


//       {/* CONTENT */}

//       <div className="orders-container">

//         {/* TITLE */}

//         <h1 className="orders-title">

//           My Orders

//         </h1>


//         {/* ORDER LIST */}

//         {orders.map((order) => (

//           <div
//             key={order.id}
//             className="premium-order-card"
//           >

//             {/* TOP */}

//             <div className="order-top">

//               <div>

//                 <h2 className="order-id">

//                   Order #{order.id}

//                 </h2>

//                 <p className="order-detail">

//                   Payment :
//                   {order.payment}

//                 </p>

//                 <p className="order-total">

//                   ₹ {order.total}

//                 </p>

//               </div>


//               {/* BILL BUTTON */}

//               <button

//                 onClick={() =>
//                   window.print()
//                 }

//                 className="bill-btn"

//               >

//                 Generate Bill

//               </button>

//             </div>


//             {/* HELP BUTTON */}

//             <button

//               onClick={() =>
//                 navigate("/help")
//               }

//               className="order-help-btn"

//             >

//               <div className="flex items-center gap-4">

//                 <FaQuestionCircle />

//                 <span>

//                   Need Help

//                 </span>

//               </div>

//               →

//             </button>


//             {/* ITEMS */}

//             <div className="order-items">

//               {order.items.map((item) => (

//                 <div
//                   key={item.id}
//                   className="order-item-card"
//                 >

//                   {/* IMAGE */}

//                   <img
//                     src={item.image}
//                     alt=""
//                     className="order-item-img"
//                   />


//                   {/* DETAILS */}

//                   <div>

//                     <h3 className="item-name">

//                       {item.name}

//                     </h3>

//                     <p className="item-qty">

//                       Qty :
//                       {item.quantity}

//                     </p>

//                   </div>

//                 </div>

//               ))}

//             </div>

//           </div>

//         ))}

//       </div>

//     </Profile>

//   );
// }
import { useContext } from "react";

import { OrderContext } from "../context/OrderContext";

import Profile from "./Profile";

export default function Orders() {

  const { orders } =
    useContext(OrderContext);

  return (

    <Profile>

      <div className="orders-page-wrapper">

        {/* TOP TABS */}

        <div className="orders-tabs">

          <button className="active-order-tab">

            All Orders

          </button>

          <button>

            Delivered

          </button>

          <button>

            Cancelled

          </button>

        </div>



        {/* SCROLL AREA */}

        <div className="orders-scroll-container">

          {orders.map((order,index) => (

            <div
              key={order.id}
              className="modern-order-row"
            >

              {/* LEFT */}

              <div className="order-left-area">

                <div>

                  <p className="small-order-label">

                    ORDER CREATED

                  </p>

                  <h3 className="order-date">

                    30 Apr 2026

                  </h3>

                </div>


                <div>

                  <p className="small-order-label">

                    Shipment {index + 1}

                  </p>

                  <h3 className="shipment-id">

                    #{order.id}

                  </h3>

                </div>

              </div>



              {/* CENTER */}

              <div className="order-center-area">

                <p className="items-count">

                  {order.items.length} Item(s)

                </p>

                <div className="mini-images">

                  {order.items.map((item) => (

                    <img
                      key={item.id}
                      src={item.image}
                      alt=""
                      className="mini-order-img"
                    />

                  ))}
                </div>

                <p className="purchase-type">

                  Purchased In-store

                </p>

              </div>



              {/* RIGHT */}

              <div className="order-right-area">

                <button className="details-btn">

                  Order Details

                </button>

                <button className="reorder-btn">

                  RE-ORDER

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </Profile>

  );

}