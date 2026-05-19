import { useState } from "react";

export default function MegaMenu() {

const [activeMenu,setActiveMenu]=useState(null);

const [activeItem,setActiveItem]=useState(null);

const menuData={

"Baby Care":[

{
name:"Diapers",
brand:"Pampers",
sizes:"S,M,L,XL",
price:"₹599",
rating:"4.8 ★",
description:"Soft breathable diapers with 12hr absorption",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Baby Oils",
brand:"Johnson Baby",
sizes:"100ml,200ml,500ml",
price:"₹249",
rating:"4.7 ★",
description:"Nourishes baby skin naturally",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Baby Cream",
brand:"Himalaya Baby",
sizes:"50g,100g",
price:"₹145",
rating:"4.6 ★",
description:"Gentle moisturizing cream for baby skin protection",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Baby Powder",
brand:"Mee Mee",
sizes:"100g,300g",
price:"₹125",
rating:"4.5 ★",
description:"Prevents skin irritation and keeps skin fresh",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Baby Shampoo",
brand:"Chicco",
sizes:"100ml,200ml",
price:"₹199",
rating:"4.8 ★",
description:"Tear-free baby shampoo with gentle ingredients",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Baby Soap",
brand:"Dove Baby",
sizes:"75g,100g",
price:"₹95",
rating:"4.6 ★",
description:"Mild soap for sensitive baby skin",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Baby Wipes",
brand:"Pampers",
sizes:"40,72,120 Pieces",
price:"₹179",
rating:"4.9 ★",
description:"Soft alcohol-free wipes for baby hygiene",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Baby Feeding Bottle",
brand:"Philips Avent",
sizes:"125ml,250ml",
price:"₹299",
rating:"4.8 ★",
description:"BPA-free anti-colic feeding bottle",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Baby Lotion",
brand:"Mamaearth",
sizes:"100ml,250ml",
price:"₹225",
rating:"4.7 ★",
description:"Deep moisturizing lotion with natural ingredients",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Baby Toothbrush",
brand:"Oral-B Kids",
sizes:"Small,Medium",
price:"₹85",
rating:"4.5 ★",
description:"Soft bristles designed for baby teeth care",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
}

],

"Women Care":[

{
name:"Hair Care",
brand:"Loreal Paris",
sizes:"100ml,250ml",
price:"₹399",
rating:"4.8 ★",
description:"Healthy strong hair repair formula",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Women Vitamins",
brand:"Revital Woman",
sizes:"30 Tablets,60 Tablets",
price:"₹349",
rating:"4.7 ★",
description:"Daily nutrition support for women health",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Face Wash",
brand:"Himalaya",
sizes:"50ml,100ml",
price:"₹149",
rating:"4.6 ★",
description:"Neem face wash for acne protection",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Skin Moisturizer",
brand:"Nivea",
sizes:"100ml,250ml",
price:"₹299",
rating:"4.8 ★",
description:"Deep hydration for healthy glowing skin",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Sanitary Pads",
brand:"Whisper",
sizes:"XL,XXL,30 Pads",
price:"₹199",
rating:"4.9 ★",
description:"Ultra-thin hygienic protection",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Hair Serum",
brand:"Streax",
sizes:"50ml,100ml",
price:"₹275",
rating:"4.7 ★",
description:"Smooth frizz-free hair serum",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Body Lotion",
brand:"Vaseline",
sizes:"100ml,400ml",
price:"₹259",
rating:"4.6 ★",
description:"Moisturizing body lotion for soft skin",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Pregnancy Test Kit",
brand:"Prega News",
sizes:"Single Kit",
price:"₹75",
rating:"4.8 ★",
description:"Fast and accurate pregnancy detection",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Lip Care",
brand:"Maybelline Baby Lips",
sizes:"4g",
price:"₹179",
rating:"4.5 ★",
description:"Long-lasting moisturizing lip balm",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Women's Protein Powder",
brand:"Herbalife",
sizes:"200g,500g",
price:"₹899",
rating:"4.7 ★",
description:"Nutrition support for energy and wellness",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
}

],



"Personal Care":[

{
name:"Face Wash",
brand:"Himalaya",
sizes:"100ml",
price:"₹199",
rating:"4.7 ★",
description:"Neem face wash",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},
{
name:"Body Wash",
brand:"Nivea",
sizes:"250ml,500ml",
price:"₹299",
rating:"4.8 ★",
description:"Refreshing body wash with skin moisturizers",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},
{
name:"Shampoo",
brand:"Head & Shoulders",
sizes:"180ml,340ml",
price:"₹249",
rating:"4.6 ★",
description:"Anti-dandruff shampoo for healthy hair",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Soap",
brand:"Dove",
sizes:"75g,125g",
price:"₹85",
rating:"4.7 ★",
description:"Moisturizing beauty soap for soft skin",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Toothpaste",
brand:"Colgate",
sizes:"100g,200g",
price:"₹99",
rating:"4.8 ★",
description:"Advanced cavity protection toothpaste",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Tooth Brush",
brand:"Oral-B",
sizes:"Soft,Medium,Hard",
price:"₹120",
rating:"4.6 ★",
description:"Soft bristle toothbrush for better cleaning",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Perfume",
brand:"Fogg",
sizes:"100ml,150ml",
price:"₹399",
rating:"4.7 ★",
description:"Long-lasting fragrance body spray",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

],
"Diabetes Care":[

{
name:"Sugar Test Strips",
brand:"Accu-Chek",
sizes:"25 Strips,50 Strips",
price:"₹599",
rating:"4.8 ★",
description:"Accurate blood glucose monitoring strips",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Glucometer",
brand:"Dr Morepen",
sizes:"Standard",
price:"₹899",
rating:"4.9 ★",
description:"Digital glucose monitoring device",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Diabetic Protein Powder",
brand:"Protinex Diabetes Care",
sizes:"200g,400g",
price:"₹699",
rating:"4.7 ★",
description:"Nutrition support for diabetic patients",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Sugar Free Tablets",
brand:"Sugar Free Natura",
sizes:"100 Tablets",
price:"₹135",
rating:"4.6 ★",
description:"Healthy sugar substitute tablets",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Diabetic Foot Cream",
brand:"Dr Foot",
sizes:"50g,100g",
price:"₹249",
rating:"4.5 ★",
description:"Moisturizing cream for diabetic foot care",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Insulin Syringe",
brand:"BD Ultra Fine",
sizes:"10 Pieces,20 Pieces",
price:"₹299",
rating:"4.8 ★",
description:"Sterile insulin injection syringes",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Diabetic Nutrition Drink",
brand:"Ensure Diabetes Care",
sizes:"200g,400g",
price:"₹749",
rating:"4.7 ★",
description:"Balanced nutrition with low glycemic index",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Blood Sugar Monitor",
brand:"OneTouch",
sizes:"Standard",
price:"₹1299",
rating:"4.9 ★",
description:"Fast and accurate sugar monitoring device",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Diabetic Socks",
brand:"HealthCare Plus",
sizes:"M,L,XL",
price:"₹199",
rating:"4.5 ★",
description:"Comfortable socks designed for diabetic care",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Herbal Diabetes Support",
brand:"Dabur",
sizes:"100ml,200ml",
price:"₹349",
rating:"4.6 ★",
description:"Herbal supplement for diabetes wellness support",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
}

],
"HouseHold Care":[

{
name:"Floor Cleaner",
brand:"Lizol",
sizes:"500ml,1L",
price:"₹189",
rating:"4.8 ★",
description:"Kills 99.9% germs and keeps floors fresh",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Dish Wash Gel",
brand:"Vim",
sizes:"250ml,500ml",
price:"₹99",
rating:"4.7 ★",
description:"Powerful grease removal for utensils",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Hand Wash",
brand:"Dettol",
sizes:"200ml,500ml",
price:"₹149",
rating:"4.8 ★",
description:"Protects hands from germs and bacteria",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Toilet Cleaner",
brand:"Harpic",
sizes:"500ml,1L",
price:"₹175",
rating:"4.7 ★",
description:"Removes tough stains and kills germs",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Laundry Detergent",
brand:"Surf Excel",
sizes:"1kg,2kg",
price:"₹299",
rating:"4.9 ★",
description:"Deep cleaning detergent for clothes",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Air Freshener",
brand:"Odonil",
sizes:"140g,220g",
price:"₹129",
rating:"4.6 ★",
description:"Long-lasting fragrance for rooms",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Mosquito Repellent",
brand:"Good Knight",
sizes:"45ml,90ml",
price:"₹159",
rating:"4.8 ★",
description:"Protects from mosquitoes all night",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Glass Cleaner",
brand:"Colin",
sizes:"250ml,500ml",
price:"₹119",
rating:"4.7 ★",
description:"Streak-free cleaning for glass surfaces",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Garbage Bags",
brand:"CleanWrap",
sizes:"Medium,Large",
price:"₹89",
rating:"4.5 ★",
description:"Strong disposable bags for household waste",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Disinfectant Spray",
brand:"Dettol",
sizes:"170ml,450ml",
price:"₹225",
rating:"4.8 ★",
description:"Kills germs on household surfaces",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
}

],
"Ayurvedic Care":[

{
name:"Chyawanprash",
brand:"Dabur",
sizes:"250g,500g,1kg",
price:"₹299",
rating:"4.8 ★",
description:"Boosts immunity and improves overall health",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Ashwagandha Capsules",
brand:"Himalaya",
sizes:"30 Capsules,60 Capsules",
price:"₹349",
rating:"4.7 ★",
description:"Supports stress relief and energy levels",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Triphala Tablets",
brand:"Baidyanath",
sizes:"60 Tablets",
price:"₹199",
rating:"4.6 ★",
description:"Supports digestion and detoxification",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Amla Juice",
brand:"Patanjali",
sizes:"500ml,1L",
price:"₹175",
rating:"4.7 ★",
description:"Rich in Vitamin C for immunity support",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Neem Capsules",
brand:"Organic India",
sizes:"60 Capsules",
price:"₹249",
rating:"4.6 ★",
description:"Supports skin health and body cleansing",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Tulsi Drops",
brand:"Dabur",
sizes:"30ml,100ml",
price:"₹125",
rating:"4.8 ★",
description:"Helps improve immunity and respiratory health",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
},

{
name:"Giloy Juice",
brand:"Patanjali",
sizes:"500ml,1L",
price:"₹189",
rating:"4.7 ★",
description:"Traditional herbal wellness drink",
image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png"
},

{
name:"Aloe Vera Gel",
brand:"Patanjali",
sizes:"100ml,250ml",
price:"₹149",
rating:"4.8 ★",
description:"Supports skin hydration and soothing care",
image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
},

{
name:"Herbal Cough Syrup",
brand:"Zandu",
sizes:"100ml,200ml",
price:"₹135",
rating:"4.5 ★",
description:"Ayurvedic herbal syrup for cough relief",
image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
},

{
name:"Herbal Digestive Powder",
brand:"Dabur Hajmola",
sizes:"100g,200g",
price:"₹99",
rating:"4.6 ★",
description:"Supports digestion and stomach comfort",
image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
}

],

};

return(

<div className="bg-teal-900 text-white relative">

{/* TOP BAR */}

<div className="flex gap-12 px-10 py-5 text-xl font-semibold">

{Object.keys(menuData).map((menu)=>(

<div
key={menu}
className="cursor-pointer hover:text-yellow-300"
onMouseEnter={()=>{
setActiveMenu(menu);
setActiveItem(menuData[menu][0]);
}}
>

{menu}

</div>

))}

</div>


{/* DROPDOWN */}

{activeMenu && (

<div
className="absolute top-full left-0 w-full bg-white shadow-2xl z-50"

onMouseLeave={()=>{
setActiveMenu(null)
}}
>

<div className="flex h-[450px]">

{/* LEFT MENU */}

<div className="w-[300px] bg-gray-100 p-8">

<h2 className="text-3xl font-bold text-black mb-6">

{activeMenu}

</h2>

<div className="space-y-5">

{menuData[activeMenu].map((item)=>(

<div
key={item.name}

onMouseEnter={()=>
setActiveItem(item)
}

className={`cursor-pointer
text-xl p-3 rounded-xl transition

${
activeItem?.name===item.name
?
"bg-teal-700 text-white"
:
"text-gray-700 hover:bg-white"
}
`}
>

{item.name}

</div>

))}

</div>

</div>


{/* RIGHT DETAILS */}

<div className="flex-1 p-10">

{activeItem && (

<div className="flex gap-10">

<div>

<img
src={activeItem.image}
alt=""
className="w-56 h-56 object-contain"
/>

</div>


<div>

<h1 className="text-4xl font-bold text-black">

{activeItem.name}

</h1>

<p className="mt-4 text-xl text-gray-700">

Brand:
<span className="font-semibold">

{" "}
{activeItem.brand}

</span>

</p>

<p className="mt-2 text-lg text-gray-700">

Sizes:

{" "}
{activeItem.sizes}

</p>

<p className="mt-2 text-yellow-500 font-bold text-xl">

{activeItem.rating}

</p>

<p className="mt-2 text-green-600 font-bold text-2xl">

{activeItem.price}

</p>

<p className="mt-5 text-gray-600 max-w-[500px]">

{activeItem.description}

</p>

<button
className="
mt-8
px-8
py-4
rounded-full
bg-gradient-to-r
from-green-500
to-emerald-600
text-white
font-bold
"
>

View Products

</button>

</div>

</div>

)}

</div>

</div>

</div>

)}

</div>

)

}