import React, {useEffect, useState} from 'react'
import getApiData from './index'
import Button from './Button'
import Filter from '../Filter'
import ViewDetails from './ViewDetails/ViewDetails'
import Wishlist from '../Wishlist/Wishlist'
const Products = () => {

  let [data, setData] = useState([])
  let [category, setCategory ] = useState("all")
  let [selectedProduct, setSelectedProduct] = useState(null)

  useEffect (()=> {
    getApiData().then((user) => setData(user.products));
  }, [])
  console.log(data);

  const filterData = category === "all"
  ? data 
  : data.filter( item => item.category === category )
  
  return (
    <div className="custom-container py-[30px]">
      <Filter category={category} onCategoryChange={setCategory} />
      {
        selectedProduct ? (
          <ViewDetails product={selectedProduct} onBack = {()=> setSelectedProduct(null)} />
        ) :
      
          filterData.length > 0 ? 
          <div className="grid grid-cols-4 gap-6">
           {
            filterData.slice(0, 24).map((items, i) => (
              <div key={i} className="rounded-xl p-5 bg-amber-50 shadow-md">
                <img src={items.images[0]} alt="" className='' />
                <Wishlist text={"hello12"} /> 
                {
                  items.availabilityStatus === "In Stock" ? 
                  <p className='text-green-500'>Available</p>
                  :
                  <p className='text-red-500'>Limited available</p>
                }
                <h1 className='text-2xl font-medium'>{items.title}</h1>
                <p className='text-lg'>${items.price}</p>
                <p id='category'>Category: {items.category} </p>
                <Button onClick={()=>setSelectedProduct (items)} text="View details" className="mt-4 cursor-pointer"/>
              </div>
             ) )
           }
          </div>
          :
          <p>no data</p>
      }
    </div>
  ) 
}

export default Products