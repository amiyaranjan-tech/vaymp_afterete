// // components/SearchResults.js
// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";

// const SearchResults = () => {
//   const { query } = useParams();
//   const { allProducts } = useSelector((state) => state.products);

//   const filteredProducts =
//     allProducts &&
//     allProducts.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase())
//     );

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProducts.map((product) => (
//             <div key={product._id} className="border p-4">
//               <img src={product.images[0]?.url} alt={product.name} />
//               <h2 className="text-lg font-bold">{product.name}</h2>
//               <p>{product.description}</p>
//               <p className="text-lg font-semibold">${product.price}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;

// components/SearchResults.js


// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";

// const SearchResults = () => {
//   const { query } = useParams();
//   const { allProducts } = useSelector((state) => state.products);



//   const filteredProducts =
//     allProducts &&
//     allProducts.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.occasion.toLowerCase().includes(query.toLowerCase()) ||
//       product.tags.toLowerCase().includes(query.toLowerCase())
//     );

// console.log("filteredProducts",filteredProducts)
 

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>
//       {filteredProducts.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {filteredProducts.map((product) => (
//             <div key={product._id} className="border rounded-lg p-4 shadow-md">
//                 <Link to={`/product/${product._id}`}>
//               <img src={product.images[0]?.url} alt="Product" className="w-full h-64 object-contain rounded mb-2" />
//               <div className="cursor-pointer absolute right-2 top-5">
//               <Link to={`/product/${product._id}`}>
//                       <button className="text-blue-500 hover:text-blue-700"><AiOutlineEye size={20} /></button>
//                     </Link>
//                     </div>
//                     </Link>
//                     <Link to={`/product/${product._id}`} className="text-lg font-semibold hover:text-blue-500">{product.name}</Link>
//                 <p className="text-gray-600">Price: Rs. {product.discountPrice}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default SearchResults;




// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { AiOutlineEye } from "react-icons/ai";
// import Header from "../components/Layout/Header";
// import Footer from "../components/Layout/Footer";
// import ProductCard from "../components/Route/ProductCard/ProductCard";
// import Loader from "../components/Layout/Loader";
// import styles from "../styles/styles";

// const SearchResults = () => {
//   const { query } = useParams();
//   console.log("query",query)
//   const { allProducts, isLoading } = useSelector((state) => state.products);



//   const filteredProducts =
//     allProducts &&
//     allProducts.filter((product) =>
//       product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.occasion.toLowerCase().includes(query.toLowerCase()) ||
//       product?.tags?.toLowerCase().includes(query.toLowerCase())
//     );

// console.log("filteredProducts",filteredProducts)
 

//   return (
//     <>
//     {isLoading ? (
//       <Loader />
//     ) : (
//       <div>
//         <Header activeHeading={3} />
//      {/* Render product cards based on filtered data */}
//      <div className={`${styles.section}`}>
//      <div className="pt-2 hidden md:block">
//          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 ">  
//            {/* this is default for big screens */}
//            {filteredProducts.map((i, index) => (
//              <ProductCard data={i} key={index} />
//            ))}
//          </div>
//          {filteredProducts.length === 0 ? (
//            <h1 className="text-center w-full pb-[100px] text-[20px]">
//              No products found!
//            </h1>
//          ) : null}
//        </div>
//        <div className="pt-2 md:hidden">
//        <div className="grid grid-cols-2 gap-[25px] md:grid-cols-2 md:gap-[25px] mb-12 "> 
//            {/* this is for small screens */}
//            {filteredProducts.map((i, index) => (
//              <ProductCard data={i} key={index} />
//            ))}
//          </div>
//          {filteredProducts.length === 0 ? (
//            <h1 className="text-center w-full pb-[100px] text-[20px]">
//              No products found!
//            </h1>
//          ) : null}
//        </div>
//      </div>
//      <Footer />
//    </div>
//       )}
//     </>
//   );
// };

// export default SearchResults;



import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProductCard from "../components/Route/ProductCard/ProductCard";
import Loader from "../components/Layout/Loader";
import styles from "../styles/styles";

const SearchResults = () => {
  const { query } = useParams();
  const { allProducts, isLoading } = useSelector((state) => state.products);

  const words = query.toLowerCase().split(" ");

  const filterByWord = (product, word) => {
    const productProperties = [
      product.category,
      product.subcategory,
      product.size,
      product.color,
      product.fabric,
      product.occasion,
      product.fit,
      product.gender,
      product.sleeveType,
      product.neckType,
      product.name,
      product.tags,
      product.brand,
    ];

    return productProperties.some(prop => prop && prop.toLowerCase().includes(word));
  };

  const filteredProducts = allProducts && allProducts.filter(product => 
    words.every(word => filterByWord(product, word))
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Header activeHeading={3} />
          {/* Render product cards based on filtered data */}
          <div className={`${styles.section}`}>
            <div className="pt-2 hidden md:block">
              <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12">
                {/* this is default for big screens */}
                {filteredProducts.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
              </div>
              {filteredProducts.length === 0 ? (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  No products found!
                </h1>
              ) : null}
            </div>
            <div className="pt-2 md:hidden">
              <div className="grid grid-cols-2 gap-[25px] md:grid-cols-2 md:gap-[25px] mb-12">
                {/* this is for small screens */}
                {filteredProducts.map((i, index) => (
                  <ProductCard data={i} key={index} />
                ))}
              </div>
              {filteredProducts.length === 0 ? (
                <h1 className="text-center w-full pb-[100px] text-[20px]">
                  No products found!
                </h1>
              ) : null}
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default SearchResults;


