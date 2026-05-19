
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

          {orders.length === 0 && (

            <div className="text-center mt-20">

              <img
                src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                alt=""
                className="w-40 mx-auto opacity-70"
              />

              <h2 className="text-3xl font-bold mt-6 text-gray-700">
                No Orders Yet
              </h2>

              <p className="text-gray-500 mt-2">
                Your purchased medicines will appear here
              </p>

            </div>

          )}

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

                  {order.items?.length || 0} Item(s)

                </p>

                <div className="mini-images">

                  {order.items?.map((item) => (

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