import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import {
FaCreditCard,
FaWallet,
FaQuestionCircle,
FaRupeeSign
} from "react-icons/fa";

export default function Payments() {

const navigate = useNavigate();

/* demo payment history */

const payments=[

{
id:"TXN872451",
date:"19 May 2026",
amount:"₹1245",
status:"Success",
method:"UPI"
},

{
id:"TXN872452",
date:"16 May 2026",
amount:"₹785",
status:"Success",
method:"Credit Card"
},

{
id:"TXN872453",
date:"10 May 2026",
amount:"₹450",
status:"Success",
method:"Cash On Delivery"
}

];

return(

<Profile>

<div className="payments-container relative z-10">

{/* HEADER */}

<div className="flex justify-between items-center mb-8">

<div>

<h1 className="text-4xl font-bold text-cyan-800">

Payment Center

</h1>

<p className="text-gray-600 mt-2">

Manage cards, wallets and payment history

</p>

</div>

</div>


{/* TOP CARDS */}

<div className="grid grid-cols-3 gap-6 mb-8">

<div className="bg-white rounded-3xl p-6 shadow-lg">

<FaWallet
className="text-4xl text-cyan-500 mb-4"
/>

<h2 className="font-bold text-xl">

Wallet Balance

</h2>

<p className="text-3xl mt-3 font-bold">

₹2450

</p>

</div>


<div className="bg-white rounded-3xl p-6 shadow-lg">

<FaCreditCard
className="text-4xl text-blue-500 mb-4"
/>

<h2 className="font-bold text-xl">

Saved Cards

</h2>

<p className="text-3xl mt-3 font-bold">

2 Cards

</p>

</div>


<div className="bg-white rounded-3xl p-6 shadow-lg">

<FaRupeeSign
className="text-4xl text-green-500 mb-4"
/>

<h2 className="font-bold text-xl">

Total Spending

</h2>

<p className="text-3xl mt-3 font-bold">

₹12,450

</p>

</div>

</div>


{/* TRANSACTION HISTORY */}

<div className="bg-white rounded-3xl shadow-lg p-8">

<h2 className="text-3xl font-bold mb-6">

Recent Transactions

</h2>

<div className="space-y-5">

{payments.map((item)=>(

<div
key={item.id}
className="flex justify-between items-center border rounded-2xl p-5 hover:shadow-lg transition"
>

<div>

<h3 className="font-bold">

{item.id}

</h3>

<p className="text-gray-500">

{item.date}

</p>

</div>


<div>

<p className="font-semibold">

{item.method}

</p>

</div>


<div>

<p className="font-bold text-green-600">

{item.amount}

</p>

<p className="text-sm text-green-500">

{item.status}

</p>

</div>

</div>

))}

</div>

</div>


{/* HELP */}

<button

onClick={()=>navigate("/help")}

className="mt-8 w-full rounded-3xl p-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-2xl font-bold flex justify-between items-center"

>

<div className="flex items-center gap-4">

<FaQuestionCircle/>

Need Help

</div>

→

</button>

</div>

</Profile>

);

}