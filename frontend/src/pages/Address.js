import Profile from "./Profile";
import { useState } from "react";

import {
MapContainer,
TileLayer,
Marker,
useMapEvents
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import {
FaPlus,
FaHome,
FaBriefcase,
FaMapMarkerAlt
}
from "react-icons/fa";


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({

iconRetinaUrl:
"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",

iconUrl:
"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",

shadowUrl:
"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"

});


function LocationPicker({

setPosition,
setAddressData

}){

useMapEvents({

async click(e){

const lat=e.latlng.lat;

const lng=e.latlng.lng;

setPosition([lat,lng]);

try{

const response=
await fetch(
`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
);

const data=
await response.json();

setAddressData(prev=>({

...prev,

address:
data.display_name || ""

}));

}
catch(error){

console.log(error);

}

}

});

return null;

}



export default function Address(){

const [open,setOpen]=
useState(false);

const [position,setPosition]=
useState([
13.0827,
80.2707
]);

const [savedAddresses,
setSavedAddresses]=
useState([]);

const [addressData,
setAddressData]=
useState({

name:"",
phone:"",
type:"Home",
address:""

});


const saveAddress=()=>{

if(
!addressData.name ||
!addressData.phone ||
!addressData.address
){

alert(
"Fill all details"
);

return;

}

setSavedAddresses([

...savedAddresses,
addressData

]);

setOpen(false);

setAddressData({

name:"",
phone:"",
type:"Home",
address:""

});

};


return(

<Profile>

<div className="min-h-screen p-10">

<div className="w-full max-w-[1200px] mx-auto">


{/* TITLE */}

<h1 className="text-5xl font-bold text-cyan-600 mb-8">

My Addresses

</h1>


{/* ADD BUTTON */}

<button

onClick={()=>setOpen(true)}

className="mb-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold"

>

<FaPlus/>

Add Address

</button>


{/* SAVED ADDRESS */}

<div className="space-y-8">

{savedAddresses.map((item,index)=>(

<div
key={index}
className="bg-white rounded-[30px] p-8 shadow-2xl w-full"
>

<div className="flex gap-3 items-center">

{

item.type==="Home"

?

<FaHome className="text-cyan-500 text-3xl"/>

:

<FaBriefcase className="text-cyan-500 text-3xl"/>

}

<h2 className="text-3xl font-bold">

{item.type}

</h2>

</div>

<div className="mt-6">

<p className="font-bold text-xl">

{item.name}

</p>

<p className="mt-2">

📞 {item.phone}

</p>

<p className="mt-3 text-gray-600">

📍 {item.address}

</p>

</div>

</div>

))}

</div>


{/* MODAL */}

{open &&(

<div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">

<div className="bg-white w-[95%] max-w-[1600px] h-[90vh] rounded-[35px] overflow-hidden shadow-2xl grid grid-cols-[1.2fr_1fr]">


{/* MAP */}

<div className="relative h-full">

<MapContainer

center={position}
zoom={15}

style={{

height:"100%",
width:"100%"

}}

>

<TileLayer

url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

/>

<Marker
position={position}
/>

<LocationPicker

setPosition={setPosition}
setAddressData={setAddressData}

/>

</MapContainer>


<div className="absolute top-5 left-5 bg-white p-4 rounded-2xl shadow-xl z-[1000] flex gap-3 items-center">

<FaMapMarkerAlt
className="text-red-500 text-xl"
/>

<p className="font-bold">

Select delivery location

</p>

</div>

</div>


{/* FORM */}

<div className="p-10 overflow-y-auto">

<div className="flex justify-between">

<h1 className="text-5xl font-bold">

Add New Address

</h1>

<button
onClick={()=>setOpen(false)}
className="text-3xl"
>

×

</button>

</div>


<div className="mt-10 space-y-6">

<input

placeholder="Full Name"

value={addressData.name}

onChange={(e)=>

setAddressData({

...addressData,
name:e.target.value

})

}

className="w-full border p-5 rounded-2xl outline-none"

/>


<input

placeholder="Mobile Number"

value={addressData.phone}

onChange={(e)=>

setAddressData({

...addressData,
phone:e.target.value

})

}

className="w-full border p-5 rounded-2xl outline-none"

/>


<textarea

rows="6"

placeholder="Selected Address"

value={addressData.address}

onChange={(e)=>

setAddressData({

...addressData,
address:e.target.value

})

}

className="w-full border p-5 rounded-2xl outline-none"

/>


<div className="flex gap-4">

<button

onClick={()=>setAddressData({

...addressData,
type:"Home"

})}

className={`px-8 py-3 rounded-full ${
addressData.type==="Home"
?
"bg-cyan-500 text-white"
:
"bg-gray-100"
}`}

>

Home

</button>


<button

onClick={()=>setAddressData({

...addressData,
type:"Work"

})}

className={`px-8 py-3 rounded-full ${
addressData.type==="Work"
?
"bg-cyan-500 text-white"
:
"bg-gray-100"
}`}

>

Work

</button>

</div>


<button

onClick={saveAddress}

className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-2xl py-5 font-bold text-xl shadow-xl"

>

Save Address

</button>

</div>

</div>

</div>

</div>

)}

</div>

</div>

</Profile>

);

}