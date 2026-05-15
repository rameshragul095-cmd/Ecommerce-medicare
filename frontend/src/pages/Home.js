// import { useState } from "react";

// import Navbar from "../components/Navbar";
// import MegaMenu from "../components/MegaMenu";
// import ProductCard from "../components/ProductCard";

// import "./Home.css";

// export default function Home() {

//   const [search, setSearch] = useState("");

//   // PRODUCTS

//  const [products,setProducts] =
// useState(() => {

//   const saved =
//     localStorage.getItem(
//       "medicareProducts"
//     );

//   if(saved){

//     return JSON.parse(saved);

//   }

//   return [

//     {
//       id:1,
//       name:"Crocin 650",
//       category:"Fever Tablet",
//       price:20,
//       image:
//       "https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
//     },

//     {
//       id:2,
//       name:"Paracetamol",
//       category:"Pain Relief",
//       price:35,
//       image:
//       "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
//     },

//     {
//       id:3,
//       name:"Vitamin C",
//       category:"Supplement",
//       price:90,
//       image:
//       "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
//     },

//     ...Array.from(
//       {length:97},
//       (_,i)=>({

//         id:i+4,

//         name:`Medicine ${i+4}`,

//         category:[
//           "Tablet",
//           "Capsule",
//           "Syrup",
//           "Injection",
//           "Supplement"
//         ][i%5],

//         price:
//         Math.floor(
//           Math.random()*2000
//         ) + 50,

//         image:[
//           "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",

//           "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",

//           "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
//         ][i%3]

//       }))
//   ];

// });

// const updateProductImage = (
//   id,
//   file
// ) => {

//   const reader =
//     new FileReader();

//   reader.onloadend = () => {

//     const updated =
//       products.map((item)=>{

//         if(item.id === id){

//           return {

//             ...item,

//             image:reader.result

//           };

//         }

//         return item;

//       });

//     setProducts(updated);

//     localStorage.setItem(
//       "medicareProducts",
//       JSON.stringify(updated)
//     );

//   };

//   reader.readAsDataURL(file);

// };


//   // SEARCH FILTER

//   const filteredProducts = products.filter((item) =>
//     item.name
//       .toLowerCase()
//       .includes(search.toLowerCase())
//   );


//   // ADS

//   const ads = [

//     {
//       title: "MediCare Immunity Booster",

//       subtitle:
//         "Boost your immunity naturally",

//       image:
//         "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",

//       bg:
//         "linear-gradient(135deg,#00c6ff,#0072ff)"
//     },

//     {
//       title: "MediCare Diabetes Care",

//       subtitle:
//         "Trusted diabetic care products",

//       image:
//         "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",

//       bg:
//         "linear-gradient(135deg,#ff758c,#ff7eb3)"
//     },

//     {
//       title: "MediCare Skin Care",

//       subtitle:
//         "Healthy skin with premium products",

//       image:
//         "https://cdn-icons-png.flaticon.com/512/2785/2785819.png",

//       bg:
//         "linear-gradient(135deg,#43e97b,#38f9d7)"
//     }

//   ];


//   // SPLIT PRODUCTS INTO ROWS OF 5

//   const rows = [];

//   for (
//     let i = 0;
//     i < filteredProducts.length;
//     i += 5
//   ) {

//     rows.push(
//       filteredProducts.slice(i, i + 5)
//     );

//   }


//   return (

//     <div className="bg-[#f5f7f7] min-h-screen">

//       <Navbar />

//       <MegaMenu />


//       {/* HERO */}

//       {/* HERO SECTION */}

// <div className="hero-section">

//   {/* FLOATING CIRCLES */}

//   <div className="circle circle1"></div>

//   <div className="circle circle2"></div>

//   <div className="circle circle3"></div>


//   {/* TITLE */}

//   <h1 className="hero-title">

//     MediCare Health Store

//   </h1>


//   {/* SUBTITLE */}

//   <p className="hero-subtitle">

//     Trusted Medicines • Healthcare • Fast Delivery

//   </p>


//   {/* SEARCH */}

//   <div className="search-box">

//     <span className="search-icon">

//       🔍

//     </span>

//     <input

//       type="text"

//       placeholder="Search Medicines..."

//       value={search}

//       onChange={(e) =>
//         setSearch(e.target.value)
//       }

//     />

//   </div>

// </div>


//       {/* BANNERS */}

//       <div className="grid grid-cols-3 gap-6 px-16 mt-10">

