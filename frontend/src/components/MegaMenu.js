import { useState } from "react";

export default function MegaMenu() {

  const [activeMenu, setActiveMenu] = useState(null);

  const menuData = {

    "Baby Care": [
      "Diapers",
      "Baby Oils",
      "Baby Cream",
      "Baby Powder"
    ],

    "Women Care": [
      "Women Vitamins",
      "Skin Care",
      "Hair Care"
    ],

    "Personal Care": [
      "Soap",
      "Face Wash",
      "Shampoo",
      "Toothpaste"
    ],

    "Health Devices": [
      "BP Monitor",
      "Sugar Test",
      "Thermometer",
      "Nebulizer"
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

                {menuData[activeMenu].map((item, index) => (

                  <p
                    key={index}
                    className="text-2xl text-gray-700 hover:text-teal-700 cursor-pointer"
                  >
                    {item}
                  </p>

                ))}

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex-1 p-10 flex items-center justify-center">

              <img
                src="https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
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