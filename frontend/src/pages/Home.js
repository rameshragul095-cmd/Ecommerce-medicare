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
            "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-009893/crocin-650-tablet-15_crocin-650-tablet-15--TM-TACR1-009893_1.png"
        },

        {
          id: 2,
          name: "Paracetamol",
          category: "Pain Relief",
          price: 35,
          image:
            "https://www.biofieldpharma.com/wp-content/uploads/2023/06/BIOFIELD-PYREGEM-TAB-1-scaled.jpg"
        },

        {
          id: 3,
          name: "Vitamin C",
          category: "Supplement",
          price: 90,
          image:
            "https://m.media-amazon.com/images/I/61Q-+KR3WcL._AC_UF894,1000_QL80_.jpg"
        },

        // REAL MEDICINES

        {
          id: 4,
          name: "Dolo 650",
          category: "Fever Tablet",
          price: 35,
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/5/420344701/PF/LS/HF/33400885/dolo-650-mg-paracetamol-tablet-500x500.jpeg"
        },

        {
          id: 5,
          name: "Azithromycin 500",
          category: "Antibiotic",
          price: 120,
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/9/449088584/IF/NG/TI/163113727/azithromycin-500-mg-tablet-500x500.jpg"
        },

        {
          id: 6,
          name: "Amoxicillin",
          category: "Capsule",
          price: 95,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tXj8SkHk006ZNLJA_h3LZddF9l7yfRJzHg&s"
        },

        {
          id: 7,
          name: "Cetirizine",
          category: "Allergy Tablet",
          price: 45,
          image:
            "https://5.imimg.com/data5/SELLER/Default/2025/6/517707907/WE/XR/WJ/15257790/10mg-cetirizine-hydrochloride-tablets.jpeg"
        },

        {
          id: 8,
          name: "ORS Powder",
          category: "Hydration",
          price: 25,
          image:
            "https://assets.truemeds.in/Images/ProductImage/TM-POER1-002179/ors-orange-flavour-cadila-powder-21.8gm_ors-orange-flavour-cadila-powder-218gm--TM-POER1-002179_6.png?width=320"
        },

        {
          id: 9,
          name: "Zincovit",
          category: "Supplement",
          price: 110,
          image:
            "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-044993/zincovit-tablet-15_zincovit-tablet-15--TM-TACR1-044993_1.png"
        },

        {
          id: 10,
          name: "Shelcal 500",
          category: "Calcium Tablet",
          price: 140,
          image:
            "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-036336/shelcal-500-tablet-15_shelcal-500-tablet-15--TM-TACR1-036336_1.png"
        },

        {
          id: 11,
          name: "Benadryl Syrup",
          category: "Cough Syrup",
          price: 90,
          image:
            "https://5.imimg.com/data5/SELLER/Default/2024/2/384398231/RG/WC/XS/37247731/benadryl-dr-kids-cough-syrup.jpg"
        },

        {
          id: 12,
          name: "Disprin",
          category: "Pain Relief",
          price: 30,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvpFxnyTcLQF92oim2_-VP8HpwcaNgUKPLhg&s"
        },

        {
          id: 13,
          name: "Digene",
          category: "Acidity",
          price: 55,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW6QWsYG3bVwv2QISQoSwMjpvJpJhWwJRAQ&s"
        },

        {
          id: 14,
          name: "Volini Spray",
          category: "Pain Relief",
          price: 210,
          image:
            "https://img.clevup.in/82900/1661090898099_SKU-1862_1.jpg?width=600&format=webp"
        },

        {
          id: 15,
          name: "Crocin Advance",
          category: "Fever Tablet",
          price: 42,
          image:
            "https://tiimg.tistatic.com/fp/1/007/557/crocin-advance-pain-relief-for-headache-with-15x1-packaging-459.jpg"
        },

        // AUTO GENERATE MANY MEDICINES

        
        {
          id:16,
          name:"Aspirin",
          category:"Tablet",
          price:120,
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXh1qkdvwChMPKX5cHolUNiqh0pKaPx-PXSg&s"
        },

        {
          id:17,
          name:"Ibuprofen",
          category:"Pain Relief",
          price:80,
          image:"https://5.imimg.com/data5/SELLER/Default/2023/7/325863554/WI/JM/SY/135658020/ibuprofen-tablets-ip-200-mg-.jpg"
        },

        {
          id:18,
          name:"Amoxiclav",
          category:"Antibiotic",
          price:220,
          image:"https://5.imimg.com/data5/SELLER/Default/2025/6/515929171/OZ/JR/ED/243247988/1000mg-co-amoxiclav-amoxicillin-tablets.jpeg"
        },

        {
          id:19,
          name:"Cetaphil Cream",
          category:"Skin Care",
          price:340,
          image:"https://media6.ppl-media.com/tr:h-235,w-235,c-at_max,dpr-2/static/img/product/409602/cetaphil-moisturising-cream-100-gm_9_display_1767766918_9d6b72b0.jpg"
        },

        {
          id:20,
          name:"Livogen",
          category:"Iron Supplement",
          price:160,
          image:"https://m.media-amazon.com/images/I/51vwitONSoL._AC_UF1000,1000_QL80_.jpg"
        },

        {
          id:21,
          name:"Pantocid",
          category:"Acidity",
          price:140,
          image:"https://icdn.tnmeds.com/cache/data/tnimages/9942-500x500.jpg"
        },

        {
          id:22,
          name:"Revital H",
          category:"Vitamin",
          price:320,
          image:"https://rukminim2.flixcart.com/image/480/640/xif0q/vitamin-supplement/o/h/b/60-daily-health-30-cap-special-supplements-revital-original-imahfbfhmujpbmp4.jpeg?q=90"
        },

        {
          id:23,
          name:"Sinarest New",
          category:"Cold Tablet",
          price:95,
          image:"https://m.media-amazon.com/images/I/61jOzTZhT1L._AC_UF1000,1000_QL80_.jpg"
        },

        {
          id:24,
          name:"Electral Powder",
          category:"Hydration",
          price:40,
          image:"https://assets.truemeds.in/Images/ProductImage/TM-POER1-003820/electral-z-powder-4.38gm_electral-z-powder-438gm--TM-POER1-003820_1.png"
        },

        {
          id:25,
          name:"Omnigel",
          category:"Pain Relief",
          price:210,
          image:"https://images.apollo247.in/pub/media/catalog/product/2/0/20_1.jpg"
        },

        {
        id:26,
        name:"Dolo 650",
        category:"Fever",
        price:35,
        image:"https://5.imimg.com/data5/SELLER/Default/2024/5/420344701/PF/LS/HF/33400885/dolo-650-mg-paracetamol-tablet-500x500.jpeg"
      },

      {
        id:27,
        name:"Azithromycin",
        category:"Antibiotic",
        price:180,
        image:"https://medihealthdirect.co.uk/wp-content/uploads/2025/01/Azithromycin-Doxycycline_1-1.jpg"
      },

      {
        id:28,
        name:"Shelcal 500",
        category:"Calcium",
        price:145,
        image:"https://assets.truemeds.in/Images/ProductImage/TM-TACR1-036336/shelcal-500-tablet-15_shelcal-500-tablet-15--TM-TACR1-036336_1.png"
      },

     {
      id:29,
      name:"Ascoril LS Syrup",
      category:"Cough Syrup",
      price:110,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiwAnBlplE2G9ubIgkGppB2s9Ol_UNvUjaRQ&s"
    },

    {
      id:30,
      name:"Dynapar Spray",
      category:"Pain Relief",
      price:240,
      image:"https://davai24.com/wp-content/uploads/2021/12/download-2021-12-11T140823.996.jpeg"
    },

      {
        id:31,
        name:"Gelusil",
        category:"Acidity",
        price:75,
        image:"https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg"
      },

     {
        id:32,
        name:"Supradyn Daily",
        category:"Multivitamin",
        price:190,
        image:"https://m.media-amazon.com/images/I/61PsaAj51BL.jpg"
      },

      {
        id:33,
        name:"Cetzine",
        category:"Allergy",
        price:60,
        image:"https://images.apollo247.in/pub/media/catalog/product/C/E/CET0423_1.jpg"
      },

      {
        id:34,
        name:"Monocef",
        category:"Antibiotic",
        price:260,
        image:"https://akmedicalhall.com/wp-content/uploads/2023/06/Monocef-O-1597641518-10017115-1.jpg"
      },

      {
        id:35,
        name:"ORS Electrolyte",
        category:"Hydration",
        price:40,
        image:"https://m.media-amazon.com/images/I/71KQRvw3lbL.jpg"
      },

      {
        id:36,
        name:"Gaviscon",
        category:"Acidity",
        price:165,
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe08jWFl-bUL5Kuqud7mILv9Wx193cj6j2Bg&s"
      },

      {
        id:37,
        name:"Thyronorm",
        category:"Thyroid",
        price:130,
        image:"https://medizzo.com/cdn/shop/products/Thyronorm100mcg.jpg?v=1747707964"
      },

      {
        id:38,
        name:"A to Z Gold",
        category:"Supplement",
        price:250,
        image:"https://assets.truemeds.in/Images/ProductImage/TM-CACR1-000016/a-to-z-gold-new-capsule-15-tm-cacr1-000016_1.png"
      },

      {
        id:39,
        name:"Moxikind CV",
        category:"Antibiotic",
        price:280,
        image:"https://cdn01.pharmeasy.in/dam/productsnowatermark/117556/moxikind-cv-bottle-of-10ml-oral-drops-box-front-1-1756902748-non-watermarked.jpg"
      },

      {
        id:40,
        name:"Betadine",
        category:"Antiseptic",
        price:95,
        image:"https://rizochem.com/wp-content/uploads/2023/05/Sachin-22.jpg"
      },

      {
        id:41,
        name:"Becosules",
        category:"Vitamin",
        price:155,
        image:"https://assets.truemeds.in/Images/ProductImage/TM-CACR1-006834/becosules-capsule-20-tm-cacr1-006834_1.png"
      },

      {
        id:42,
        name:"Allegra",
        category:"Allergy",
        price:175,
        image:"https://cdn01.pharmeasy.in/dam/products/005720/allegra-180mg-strip-of-10-tablets-1-1641534155.jpg"
      },

      {
        id:43,
        name:"Ecosprin",
        category:"Heart Care",
        price:85,
        image:"https://cdn01.pharmeasy.in/dam/productsnowatermark/064424/ecosprin-gold-10mg-strip-of-15-capsules-box-front-1-1756894428-non-watermarked.jpg"
      },

      {
        id:44,
        name:"TusQ Syrup",
        category:"Cough Syrup",
        price:125,
        image:"https://www.practostatic.com/practopedia-images/v3/res-750/tusq-x-plus-expt-100ml_e5dc123a-1a19-49f2-83df-5fb382a88a4c.JPG"
      },

      {
        id:45,
        name:"Dexorange",
        category:"Iron Tonic",
        price:145,
        image:"https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0f87429517dc400289696733b3b0efec.jpg"
      },

      {
        id:46,
        name:"Limcee",
        category:"Vitamin C",
        price:90,
        image:"https://m.media-amazon.com/images/I/71FcUpi5X4L.jpg"
      },

      {
        id:47,
        name:"Nicip Plus",
        category:"Pain Relief",
        price:110,
        image:"https://d1s24u4ln0wd0i.cloudfront.net/med/9173/NICIP%20PLUS%20TABLET%2010'S_1.webp"
      },

      {
        id:48,
        name:"Clavam",
        category:"Antibiotic",
        price:310,
        image:"https://zeelabpharmacy.com/uploads/other_brand_image/Zee6784a1e0cef23.jpeg"
      },

      {
        id:49,
        name:"Fast Relief Balm",
        category:"Pain Relief",
        price:70,
        image:"https://cdn01.pharmeasy.in/dam/products/I07472/fast-relife-50g-4-45ml-3.1-1663681504.jpg"
      },

      {
        id:50,
        name:"Lacto Calamine",
        category:"Skin Care",
        price:240,
        image:"https://m.media-amazon.com/images/I/51dX1oamOnL._AC_UF1000,1000_QL80_.jpg"
      },

      {
        id:51,
        name:"Crocin Advance",
        category:"Fever",
        price:45,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:52,
        name:"Otrivin Spray",
        category:"Cold Relief",
        price:130,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:53,
        name:"Pudin Hara",
        category:"Digestion",
        price:50,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:54,
        name:"Vicks Vaporub",
        category:"Cold Relief",
        price:85,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:55,
        name:"Moov Spray",
        category:"Pain Relief",
        price:190,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },
      {
        id:56,
        name:"Gelusil MPS",
        category:"Acidity",
        price:95,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:57,
        name:"Neurobion Forte",
        category:"Vitamin B",
        price:165,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:58,
        name:"Calpol 650",
        category:"Fever",
        price:38,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:59,
        name:"Meftal Spas",
        category:"Pain Relief",
        price:120,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:60,
        name:"Pan D",
        category:"Acidity",
        price:145,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:61,
        name:"Liv52 Syrup",
        category:"Liver Care",
        price:180,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:62,
        name:"Rantac",
        category:"Gastric",
        price:75,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:63,
        name:"Baidyanath Chyawanprash",
        category:"Immunity",
        price:320,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:64,
        name:"Sinarest AF",
        category:"Cold Relief",
        price:105,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:65,
        name:"Pantosec",
        category:"Acidity",
        price:135,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:66,
        name:"Dabur Honitus",
        category:"Cough Syrup",
        price:155,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:67,
        name:"Cetaphil Lotion",
        category:"Skin Care",
        price:420,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:68,
        name:"ENO Powder",
        category:"Digestion",
        price:45,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:69,
        name:"Flexon",
        category:"Pain Relief",
        price:90,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:70,
        name:"Azee 500",
        category:"Antibiotic",
        price:210,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:71,
        name:"Supradyn Daily",
        category:"Multivitamin",
        price:290,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:72,
        name:"Ascoril LS",
        category:"Cough Syrup",
        price:145,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:73,
        name:"Glucon D",
        category:"Energy Drink",
        price:180,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:74,
        name:"Mucaine Gel",
        category:"Acidity",
        price:110,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:75,
        name:"Voveran",
        category:"Pain Relief",
        price:125,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:76,
        name:"TusQ DX",
        category:"Cough Syrup",
        price:135,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:77,
        name:"Clindamycin",
        category:"Antibiotic",
        price:240,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:78,
        name:"Duphaston",
        category:"Hormonal",
        price:380,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:79,
        name:"Methylcobalamin",
        category:"Vitamin B12",
        price:260,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:80,
        name:"Cofsils Lozenges",
        category:"Throat Care",
        price:55,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:81,
        name:"Revital Women",
        category:"Supplement",
        price:340,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:82,
        name:"Nasoclear",
        category:"Nasal Spray",
        price:95,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:83,
        name:"Montair LC",
        category:"Allergy",
        price:185,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:84,
        name:"Hexidine Mouthwash",
        category:"Oral Care",
        price:160,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:85,
        name:"Burnol Cream",
        category:"First Aid",
        price:70,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },
      {
        id:86,
        name:"Dermi Cool Powder",
        category:"Skin Care",
        price:120,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:87,
        name:"Becosules Z",
        category:"Vitamin",
        price:175,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:88,
        name:"Aciloc 150",
        category:"Acidity",
        price:85,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:89,
        name:"T-Bact Ointment",
        category:"Skin Care",
        price:145,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:90,
        name:"Althrocin",
        category:"Antibiotic",
        price:230,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:91,
        name:"Neosporin Powder",
        category:"First Aid",
        price:95,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:92,
        name:"Pyrigesic",
        category:"Fever",
        price:48,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:93,
        name:"Combiflam",
        category:"Pain Relief",
        price:65,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:94,
        name:"D Cold Total",
        category:"Cold Relief",
        price:105,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:95,
        name:"Alkasol Syrup",
        category:"Urinary Care",
        price:155,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:96,
        name:"Baidyanath Ashwagandha",
        category:"Ayurvedic",
        price:310,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      },

      {
        id:97,
        name:"Candid Dusting Powder",
        category:"Skin Care",
        price:135,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png"
      },

      {
        id:98,
        name:"Meganeuron",
        category:"Nerve Care",
        price:275,
        image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png"
      },

      {
        id:99,
        name:"Oxalgin Nano Gel",
        category:"Pain Relief",
        price:190,
        image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png"
      },

      {
        id:100,
        name:"Soframycin Cream",
        category:"First Aid",
        price:115,
        image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
      }


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

  const ads=[

      {
      title:"Diabetes Care",
      subtitle:"Control sugar levels effectively",
      description:"Complete diabetic support medicines and health monitoring products.",
      offer:"Flat 30% OFF",
      benefits:[
      "Maintains blood sugar level",
      "Improves insulin support",
      "Reduces diabetic complications"
      ],
      causes:[
      "High sugar intake",
      "Obesity",
      "Family history"
      ],
      prevention:[
      "Daily exercise",
      "Healthy diet",
      "Regular monitoring"
      ],
      amount:"Starting ₹299",
      image:"https://cdn-icons-png.flaticon.com/512/2966/2966486.png",
      bg:"linear-gradient(135deg,#00c6ff,#0072ff)"
      },

      {
      title:"Heart Health",
      subtitle:"Care for your heart naturally",
      description:"Premium cardiovascular care medicines and BP support.",
      offer:"Buy 1 Get 1",
      benefits:[
      "Improves heart function",
      "Controls BP",
      "Supports blood circulation"
      ],
      causes:[
      "Smoking",
      "Stress",
      "High cholesterol"
      ],
      prevention:[
      "Low fat diet",
      "Exercise daily",
      "Avoid smoking"
      ],
      amount:"Starting ₹399",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
      bg:"linear-gradient(135deg,#ff758c,#ff7eb3)"
      },

      {
      title:"Skin Care",
      subtitle:"Healthy glowing skin",
      description:"Advanced dermatology products and skin nourishment.",
      offer:"Up To 50% OFF",
      benefits:[
      "Hydrates skin",
      "Reduces acne",
      "Improves skin texture"
      ],
      causes:[
      "Pollution",
      "Stress",
      "Poor hydration"
      ],
      prevention:[
      "Drink water",
      "Use sunscreen",
      "Healthy diet"
      ],
      amount:"Starting ₹199",
      image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png",
      bg:"linear-gradient(135deg,#43e97b,#38f9d7)"
      },

      {
      title:"Immunity Booster",
      subtitle:"Strengthen your immunity",
      description:"Vitamin-rich healthcare products.",
      offer:"25% OFF",
      benefits:[
      "Improves immunity",
      "Boosts energy",
      "Fights infections"
      ],
      causes:[
      "Weak nutrition",
      "Lack of sleep",
      "Stress"
      ],
      prevention:[
      "Healthy diet",
      "Sleep 8 hours",
      "Take supplements"
      ],
      amount:"Starting ₹249",
      image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
      bg:"linear-gradient(135deg,#fc4a1a,#f7b733)"
      },

      {
      title:"Joint Pain Relief",
      subtitle:"Move without pain",
      description:"Fast pain relief sprays and tablets.",
      offer:"40% OFF",
      benefits:[
      "Reduces pain",
      "Improves mobility",
      "Fast action"
      ],
      causes:[
      "Arthritis",
      "Injury",
      "Age"
      ],
      prevention:[
      "Regular exercise",
      "Healthy weight",
      "Stretching"
      ],
      amount:"Starting ₹179",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
      bg:"linear-gradient(135deg,#7f00ff,#e100ff)"
      },

      {
      title:"Women's Wellness",
      subtitle:"Complete care for women",
      description:"Health and nutrition support products.",
      offer:"30% OFF",
      benefits:[
      "Improves health",
      "Supports hormones",
      "Boosts energy"
      ],
      causes:[
      "Nutrition deficiency",
      "Stress",
      "Hormonal imbalance"
      ],
      prevention:[
      "Balanced diet",
      "Exercise",
      "Regular checkups"
      ],
      amount:"Starting ₹350",
      image:"https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      bg:"linear-gradient(135deg,#ff9a9e,#fad0c4)"
      },

      {
      title:"Men's Grooming",
      subtitle:"Look fresh everyday",
      description:"Premium grooming and skincare products.",
      offer:"Up To 56% OFF",
      benefits:[
      "Healthy skin",
      "Fresh appearance",
      "Hydration"
      ],
      causes:[
      "Dry skin",
      "Pollution",
      "Stress"
      ],
      prevention:[
      "Use moisturizer",
      "Healthy diet",
      "Drink water"
      ],
      amount:"Starting ₹149",
      image:"https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      bg:"linear-gradient(135deg,#141e30,#243b55)"
      },

      {
      title:"Cold & Flu Care",
      subtitle:"Fast symptom relief",
      description:"Cold, cough and fever medicines.",
      offer:"20% OFF",
      benefits:[
      "Reduces fever",
      "Clears congestion",
      "Quick relief"
      ],
      causes:[
      "Virus infection",
      "Weather changes",
      "Weak immunity"
      ],
      prevention:[
      "Wash hands",
      "Drink water",
      "Wear mask"
      ],
      amount:"Starting ₹99",
      image:"https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      bg:"linear-gradient(135deg,#36d1dc,#5b86e5)"
      },

      {
      title:"Digestive Health",
      subtitle:"Healthy stomach support",
      description:"Products for acidity and digestion.",
      offer:"35% OFF",
      benefits:[
      "Reduces acidity",
      "Improves digestion",
      "Relieves bloating"
      ],
      causes:[
      "Spicy food",
      "Stress",
      "Poor diet"
      ],
      prevention:[
      "Healthy food",
      "Drink water",
      "Avoid junk food"
      ],
      amount:"Starting ₹89",
      image:"https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      bg:"linear-gradient(135deg,#11998e,#38ef7d)"
      },

      {
      title:"Eye Care",
      subtitle:"Protect your vision",
      description:"Eye vitamins and protection products.",
      offer:"25% OFF",
      benefits:[
      "Improves vision",
      "Reduces strain",
      "Eye nourishment"
      ],
      causes:[
      "Screen exposure",
      "Aging",
      "Vitamin deficiency"
      ],
      prevention:[
      "20-20-20 rule",
      "Healthy diet",
      "Eye checkup"
      ],
      amount:"Starting ₹190",
      image:"https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      bg:"linear-gradient(135deg,#56ab2f,#a8e063)"
      },
      {
    title:"Kidney Care",
    subtitle:"Healthy kidney support",
    description:"Maintain kidney function and detox support.",
    offer:"20% OFF",
    benefits:["Improves kidney health","Supports filtration","Detox support"],
    causes:["High BP","Diabetes","Dehydration"],
    prevention:["Drink water","Healthy diet","Regular tests"],
    amount:"Starting ₹299",
    image:"https://cdn-icons-png.flaticon.com/512/3076/3076404.png",
    bg:"linear-gradient(135deg,#2193b0,#6dd5ed)"
    },

    {
    title:"Liver Care",
    subtitle:"Protect your liver",
    description:"Advanced liver wellness products.",
    offer:"35% OFF",
    benefits:["Detox support","Improves liver function","Boosts metabolism"],
    causes:["Alcohol","Fatty liver","Poor diet"],
    prevention:["Avoid alcohol","Exercise","Healthy food"],
    amount:"Starting ₹280",
    image:"https://cdn-icons-png.flaticon.com/512/2966/2966325.png",
    bg:"linear-gradient(135deg,#11998e,#38ef7d)"
    },

    {
    title:"Asthma Support",
    subtitle:"Breathe freely",
    description:"Respiratory medicines and inhaler care.",
    offer:"25% OFF",
    benefits:["Improves breathing","Reduces symptoms","Quick relief"],
    causes:["Dust","Allergy","Smoking"],
    prevention:["Avoid smoke","Use mask","Clean environment"],
    amount:"Starting ₹350",
    image:"https://cdn-icons-png.flaticon.com/512/4320/4320375.png",
    bg:"linear-gradient(135deg,#56ccf2,#2f80ed)"
    },

    {
    title:"Baby Care",
    subtitle:"Complete baby health",
    description:"Safe baby healthcare essentials.",
    offer:"40% OFF",
    benefits:["Gentle care","Safe products","Nutrition support"],
    causes:["Sensitive skin","Low immunity","Poor nutrition"],
    prevention:["Balanced diet","Vaccination","Hygiene"],
    amount:"Starting ₹199",
    image:"https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
    bg:"linear-gradient(135deg,#ffdde1,#ee9ca7)"
    },

    {
    title:"Elder Care",
    subtitle:"Care for seniors",
    description:"Complete elderly health solutions.",
    offer:"30% OFF",
    benefits:["Bone support","Heart support","Daily wellness"],
    causes:["Aging","Low activity","Weak immunity"],
    prevention:["Exercise","Regular checkups","Healthy food"],
    amount:"Starting ₹499",
    image:"https://cdn-icons-png.flaticon.com/512/921/921347.png",
    bg:"linear-gradient(135deg,#cfd9df,#e2ebf0)"
    },

    {
    title:"Bone Health",
    subtitle:"Strong bones",
    description:"Calcium and vitamin support.",
    offer:"Buy1Get1",
    benefits:["Improves strength","Calcium support","Bone growth"],
    causes:["Calcium deficiency","Age","Low nutrition"],
    prevention:["Milk","Exercise","Vitamin D"],
    amount:"Starting ₹179",
    image:"https://cdn-icons-png.flaticon.com/512/2920/2920329.png",
    bg:"linear-gradient(135deg,#667eea,#764ba2)"
    },

    {
    title:"Dental Care",
    subtitle:"Healthy smile",
    description:"Premium dental hygiene products.",
    offer:"50% OFF",
    benefits:["Healthy gums","Fresh breath","Strong teeth"],
    causes:["Sugar","Poor brushing","Smoking"],
    prevention:["Brush twice","Dental checkups","Avoid smoking"],
    amount:"Starting ₹99",
    image:"https://cdn-icons-png.flaticon.com/512/2966/2966487.png",
    bg:"linear-gradient(135deg,#36d1dc,#5b86e5)"
    },

    {
    title:"Hair Care",
    subtitle:"Healthy hair growth",
    description:"Hair nutrition and care products.",
    offer:"40% OFF",
    benefits:["Hair growth","Reduces hair fall","Healthy scalp"],
    causes:["Stress","Poor nutrition","Pollution"],
    prevention:["Healthy diet","Hair oil","Less stress"],
    amount:"Starting ₹199",
    image:"https://cdn-icons-png.flaticon.com/512/2785/2785846.png",
    bg:"linear-gradient(135deg,#f7971e,#ffd200)"
    },

    {
    title:"Sleep Care",
    subtitle:"Better sleep support",
    description:"Products for healthy sleep cycles.",
    offer:"20% OFF",
    benefits:["Better sleep","Stress relief","Relaxation"],
    causes:["Stress","Anxiety","Poor habits"],
    prevention:["Sleep routine","Avoid caffeine","Exercise"],
    amount:"Starting ₹250",
    image:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
    bg:"linear-gradient(135deg,#141e30,#243b55)"
    },

    {
    title:"Weight Management",
    subtitle:"Stay fit",
    description:"Weight loss and nutrition support.",
    offer:"35% OFF",
    benefits:["Burn calories","Boost metabolism","Healthy lifestyle"],
    causes:["Poor diet","No exercise","Stress"],
    prevention:["Exercise","Healthy meals","Hydration"],
    amount:"Starting ₹399",
    image:"https://cdn-icons-png.flaticon.com/512/2966/2966481.png",
    bg:"linear-gradient(135deg,#11998e,#38ef7d)"
    },

    {
    title:"Pregnancy Care",
    subtitle:"Mother & baby health",
    description:"Nutrition and wellness support.",
    offer:"30% OFF",
    benefits:["Healthy pregnancy","Baby support","Nutrition"],
    causes:["Deficiency","Stress","Hormonal changes"],
    prevention:["Healthy diet","Regular checkups","Exercise"],
    amount:"Starting ₹450",
    image:"https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
    bg:"linear-gradient(135deg,#ff9a9e,#fad0c4)"
    },

    {
    title:"Vitamin Care",
    subtitle:"Daily wellness",
    description:"Multivitamins for complete care.",
    offer:"25% OFF",
    benefits:["Boost energy","Improve immunity","Better health"],
    causes:["Poor diet","Stress","Deficiency"],
    prevention:["Balanced food","Exercise","Supplements"],
    amount:"Starting ₹199",
    image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
    bg:"linear-gradient(135deg,#f857a6,#ff5858)"
    },

    {
    title:"Blood Pressure Care",
    subtitle:"Control BP naturally",
    description:"Advanced BP care products.",
    offer:"40% OFF",
    benefits:["Controls BP","Heart support","Blood flow"],
    causes:["Salt intake","Stress","Obesity"],
    prevention:["Low salt","Exercise","Healthy lifestyle"],
    amount:"Starting ₹350",
    image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
    bg:"linear-gradient(135deg,#ff512f,#dd2476)"
    },

    {
    title:"Protein Supplements",
    subtitle:"Muscle support",
    description:"Daily protein nutrition products.",
    offer:"Up To 60% OFF",
    benefits:["Build muscles","Improve recovery","Boost energy"],
    causes:["Low protein","Poor diet","Heavy workouts"],
    prevention:["Balanced meals","Protein intake","Exercise"],
    amount:"Starting ₹599",
    image:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
    bg:"linear-gradient(135deg,#42275a,#734b6d)"
    },

    {
    title:"Ayurvedic Care",
    subtitle:"Natural healthcare",
    description:"Traditional herbal products.",
    offer:"50% OFF",
    benefits:["Natural healing","Less side effects","Wellness support"],
    causes:["Stress","Lifestyle","Weak immunity"],
    prevention:["Yoga","Healthy food","Natural care"],
    amount:"Starting ₹120",
    image:"https://cdn-icons-png.flaticon.com/512/2921/2921822.png",
    bg:"linear-gradient(135deg,#56ab2f,#a8e063)"
    },
    {
      title:"Thyroid Care",
      subtitle:"Balance thyroid health",
      description:"Advanced thyroid wellness support.",
      offer:"30% OFF",
      benefits:["Hormone balance","Energy support","Healthy metabolism"],
      causes:["Hormonal imbalance","Stress","Genetics"],
      prevention:["Healthy diet","Exercise","Regular tests"],
      amount:"Starting ₹320",
      image:"https://cdn-icons-png.flaticon.com/512/2966/2966325.png",
      bg:"linear-gradient(135deg,#3a7bd5,#00d2ff)"
      },

      {
      title:"Pain Relief",
      subtitle:"Fast pain recovery",
      description:"Pain relief sprays and tablets.",
      offer:"40% OFF",
      benefits:["Quick pain relief","Muscle support","Fast action"],
      causes:["Injury","Stress","Inflammation"],
      prevention:["Exercise","Stretching","Healthy posture"],
      amount:"Starting ₹149",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320337.png",
      bg:"linear-gradient(135deg,#ff512f,#f09819)"
      },

      {
      title:"Fever Care",
      subtitle:"Fight fever effectively",
      description:"Reliable fever relief medicines.",
      offer:"25% OFF",
      benefits:["Reduces fever","Quick recovery","Supports immunity"],
      causes:["Virus","Bacteria","Infection"],
      prevention:["Hydration","Rest","Hygiene"],
      amount:"Starting ₹89",
      image:"https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      bg:"linear-gradient(135deg,#fc4a1a,#f7b733)"
      },

      {
      title:"Women's Hygiene",
      subtitle:"Daily wellness care",
      description:"Complete feminine hygiene products.",
      offer:"50% OFF",
      benefits:["Freshness","Protection","Comfort"],
      causes:["Poor hygiene","Infection","Hormonal changes"],
      prevention:["Clean habits","Hydration","Proper care"],
      amount:"Starting ₹199",
      image:"https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
      bg:"linear-gradient(135deg,#ff758c,#ff7eb3)"
      },

      {
      title:"Men's Health",
      subtitle:"Complete men's care",
      description:"Healthcare and wellness support.",
      offer:"35% OFF",
      benefits:["Energy support","Muscle health","Daily wellness"],
      causes:["Stress","Poor diet","Lifestyle"],
      prevention:["Exercise","Healthy food","Sleep"],
      amount:"Starting ₹299",
      image:"https://cdn-icons-png.flaticon.com/512/6997/6997662.png",
      bg:"linear-gradient(135deg,#232526,#414345)"
      },

      {
      title:"Brain Health",
      subtitle:"Boost focus & memory",
      description:"Mental wellness and brain nutrition.",
      offer:"30% OFF",
      benefits:["Improves focus","Memory support","Brain health"],
      causes:["Stress","Poor sleep","Deficiency"],
      prevention:["Sleep","Exercise","Healthy food"],
      amount:"Starting ₹399",
      image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png",
      bg:"linear-gradient(135deg,#8e2de2,#4a00e0)"
      },

      {
      title:"Cholesterol Care",
      subtitle:"Healthy heart support",
      description:"Maintain healthy cholesterol levels.",
      offer:"Buy1Get1",
      benefits:["Heart support","Controls cholesterol","Blood flow"],
      causes:["Junk food","Obesity","Smoking"],
      prevention:["Low-fat diet","Exercise","Avoid smoking"],
      amount:"Starting ₹350",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320371.png",
      bg:"linear-gradient(135deg,#00b09b,#96c93d)"
      },

      {
      title:"Anti-Allergy",
      subtitle:"Relief from allergies",
      description:"Fast allergy symptom support.",
      offer:"20% OFF",
      benefits:["Relieves sneezing","Controls symptoms","Fast relief"],
      causes:["Dust","Pollen","Food allergy"],
      prevention:["Avoid triggers","Clean environment","Mask"],
      amount:"Starting ₹120",
      image:"https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      bg:"linear-gradient(135deg,#36d1dc,#5b86e5)"
      },

      {
      title:"Eye Protection",
      subtitle:"Protect your eyesight",
      description:"Eye wellness and vitamin support.",
      offer:"40% OFF",
      benefits:["Vision support","Reduces strain","Eye nutrition"],
      causes:["Screen usage","Vitamin deficiency","Age"],
      prevention:["Eye exercises","Healthy diet","Eye checkups"],
      amount:"Starting ₹199",
      image:"https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
      bg:"linear-gradient(135deg,#56ab2f,#a8e063)"
      },

      {
      title:"Stress Relief",
      subtitle:"Relax your mind",
      description:"Stress and anxiety support products.",
      offer:"35% OFF",
      benefits:["Calms mind","Improves mood","Relaxation"],
      causes:["Work pressure","Anxiety","Poor sleep"],
      prevention:["Meditation","Exercise","Rest"],
      amount:"Starting ₹250",
      image:"https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
      bg:"linear-gradient(135deg,#614385,#516395)"
      },

      {
      title:"Fitness Essentials",
      subtitle:"Stay fit everyday",
      description:"Health and fitness support products.",
      offer:"50% OFF",
      benefits:["Improves strength","Boosts energy","Healthy lifestyle"],
      causes:["Low activity","Poor diet","Stress"],
      prevention:["Workout","Healthy food","Hydration"],
      amount:"Starting ₹499",
      image:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      bg:"linear-gradient(135deg,#11998e,#38ef7d)"
      },

      {
      title:"Energy Booster",
      subtitle:"Power your day",
      description:"Boost daily energy naturally.",
      offer:"30% OFF",
      benefits:["Instant energy","Less fatigue","Active lifestyle"],
      causes:["Poor nutrition","Stress","Lack of sleep"],
      prevention:["Balanced diet","Sleep","Exercise"],
      amount:"Starting ₹179",
      image:"https://cdn-icons-png.flaticon.com/512/3050/3050158.png",
      bg:"linear-gradient(135deg,#ff9966,#ff5e62)"
      },

      {
      title:"Cough Care",
      subtitle:"Relief from cough",
      description:"Effective cough relief products.",
      offer:"20% OFF",
      benefits:["Quick relief","Soothes throat","Reduces irritation"],
      causes:["Cold","Virus","Allergy"],
      prevention:["Drink warm water","Avoid smoke","Rest"],
      amount:"Starting ₹99",
      image:"https://cdn-icons-png.flaticon.com/512/3209/3209265.png",
      bg:"linear-gradient(135deg,#3ca55c,#b5ac49)"
      },

      {
      title:"Digestive Wellness",
      subtitle:"Healthy digestion",
      description:"Improve digestion naturally.",
      offer:"25% OFF",
      benefits:["Better digestion","Less acidity","Healthy gut"],
      causes:["Junk food","Stress","Irregular eating"],
      prevention:["Fiber food","Hydration","Exercise"],
      amount:"Starting ₹129",
      image:"https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      bg:"linear-gradient(135deg,#11998e,#38ef7d)"
      },

      {
      title:"First Aid",
      subtitle:"Emergency essentials",
      description:"First aid kits and emergency support.",
      offer:"40% OFF",
      benefits:["Quick treatment","Emergency support","Daily safety"],
      causes:["Accidents","Cuts","Injuries"],
      prevention:["Safety measures","Careful handling","Preparedness"],
      amount:"Starting ₹249",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320375.png",
      bg:"linear-gradient(135deg,#ed213a,#93291e)"
      },

      {
      title:"Immunity Kids",
      subtitle:"Healthy growth for kids",
      description:"Daily wellness and nutrition support.",
      offer:"35% OFF",
      benefits:["Strong immunity","Growth support","Energy boost"],
      causes:["Poor nutrition","Low immunity","Weak health"],
      prevention:["Healthy food","Sleep","Exercise"],
      amount:"Starting ₹220",
      image:"https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
      bg:"linear-gradient(135deg,#ff9a9e,#fecfef)"
      },

      {
      title:"Migraine Relief",
      subtitle:"Headache support care",
      description:"Products for migraine support.",
      offer:"30% OFF",
      benefits:["Reduces discomfort","Relaxation support","Fast relief"],
      causes:["Stress","Sleep changes","Triggers"],
      prevention:["Rest","Hydration","Avoid triggers"],
      amount:"Starting ₹150",
      image:"https://cdn-icons-png.flaticon.com/512/2785/2785819.png",
      bg:"linear-gradient(135deg,#396afc,#2948ff)"
      },

      {
      title:"Sports Nutrition",
      subtitle:"Performance support",
      description:"Nutrition for active lifestyles.",
      offer:"50% OFF",
      benefits:["Muscle support","Energy boost","Recovery"],
      causes:["Heavy activity","Low protein","Stress"],
      prevention:["Protein intake","Exercise","Hydration"],
      amount:"Starting ₹699",
      image:"https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
      bg:"linear-gradient(135deg,#141e30,#243b55)"
      },

      {
      title:"Healthy Snacks",
      subtitle:"Nutritious daily snacks",
      description:"Healthy snack options for wellness.",
      offer:"Buy2Get1",
      benefits:["Energy","Healthy nutrition","Less junk food"],
      causes:["Poor eating habits","Stress eating","Busy schedules"],
      prevention:["Healthy snacks","Meal planning","Hydration"],
      amount:"Starting ₹99",
      image:"https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
      bg:"linear-gradient(135deg,#f7971e,#ffd200)"
      },

      {
      title:"Medical Devices",
      subtitle:"Smart health monitoring",
      description:"Essential medical monitoring devices.",
      offer:"Up To 45% OFF",
      benefits:["Health tracking","Easy monitoring","Accurate results"],
      causes:["Health conditions","Monitoring needs","Lifestyle"],
      prevention:["Regular checkups","Monitoring","Healthy habits"],
      amount:"Starting ₹999",
      image:"https://cdn-icons-png.flaticon.com/512/4320/4320375.png",
      bg:"linear-gradient(135deg,#00c6ff,#0072ff)"
      }


      ];

  // // SPLIT PRODUCTS INTO ROWS OF 5

  // const rows = [];

  // for (
  //   let i = 0;
  //   i < filteredProducts.length;
  //   i += 4
  // ) {

  //   rows.push(
  //     filteredProducts.slice(i, i + 4)
  //   );

  // }

  {/* PRODUCTS */}

<div className="px-4 md:px-8 lg:px-16 mt-14 pb-20">

  <h2 className="text-4xl font-bold mb-10">
    Top Medicines
  </h2>

  <div className="
    grid
    grid-cols-3
    md:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-4
  ">

    {filteredProducts.map((item,index)=>(

      <div
        key={item.id}
        className="w-full min-w-0 relative"
      >

        <ProductCard item={item}/>

        <label className="upload-overlay">

          📷 Upload

          <input
            type="file"
            accept="image/*"
            hidden
            onChange={(e)=>{

              if(e.target.files[0]){

                updateProductImage(
                  item.id,
                  e.target.files[0]
                );

              }

            }}
          />

        </label>

        {/* Ad after every 12 products */}
        {(index+1)%12===0 && (

          <div
            className="col-span-full mt-8"
          >

            <div
              className="ad-banner cursor-pointer"

              style={{
                background:
                ads[
                  Math.floor(index/12)
                  %
                  ads.length
                ].bg
              }}

              onClick={()=>
                setSelectedAd(
                  ads[
                    Math.floor(index/12)
                    %
                    ads.length
                  ]
                )
              }
            >

              <div className="ad-content">

                <div className="ad-left">

                  <h1>
                    {
                      ads[
                        Math.floor(index/12)
                        %
                        ads.length
                      ].title
                    }
                  </h1>

                  <p>
                    {
                      ads[
                        Math.floor(index/12)
                        %
                        ads.length
                      ].subtitle
                    }
                  </p>

                </div>

                <div className="ad-right">

                  <img
                    src={
                      ads[
                        Math.floor(index/12)
                        %
                        ads.length
                      ].image
                    }
                    alt=""
                  />

                </div>

              </div>

            </div>

          </div>

        )}

      </div>

    ))}

  </div>

</div>

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

           <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">

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

      {/* AD MODAL */}

        {selectedAd && (

        <div className="
        fixed
        inset-0
        z-50
        bg-black/70
        flex
        items-center
        justify-center
        p-4
        ">

        <div

        className="
        w-[950px]
        max-h-[90vh]
        overflow-y-auto
        rounded-[35px]
        p-8
        text-white
        relative
        shadow-2xl
        "

        style={{
        background:selectedAd.bg
        }}

        >

        {/* CLOSE BUTTON */}

        <button

        onClick={()=>
        setSelectedAd(null)
        }

        className="
        absolute
        top-4
        right-4
        w-12
        h-12
        rounded-full
        bg-white
        text-black
        font-bold
        text-xl
        "

        >

        ✕

        </button>


        <div className="flex gap-10">

        {/* LEFT SIDE */}

        <div className="flex-1">

        <h1 className="text-5xl font-black">

        {selectedAd.title}

        </h1>

        <p className="mt-3 text-xl">

        {selectedAd.subtitle}

        </p>

        <p className="mt-6 leading-8 text-lg">

        {selectedAd.description}

        </p>


        <div className="mt-6">

        <span className="
        bg-white
        text-black
        px-6
        py-3
        rounded-full
        font-bold
        ">

        {selectedAd.offer}

        </span>

        </div>


        <div className="
        mt-6
        bg-white/20
        backdrop-blur-md
        p-4
        rounded-2xl
        ">

        <h3 className="font-bold text-2xl">

        💰 Amount

        </h3>

        <p className="mt-2">

        {selectedAd.amount}

        </p>

        </div>


        {/* BENEFITS */}

        <div className="
        mt-6
        bg-white/20
        p-4
        rounded-2xl
        ">

        <h3 className="font-bold text-2xl">

        ✅ Benefits

        </h3>

        <ul className="mt-3 space-y-2">

        {selectedAd.benefits?.map(
        (item,index)=>(

        <li key={index}>

        • {item}

        </li>

        ))
        }

        </ul>

        </div>


        {/* CAUSES */}

        <div className="
        mt-6
        bg-white/20
        p-4
        rounded-2xl
        ">

        <h3 className="font-bold text-2xl">

        ⚠ Causes

        </h3>

        <ul className="mt-3 space-y-2">

        {selectedAd.causes?.map(
        (item,index)=>(

        <li key={index}>

        • {item}

        </li>

        ))
        }

        </ul>

        </div>


        {/* PREVENTION */}

        <div className="
        mt-6
        bg-white/20
        p-4
        rounded-2xl
        ">

        <h3 className="font-bold text-2xl">

        🛡 Prevention

        </h3>

        <ul className="mt-3 space-y-2">

        {selectedAd.prevention?.map(
        (item,index)=>(

        <li key={index}>

        • {item}

        </li>

        ))
        }

        </ul>

        </div>


        <button className="
        mt-8
        bg-black
        px-8
        py-4
        rounded-2xl
        font-bold
        text-lg
        ">

        Shop Now

        </button>

        </div>


        {/* RIGHT SIDE */}

        <div className="
        w-[300px]
        flex
        items-center
        justify-center
        ">

        <img

        src={selectedAd.image}

        alt=""

        className="
        w-[250px]
        drop-shadow-2xl
        hover:scale-110
        duration-300
        "

        />

        </div>

        </div>

        </div>

        </div>

        )}

    </div>

  );

}