//         <div className="bg-green-100 rounded-3xl p-8 shadow-md">

//           <h2 className="text-3xl font-bold">

//             20% OFF

//           </h2>

//           <p className="mt-2 text-gray-700">

//             First Order Discount

//           </p>

//         </div>


//         <div className="bg-purple-100 rounded-3xl p-8 shadow-md">

//           <h2 className="text-3xl font-bold">

//             Doctor Appointment

//           </h2>

//           <p className="mt-2 text-gray-700">

//             Book Online Consultation

//           </p>

//         </div>


//         <div className="bg-yellow-100 rounded-3xl p-8 shadow-md">

//           <h2 className="text-3xl font-bold">

//             Health Insurance

//           </h2>

//           <p className="mt-2 text-gray-700">

//             Explore Medical Plans

//           </p>

//         </div>

//       </div>


//       {/* PRODUCTS */}

//       <div className="px-16 mt-14 pb-20">

//         <h2 className="text-4xl font-bold mb-10">

//           Top Medicines

//         </h2>


//         {rows.map((row, rowIndex) => (

//           <div key={rowIndex}>

//             {/* PRODUCT ROW */}

//             <div className="grid grid-cols-5 gap-6 mb-8">

//               {row.map((item) => (

//   <div
//     key={item.id}
//     className="product-upload-wrapper"
//   >

//     {/* PRODUCT CARD */}

//     <ProductCard item={item} />


//     {/* IMAGE UPLOAD BUTTON */}

//     <label className="upload-overlay">

//       📷 Upload

//       <input

//         type="file"

//         accept="image/*"

//         hidden

//         onChange={(e) => {

//           if (e.target.files[0]) {

//             updateProductImage(
//               item.id,
//               e.target.files[0]
//             );

//           }

//         }}

//       />

//     </label>

//   </div>

// ))}

//             </div>


//             {/* SHOW AD AFTER EVERY 5 ROWS */}

//            {(rowIndex + 1) % 5 === 0 && (

//   <div
//     className="ad-banner"
//     style={{
//       background:
//         ads[
//           Math.floor(rowIndex / 5) %
//           ads.length
//         ].bg
//     }}
//   >

//     <div className="ad-content">

//       <div className="ad-left">

//         <h1>

//           {
//             ads[
//               Math.floor(rowIndex / 5) %
//               ads.length
//             ].title
//           }

//         </h1>

//         <p>

//           {
//             ads[
//               Math.floor(rowIndex / 5) %
//               ads.length
//             ].subtitle
//           }

//         </p>

//         <button>

//           Explore Now

//         </button>

//       </div>


//       <div className="ad-right">

//         <img

//           src={
//             ads[
//               Math.floor(rowIndex / 5) %
//               ads.length
//             ].image
//           }

//           alt=""

//         />

//       </div>

//     </div>

//   </div>

// )}

//           </div>

//         ))}

//       </div>

//     </div>

//   );

// }

import { useState } from "react";

import Navbar from "../components/Navbar";
import MegaMenu from "../components/MegaMenu";
import ProductCard from "../components/ProductCard";

import "./Home.css";

