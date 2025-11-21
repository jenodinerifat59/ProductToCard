import React, { useEffect } from 'react'
import { useState } from 'react';

const Product = () => {
  let [products, setProducts] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setProducts(data));
  },[])
  console.log(products)
  return (
    <div className="p-4">
  <div className="lg:max-w-7xl md:max-w-4xl max-w-xl mx-auto">
    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-6 sm:mb-12">
      Food and Flavours
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
      {
        products.map((item)=>
          <div className="bg-slate-100 p-2 overflow-hidden">
        <div className="bg-white flex flex-col h-full">
          <a href="javascript:void(0)" className="block">
            <div className="aspect-[139/125] w-full">
              <img
                src={item.image}
                alt="food1"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <div className="p-4 text-center flex-1">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              {item.title}
            </h4>
            <h4 className="text-base sm:text-lg text-red-600 font-semibold mt-2">
              ${item.price} <strike className="text-slate-400 ml-1">${`${item.price+5} `}</strike>
            </h4>
          </div>
          <button
            type="button"
            className="bg-slate-700 font-medium cursor-pointer hover:bg-slate-800 text-white text-sm px-2 py-2 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
        )
      }
      
   <div className="bg-slate-100 p-2 overflow-hidden">
        <div className="bg-white flex flex-col h-full">
          <a href="javascript:void(0)" className="block">
            <div className="aspect-[139/125] w-full">
              <img
                src="https://readymadeui.com/images/food1.webp"
                alt="food1"
                className="w-full h-full object-cover"
              />
            </div>
          </a>
          <div className="p-4 text-center flex-1">
            <h4 className="text-sm sm:text-base font-semibold text-slate-900">
              Veg Burger with Salad
            </h4>
            <h4 className="text-base sm:text-lg text-red-600 font-semibold mt-2">
              $22 <strike className="text-slate-400 ml-1">$28</strike>
            </h4>
          </div>
          <button
            type="button"
            className="bg-slate-700 font-medium cursor-pointer hover:bg-slate-800 text-white text-sm px-2 py-2 w-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Product
