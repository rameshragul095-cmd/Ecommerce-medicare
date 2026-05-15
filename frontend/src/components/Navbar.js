import {
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  useContext,
  useEffect,
  useState
} from "react";

import {
  CartContext
} from "../context/CartContext";

import {

  FaHome,
  FaBox,
  FaShoppingCart,
  FaUserCircle,
  FaBolt

} from "react-icons/fa";

export default function Navbar() {

  const navigate = useNavigate();

  const location = useLocation();

  const {

    cartItems

  } = useContext(CartContext);

  const [showCart, setShowCart] =
    useState(false);

  // TOTAL

  const total =
    cartItems.reduce(

      (sum, item) =>

        sum +
        item.price * item.quantity,

      0
    );

  // AUTO OPEN CART

  useEffect(() => {

    const openCart = () => {

      setShowCart(true);

      setTimeout(() => {

        setShowCart(false);

      }, 500);

    };

    window.addEventListener(
      "openCart",
      openCart
    );

    return () => {

      window.removeEventListener(
        "openCart",
        openCart
      );

    };

  }, []);

  // ACTIVE CLASS

  const isActive = (path) => {

    return location.pathname === path;

  };

  return (

    <>

      {/* TOP WATER GLOW */}

      <div className="fixed top-[-200px] left-[-100px] w-[500px] h-[500px] bg-cyan-300 opacity-20 blur-[120px] rounded-full z-0"></div>

      <div className="fixed top-[-200px] right-[-100px] w-[500px] h-[500px] bg-blue-400 opacity-20 blur-[120px] rounded-full z-0"></div>

      {/* NAVBAR */}

      <nav className="sticky top-0 z-50 px-8 py-5">

        <div className="relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/40 rounded-[35px] shadow-[0_15px_50px_rgba(0,0,0,0.08)] px-10 py-5 flex items-center justify-between">

          {/* GEL LIGHT */}

          <div className="absolute inset-0 overflow-hidden rounded-[35px]">

            <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-cyan-300 opacity-20 blur-[100px] rounded-full animate-pulse"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-400 opacity-20 blur-[100px] rounded-full animate-pulse"></div>

          </div>

          {/* LOGO */}

          <div

            onClick={() =>
              navigate("/home")
            }

            className="relative flex items-center gap-5 cursor-pointer group z-10"

          >

            {/* GLOW */}

            <div className="absolute inset-0 bg-cyan-300 blur-3xl opacity-30 rounded-full group-hover:scale-125 transition"></div>

            {/* IMAGE */}

            <div className="relative bg-white rounded-3xl p-3 shadow-xl border border-white/50">

              <img
                src="/medical.png"
                alt=""
                className="w-16 relative z-10"
              />

            </div>

            {/* TEXT */}

            <div>

              <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500 bg-clip-text text-transparent tracking-wide">

                MediCare+

              </h1>

              <p className="text-gray-500 font-semibold mt-1">

                Premium Medical Store

              </p>

            </div>

          </div>

          {/* MENU */}

          <div className="flex items-center gap-6 z-10">

            {/* HOME */}

            <button

              onClick={() =>
                navigate("/home")
              }

              className={`premium-nav-btn

                ${isActive("/home")
                  ? "active-home"
                  : ""
                }

              `}

            >

              <FaHome />

              Home

            </button>

            {/* ORDERS */}

            <button

              onClick={() =>
                navigate("/orders")
              }

              className={`premium-nav-btn

                ${isActive("/orders")
                  ? "active-orders"
                  : ""
                }

              `}

            >

              <FaBox />

              Orders

            </button>

            {/* CART */}

            <div className="relative">

              <button

                onClick={() =>
                  navigate("/cart")
                }

                className={`premium-cart-btn

                  ${isActive("/cart")
                    ? "cart-active"
                    : ""
                  }

                `}

              >

                <FaShoppingCart />

                Cart

                {/* BADGE */}

                <div className="cart-badge">

                  {cartItems.length}

                </div>

              </button>

              {/* CART DROPDOWN */}

              {

                showCart && (

                  <div className="absolute right-0 top-24 w-[470px] bg-white/95 backdrop-blur-2xl rounded-[35px] shadow-[0_20px_60px_rgba(0,0,0,0.2)] overflow-hidden border border-white/50 animate-[dropdown_.4s_ease]">

                    {/* HEADER */}

                    <div className="relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-7">

                      <div className="absolute inset-0 bg-white opacity-10"></div>

                      <div className="relative flex justify-between items-center">

                        <div>

                          <h2 className="text-3xl font-black">

                            Cart Updated

                          </h2>

                          <p className="mt-2 opacity-90">

                            Medicine added successfully

                          </p>

                        </div>

                        <FaBolt size={35} />

                      </div>

                    </div>

                    {/* PRODUCTS */}

                    <div className="max-h-[350px] overflow-y-auto">

                      {

                        cartItems.length === 0 ?

                        (

                          <div className="p-10 text-center">

                            Empty Cart

                          </div>

                        )

                        :

                        (

                          cartItems.map((item) => (

                            <div

                              key={item.id}

                              className="flex justify-between items-center p-5 border-b hover:bg-cyan-50 transition"

                            >

                              <div className="flex gap-4 items-center">

                                <div className="bg-[#f5fbff] p-3 rounded-2xl">

                                  <img
                                    src={item.image}
                                    alt=""
                                    className="w-16 h-16 object-contain"
                                  />

                                </div>

                                <div>

                                  <h3 className="font-bold text-lg">

                                    {item.name}

                                  </h3>

                                  <p className="text-gray-500">

                                    Qty :
                                    {item.quantity}

                                  </p>

                                </div>

                              </div>

                              <h2 className="font-black text-red-500 text-2xl">

                                ₹
                                {item.price *
                                  item.quantity}

                              </h2>

                            </div>

                          ))

                        )

                      }

                    </div>

                    {/* FOOTER */}

                    <div className="p-6 bg-[#f5fbff]">

                      <div className="flex justify-between mb-5 text-2xl font-black">

                        <span>Total</span>

                        <span>

                          ₹{total}

                        </span>

                      </div>

                      <button

                        onClick={() =>
                          navigate("/cart")
                        }

                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-red-500 to-red-600 text-white text-2xl font-bold shadow-xl hover:scale-105 transition"

                      >

                        View Shopping Cart

                      </button>

                    </div>

                  </div>

                )

              }

            </div>

            {/* PROFILE */}

            <button

              onClick={() =>
                navigate("/profile")
              }

              className={`premium-nav-btn

                ${isActive("/profile")
                  ? "active-profile"
                  : ""
                }

              `}

            >

              <FaUserCircle />

              Profile

            </button>

          </div>

        </div>

      </nav>

    </>

  );

}