export default function Home() {

  const [search, setSearch] = useState("");

  const [selectedAd, setSelectedAd] =
    useState(null);

  // PRODUCTS

  const [products, setProducts] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "medicareProducts"
        );

      if (saved) {

        return JSON.parse(saved);

      }

      return [

        {
          id: 1,
          name: "Crocin 650",
          category: "Fever Tablet",
          price: 20,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
        },

        {
          id: 2,
          name: "Paracetamol",
          category: "Pain Relief",
          price: 35,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
        },

        {
          id: 3,
          name: "Vitamin C",
          category: "Supplement",
          price: 90,
          image:
            "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },

        // REAL MEDICINES

        {
          id: 4,
          name: "Dolo 650",
          category: "Fever Tablet",
          price: 35,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
        },

        {
          id: 5,
          name: "Azithromycin 500",
          category: "Antibiotic",
          price: 120,
          image:
            "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },

        {
          id: 6,
          name: "Amoxicillin",
          category: "Capsule",
          price: 95,
          image:
            "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
        },

        {
          id: 7,
          name: "Cetirizine",
          category: "Allergy Tablet",
          price: 45,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
        },

        {
          id: 8,
          name: "ORS Powder",
          category: "Hydration",
          price: 25,
          image:
            "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },

        {
          id: 9,
          name: "Zincovit",
          category: "Supplement",
          price: 110,
          image:
            "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
        },

        {
          id: 10,
          name: "Shelcal 500",
          category: "Calcium Tablet",
          price: 140,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
        },

        {
          id: 11,
          name: "Benadryl Syrup",
          category: "Cough Syrup",
          price: 90,
          image:
            "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },

        {
          id: 12,
          name: "Disprin",
          category: "Pain Relief",
          price: 30,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
        },

        {
          id: 13,
          name: "Digene",
          category: "Acidity",
          price: 55,
          image:
            "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
        },

        {
          id: 14,
          name: "Volini Spray",
          category: "Pain Relief",
          price: 210,
          image:
            "https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
        },

        {
          id: 15,
          name: "Crocin Advance",
          category: "Fever Tablet",
          price: 42,
          image:
            "https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
        },

        // AUTO GENERATE MANY MEDICINES

        ...Array.from(
          { length: 85 },
          (_, i) => ({

            id: i + 16,

            name:
              [
                "Pantoprazole",
                "Metformin",
                "Atorvastatin",
                "Vitamin D3",
                "Calpol",
                "Augmentin",
                "Liv52",
                "Neurobion",
                "Sinarest",
                "Gelusil"
              ][i % 10]
              + " "
              + (i + 1),

            category:
              [
                "Tablet",
                "Capsule",
                "Syrup",
                "Supplement",
                "Injection"
              ][i % 5],

            price:
              Math.floor(
                Math.random() * 900
              ) + 50,

            image:
              [
                "https://cdn-icons-png.flaticon.com/512/4320/4320337.png",

                "https://cdn-icons-png.flaticon.com/512/3050/3050158.png",

                "https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
              ][i % 3]

          })
        )

      ];

    });

  // UPDATE PRODUCT IMAGE

  const updateProductImage = (
    id,
    file
  ) => {

    const reader =
      new FileReader();

    reader.onloadend = () => {

      const updated =
        products.map((item) => {

          if (item.id === id) {

            return {

              ...item,

              image: reader.result

            };

          }

          return item;

        });

      setProducts(updated);

      localStorage.setItem(
        "medicareProducts",
        JSON.stringify(updated)
      );

    };

    reader.readAsDataURL(file);

  };

  // SEARCH FILTER

  const filteredProducts =
    products.filter((item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  // ADS

  const ads = [

    {
      title: "Diabetes Care",

      subtitle:
        "Premium diabetic support medicines",

      description:
        "Monitor sugar levels with trusted diabetic healthcare products and supplements.",

      offer:
        "Flat 30% OFF",

      image:
        "https://cdn-icons-png.flaticon.com/512/2966/2966486.png",

      bg:
        "linear-gradient(135deg,#00c6ff,#0072ff)"
    },

    {
      title: "Heart Health",

      subtitle:
        "Protect your heart naturally",

      description:
        "Advanced cardiac medicines and BP support healthcare solutions.",

      offer:
        "Buy 1 Get 1",

      image:
        "https://cdn-icons-png.flaticon.com/512/4320/4320371.png",

      bg:
        "linear-gradient(135deg,#ff758c,#ff7eb3)"
    },

    {
      title: "Skin Care",

      subtitle:
        "Healthy glowing skin",

      description:
        "Premium dermatology and skin protection products.",

      offer:
        "Up To 50% OFF",

      image:
        "https://cdn-icons-png.flaticon.com/512/2785/2785819.png",

      bg:
        "linear-gradient(135deg,#43e97b,#38f9d7)"
    }

  ];

  // SPLIT PRODUCTS INTO ROWS OF 5

  const rows = [];

  for (
    let i = 0;
    i < filteredProducts.length;
    i += 5
  ) {

    rows.push(
      filteredProducts.slice(i, i + 5)
    );

  }

  return (

    <div className="bg-[#f5f7f7] min-h-screen">

      <Navbar />

      <MegaMenu />

      {/* HERO */}

      <div className="hero-section">

        <div className="circle circle1"></div>

        <div className="circle circle2"></div>

        <div className="circle circle3"></div>

        <h1 className="hero-title">

          MediCare Health Store

        </h1>

        <p className="hero-subtitle">

          Trusted Medicines • Healthcare • Fast Delivery

        </p>

        {/* SEARCH */}

        <div className="search-box">

          <span className="search-icon">

            🔍

          </span>

          <input

            type="text"

            placeholder="Search Medicines..."

            value={search}

            onChange={(e) =>
              setSearch(e.target.value)
            }

          />

        </div>

      </div>

      {/* BANNERS */}

      <div className="grid grid-cols-3 gap-6 px-16 mt-10">

        <div className="bg-green-100 rounded-3xl p-8 shadow-md">

          <h2 className="text-3xl font-bold">

            20% OFF

          </h2>

          <p className="mt-2 text-gray-700">

            First Order Discount

          </p>

        </div>

        <div className="bg-purple-100 rounded-3xl p-8 shadow-md">

          <h2 className="text-3xl font-bold">

            Doctor Appointment

          </h2>

          <p className="mt-2 text-gray-700">

            Book Online Consultation

          </p>

        </div>

        <div className="bg-yellow-100 rounded-3xl p-8 shadow-md">

          <h2 className="text-3xl font-bold">

            Health Insurance

          </h2>

          <p className="mt-2 text-gray-700">

            Explore Medical Plans

          </p>

        </div>

      </div>

      {/* PRODUCTS */}

      <div className="px-16 mt-14 pb-20">

        <h2 className="text-4xl font-bold mb-10">

          Top Medicines

        </h2>

        {rows.map((row, rowIndex) => (

          <div key={rowIndex}>

            {/* PRODUCT ROW */}

            <div className="grid grid-cols-5 gap-6 mb-8">

              {row.map((item) => (

                <div
                  key={item.id}
                  className="product-upload-wrapper"
                >

                  <ProductCard item={item} />

                  {/* IMAGE UPLOAD */}

                  <label className="upload-overlay">

                    📷 Upload

                    <input

                      type="file"

                      accept="image/*"

                      hidden

                      onChange={(e) => {

                        if (
                          e.target.files[0]
                        ) {

                          updateProductImage(
                            item.id,
                            e.target.files[0]
                          );

                        }

                      }}

                    />

                  </label>

                </div>

              ))}

            </div>

            {/* ADS AFTER EVERY 3 ROWS */}

            {(rowIndex + 1) % 3 === 0 && (

              <div

                className="ad-banner cursor-pointer mb-10"

                style={{
                  background:
                    ads[
                      Math.floor(
                        rowIndex / 3
                      ) % ads.length
                    ].bg
                }}

                onClick={() =>
                  setSelectedAd(

                    ads[
                    Math.floor(
                      rowIndex / 3
                    ) % ads.length
                    ]

                  )
                }

              >

                <div className="ad-content">

                  <div className="ad-left">

                    <h1>

                      {
                        ads[
                          Math.floor(
                            rowIndex / 3
                          ) % ads.length
                        ].title
                      }

                    </h1>

                    <p>

                      {
                        ads[
                          Math.floor(
                            rowIndex / 3
                          ) % ads.length
                        ].subtitle
                      }

                    </p>

                    <button>

                      Explore Now

                    </button>

                  </div>

                  <div className="ad-right">

                    <img

                      src={
                        ads[
                          Math.floor(
                            rowIndex / 3
                          ) % ads.length
                        ].image
                      }

                      alt=""

                    />

                  </div>

                </div>

              </div>

            )}

          </div>

        ))}

      </div>

      {/* AD MODAL */}

      {selectedAd && (

        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">

          <div

            className="w-[700px] rounded-[40px] p-10 text-white relative shadow-2xl"

            style={{
              background:
                selectedAd.bg
            }}

          >

            <button

              onClick={() =>
                setSelectedAd(null)
              }

              className="absolute top-5 right-5 bg-white text-black rounded-full w-10 h-10"

            >

              ✕

            </button>

            <div className="flex items-center justify-between">

              <div className="max-w-[420px]">

                <h1 className="text-5xl font-black">

                  {selectedAd.title}

                </h1>

                <p className="mt-5 text-xl">

                  {selectedAd.subtitle}

                </p>

                <p className="mt-5 text-lg leading-8 opacity-90">

                  {selectedAd.description}

                </p>

                <div className="mt-8">

                  <span className="bg-white text-black px-6 py-3 rounded-full font-bold">

                    {selectedAd.offer}

                  </span>

                </div>

                <button className="mt-10 bg-black text-white px-8 py-4 rounded-2xl text-lg font-bold">

                  Shop Now

                </button>

              </div>

              <img

                src={selectedAd.image}

                alt=""

                className="w-56"

              />

            </div>

          </div>

        </div>

      )}

    </div>

  );

}