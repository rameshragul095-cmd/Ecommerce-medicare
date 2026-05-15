import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Login from "./pages/Login";
import VerifyOtp from "./pages/VerifyOtp";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";

import PharmacyVoucher from "./pages/PharmacyVoucher";

import ManageProfile from "./pages/ManageProfile";
import Payments from "./pages/Payments";
import Membership from "./pages/Membership";
import Address from "./pages/Address";
import Help from "./pages/Help";

// NEW PAGES

import Delivery from "./pages/Delivery";
import Review from "./pages/Review";
import Payment from "./pages/Payment";

// CONTEXTS

import OrderProvider
from "./context/OrderContext";

import {
  CartProvider
} from "./context/CartContext";

import DeliveryProvider
from "./context/DeliveryContext";

export default function App() {

  return (

    <OrderProvider>

      <CartProvider>

        <DeliveryProvider>

          <BrowserRouter>

            <Routes>

              {/* LOGIN */}

              <Route
                path="/"
                element={<Login />}
              />

              <Route
                path="/verify-otp"
                element={<VerifyOtp />}
              />

              {/* HOME */}

              <Route
                path="/home"
                element={<Home />}
              />

              {/* CART */}

              <Route
                path="/cart"
                element={<Cart />}
              />

              {/* DELIVERY */}

              <Route
                path="/delivery"
                element={<Delivery />}
              />

              {/* REVIEW */}

              <Route
                path="/review"
                element={<Review />}
              />

              {/* PAYMENT */}

              <Route
                path="/payment"
                element={<Payment />}
              />

              {/* ORDERS */}

              <Route
                path="/orders"
                element={<Orders />}
              />

              {/* PROFILE */}

              <Route
                path="/profile"
                element={<Profile />}
              />

              <Route
                path="/manage-profile"
                element={<ManageProfile />}
              />

              <Route
                path="/payments"
                element={<Payments />}
              />

              <Route
                path="/membership"
                element={<Membership />}
              />

              <Route
                path="/address"
                element={<Address />}
              />

              {/* VOUCHER */}

              <Route
                path="/voucher"
                element={<PharmacyVoucher />}
              />

              {/* HELP */}

              <Route
                path="/help"
                element={<Help />}
              />

            </Routes>

          </BrowserRouter>

        </DeliveryProvider>

      </CartProvider>

    </OrderProvider>

  );

}