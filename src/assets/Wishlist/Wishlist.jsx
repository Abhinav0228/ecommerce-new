// import React from 'react'

// const Wishlist = ( {text, className, select} ) => {
//   let [wishlist, setWishlist] = useState([]);

//   const toggleWishlist = (product) => {
//   setWishlist((prev) => {
//     if (prev.find((item) => item.id === product.id)) {
//       // remove if already in wishlist
//       return prev.filter((item) => item.id !== product.id);
//     } else {
//       // add new product
//       return [...prev, product];
//     }
//   });
// };


//   return (
//     <>
//         <button className={`border border-amber-300 rounded-lg py-2 px-5 cursor-pointer ${className}`}>{text}</button>
//     </> 
//   )
// }

// export default Wishlist