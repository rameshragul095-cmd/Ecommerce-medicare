import { useState } from "react";

export default function MegaMenu() {

  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {

    "Baby Care":[

    {
    name:"Diapers",
    brand:"Pampers",
    sizes:["S","M","L","XL"],
    rating:"4.8 ★",
    price:"₹599",
    description:"Soft breathable diapers with 12hr absorption"
    },

    {
    name:"Baby Oils",
    brand:"Johnson's Baby",
    sizes:["100ml","200ml","500ml"],
    rating:"4.7 ★",
    price:"₹249",
    description:"Gentle nourishing oil for baby skin"
    },

    {
    name:"Baby Cream",
    brand:"Himalaya Baby",
    sizes:["50g","100g"],
    rating:"4.6 ★",
    price:"₹145",
    description:"Moisturizing cream with natural herbs"
    },

    {
    name:"Baby Powder",
    brand:"Mee Mee",
    sizes:["100g","300g"],
    rating:"4.5 ★",
    price:"₹125",
    description:"Protects skin from irritation"
    }

    ],

    "Women Care":[

    {
    name:"Women Vitamins",
    brand:"Revital Woman",
    sizes:["30 Tablets","60 Tablets"],
    rating:"4.7 ★",
    price:"₹299",
    description:"Daily vitamins for women health"
    },

    {
    name:"Skin Care",
    brand:"Cetaphil",
    sizes:["100ml","250ml"],
    rating:"4.8 ★",
    price:"₹349",
    description:"Hydrating sensitive skin lotion"
    },

    {
    name:"Hair Care",
    brand:"Loreal",
    sizes:["100ml","250ml"],
    rating:"4.5 ★",
    price:"₹275",
    description:"Hair repair shampoo"
    }

    ],

    "Personal Care":[

    {
    name:"Soap",
    brand:"Dove",
    sizes:["75g","125g"],
    rating:"4.6 ★",
    price:"₹99",
    description:"Moisturizing body soap"
    },

    {
    name:"Face Wash",
    brand:"Himalaya",
    sizes:["50ml","100ml"],
    rating:"4.5 ★",
    price:"₹149",
    description:"Neem face wash for acne protection"
    },

    {
    name:"Shampoo",
    brand:"Head & Shoulders",
    sizes:["100ml","200ml"],
    rating:"4.7 ★",
    price:"₹219",
    description:"Anti dandruff shampoo"
    },

    {
    name:"Toothpaste",
    brand:"Colgate",
    sizes:["100g","200g"],
    rating:"4.6 ★",
    price:"₹110",
    description:"Cavity protection toothpaste"
    }

    ],

    "Health Devices":[

    {
    name:"BP Monitor",
    brand:"Omron",
    sizes:["Digital"],
    rating:"4.9 ★",
    price:"₹2499",
    description:"Automatic blood pressure monitor"
    },

    {
    name:"Sugar Test",
    brand:"Accu-Chek",
    sizes:["50 strips"],
    rating:"4.8 ★",
    price:"₹699",
    description:"Accurate sugar level testing"
    },

    {
    name:"Thermometer",
    brand:"Dr Morepen",
    sizes:["Digital"],
    rating:"4.7 ★",
    price:"₹299",
    description:"Fast temperature reading"
    },

    {
    name:"Nebulizer",
    brand:"Omron",
    sizes:["Standard"],
    rating:"4.8 ★",
    price:"₹1899",
    description:"Portable nebulizer machine"
    }

    ]

    };

  return (

    <div className="bg-teal-900 text-white relative">

      {/* TOP MENU */}
      <div className="flex gap-14 px-10 py-5 text-xl font-semibold">

        {Object.keys(menuData).map((menu) => (

          <div
            key={menu}
            className="cursor-pointer hover:text-yellow-300 transition"
            onMouseEnter={() => setActiveMenu(menu)}
          >

            {menu}

          </div>

        ))}

      </div>

      {/* DROPDOWN */}
      {activeMenu && (

        <div
          className="absolute left-0 top-full w-full bg-white shadow-2xl z-50"
          onMouseLeave={() => setActiveMenu(null)}
        >

          <div className="flex">

            {/* LEFT SIDE */}
            <div className="w-[320px] bg-gray-100 p-8">

              <h2 className="text-5xl font-bold text-black mb-8">
                {activeMenu}
              </h2>

              <div className="space-y-6">

               <div className="grid grid-cols-2 gap-5">

              {menuData[activeMenu].map((item,index)=>(

              <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition cursor-pointer"
              >

              <h3 className="text-2xl font-bold text-teal-700">

              {item.name}

              </h3>

              <p className="text-gray-700">

              Brand:
              <span className="font-semibold">

              {item.brand}

              </span>

              </p>

              <p className="text-gray-700">

              Sizes:
              {item.sizes.join(", ")}

              </p>

              <p className="text-yellow-500 font-bold">

              {item.rating}

              </p>

              <p className="text-green-600 font-bold">

              {item.price}

              </p>

              <p className="text-gray-500 text-sm mt-2">

              {item.description}

              </p>

              </div>

              ))}

              </div>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 p-10 flex items-center justify-center">

              <img
                src="logo.png"
                alt="medical"
                className="w-72 opacity-90"
              />

            </div>

          </div>

        </div>

      )}

    </div>
  );
}