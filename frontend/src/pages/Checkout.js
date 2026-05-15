import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { OrderContext } from "../context/OrderContext";
import { useNavigate } from "react-router-dom";
export default function Checkout() {
   
    const [showAddressForm, setShowAddressForm] =
  useState(false);

const [address, setAddress] = useState({
  type: "Home",
  street: "123, Green Park",
  city: "Chennai - 600028",
  phone: "+91 9876543210"
});
const [newAddress, setNewAddress] =
  useState(address);

  const { cartItems } = useContext(CartContext);


  // USER REWARD POINTS
  const rewardPoints = 120;

  const [usePoints, setUsePoints] = useState(false);

  const { setOrders } = useContext(OrderContext);

const navigate = useNavigate();

const [showPayment, setShowPayment] =
  useState(false);

const [selectedPayment, setSelectedPayment] =
  useState("UPI");

  // SUBTOTAL
  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // POINTS DISCOUNT
  const discount = usePoints
    ? Math.min(rewardPoints, subtotal)
    : 0;

  // FINAL TOTAL
  const finalTotal = subtotal - discount;





  return (

    <div className="bg-gray-100 min-h-screen">

      <Navbar />

      <div className="max-w-2xl mx-auto p-6">

        {/* PAGE TITLE */}
        <h1 className="text-4xl font-bold mb-8">
          Checkout
        </h1>

        {/* ADDRESS */}
        <div className="bg-white rounded-3xl p-6 shadow-md">

          <h2 className="text-2xl font-bold mb-5">
            Delivery Address
          </h2>

          <div className="border rounded-2xl p-5 flex justify-between items-start">

            <div>

            <h3 className="text-xl font-bold">
            {address.type}
            </h3>

        <p className="text-gray-600 mt-2">
            {address.street}
        </p>

        <p className="text-gray-600">
            {address.city}
        </p>

        <p className="text-gray-600">
            {address.phone}
        </p>

        </div>

            <button
             onClick={() =>
             setShowAddressForm(true)
             }
             className="text-teal-700 font-bold"
             >
             Change
             </button>

          </div>

        </div>

        {/* ORDER SUMMARY */}
        <div className="bg-white rounded-3xl p-6 shadow-md mt-8">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {/* SUBTOTAL */}
          <div className="flex justify-between text-xl mb-5">

            <span>Subtotal</span>

            <span>₹{subtotal}</span>

          </div>

          {/* USE POINTS */}
          <div className="flex justify-between items-center mb-6">

            <span className="text-xl">
              Use Reward Points
            </span>

            <button
              onClick={() =>
                setUsePoints(!usePoints)
              }
              className={`w-16 h-9 rounded-full flex items-center px-1 transition-all duration-300 ${
                usePoints
                  ? "bg-green-500 justify-end"
                  : "bg-gray-300 justify-start"
              }`}
            >

              <div className="bg-white w-7 h-7 rounded-full"></div>

            </button>

          </div>

          {/* POINTS INFO */}
          <div className="bg-green-50 text-green-700 p-4 rounded-2xl mb-6 font-semibold">

            You have {rewardPoints} points
            (₹{rewardPoints})

          </div>

          {/* DISCOUNT */}
          {usePoints && (

            <div className="flex justify-between text-xl text-green-600 mb-5">

              <span>Discount</span>

              <span>- ₹{discount}</span>

            </div>

          )}

          {/* FINAL TOTAL */}
          <div className="flex justify-between text-3xl font-bold border-t pt-5">

            <span>Amount To Pay</span>

            <span>₹{finalTotal}</span>

          </div>

        </div>
        {showAddressForm && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-8 rounded-3xl w-[500px]">

      <h2 className="text-3xl font-bold mb-6">
        Change Address
      </h2>

      <input
        type="text"
        placeholder="Address Type"
        value={newAddress.type}
        onChange={(e) =>
          setNewAddress({
            ...newAddress,
            type: e.target.value
          })
        }
        className="w-full border p-4 rounded-xl mb-4"
      />

      <input
        type="text"
        placeholder="Street"
        value={newAddress.street}
        onChange={(e) =>
          setNewAddress({
            ...newAddress,
            street: e.target.value
          })
        }
        className="w-full border p-4 rounded-xl mb-4"
      />

      <input
        type="text"
        placeholder="City"
        value={newAddress.city}
        onChange={(e) =>
          setNewAddress({
            ...newAddress,
            city: e.target.value
          })
        }
        className="w-full border p-4 rounded-xl mb-4"
      />

      <input
        type="text"
        placeholder="Phone"
        value={newAddress.phone}
        onChange={(e) =>
          setNewAddress({
            ...newAddress,
            phone: e.target.value
          })
        }
        className="w-full border p-4 rounded-xl mb-6"
      />

      <div className="flex gap-4">

        <button
          onClick={() => {

            setAddress(newAddress);

            setShowAddressForm(false);
          }}

          className="flex-1 bg-teal-700 text-white py-4 rounded-2xl"
        >
          Save Address
        </button>

        <button
          onClick={() =>
            setShowAddressForm(false)
          }
          className="flex-1 bg-gray-300 py-4 rounded-2xl"
        >
          Cancel
        </button>

      </div>

    </div>

  </div>

)}

        {/* PLACE ORDER BUTTON */}
        <button
         onClick={() => setShowPayment(true)}
        className="w-full bg-teal-700 text-white py-5 rounded-3xl text-3xl font-bold mt-10"
        >
        Place Order
        </button>

      </div>
      {showPayment && (

  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

    <div className="bg-white p-10 rounded-3xl w-[500px]">

      <h2 className="text-4xl font-bold mb-8">
        Select Payment
      </h2>

      <div className="space-y-4">

        <button
          onClick={() => setSelectedPayment("UPI")}
          className={`w-full p-5 rounded-2xl border text-left text-xl ${
            selectedPayment === "UPI"
              ? "border-teal-700 bg-teal-50"
              : ""
          }`}
        >
          UPI Payment
        </button>

        <button
          onClick={() => setSelectedPayment("Card")}
          className={`w-full p-5 rounded-2xl border text-left text-xl ${
            selectedPayment === "Card"
              ? "border-teal-700 bg-teal-50"
              : ""
          }`}
        >
          Credit / Debit Card
        </button>

        <button
          onClick={() => setSelectedPayment("COD")}
          className={`w-full p-5 rounded-2xl border text-left text-xl ${
            selectedPayment === "COD"
              ? "border-teal-700 bg-teal-50"
              : ""
          }`}
        >
          Cash On Delivery
        </button>

      </div>

      <button

        onClick={() => {

        const newOrder = {
        id: Date.now(),
        items: cartItems,
        total: finalTotal,
        payment: selectedPayment,
        address
        };

        setOrders((prev) => [...prev, newOrder]);

        localStorage.removeItem("cart");

        alert("Payment Successful");

        navigate("/orders");
        }}

        className="w-full bg-teal-700 text-white py-5 rounded-2xl text-2xl font-bold mt-8"
      >
        Pay ₹{finalTotal}
      </button>

    </div>

  </div>

)}

    </div>
  );
}