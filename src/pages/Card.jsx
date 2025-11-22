import React, { useContext } from 'react'
import { productProvider } from '../contex/CardContex'


const Card = () => {
    let {cardProduct,setCardProduct} = useContext(productProvider)
    
    let totalPrice= cardProduct.reduce((prev,curr)=>{
      return prev + curr.price
    },0)
    let tax=0
     tax=Math.round((totalPrice*5)/100)

    let shoping = cardProduct.length
     

      let handleRemove=(deitem)=>{
       
        const botton=cardProduct.filter(function(item){
            return item!==deitem
            
        });
        setCardProduct(botton)
      };
   
    return (
        <div>
            <div className="grid lg:grid-cols-3">
                <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
                    <div className="flex gap-2 border-b border-gray-300 pb-4">
                        <h2 className="text-xl font-semibold text-slate-900 flex-1">
                            Shopping Cart
                        </h2>
                        <h4 className="text-base text-slate-900 font-medium">{shoping} Items</h4>
                    </div>
                    <table className="mt-6 w-full border-collapse divide-y divide-gray-300">
                        <thead className="whitespace-nowrap text-left">
                            <tr>
                                <th className="text-base text-slate-500 p-4 font-medium">
                                    Description
                                </th>
                                <th className="text-base text-slate-500 p-4 font-medium">
                                    Quantity
                                </th>
                                <th className="text-base text-slate-500 p-4 font-medium">Price</th>
                            </tr>
                        </thead>
                        <tbody className="whitespace-nowrap divide-y divide-gray-300">
                           {
                            cardProduct.map((item)=>(
                                 <tr>
                                <td className="p-4">
                                    <div className="flex items-center gap-4 w-max">
                                        <div className="w-24 h-24 shrink-0">
                                            <img
                                                src={item.image}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="text-base font-medium text-slate-900">
                                               {item.title}
                                            </h4>
                                            <button onClick={()=>handleRemove(item)}
                                                type="button"
                                                className="mt-3 font-medium text-red-500 text-sm cursor-pointer"
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div className="flex gap-2 items-center border border-gray-300 bg-white px-3 py-2 w-max rounded-full">
                                        <button
                                            type="button"
                                            className="border-0 outline-0 cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-2.5 h-2.5"
                                                viewBox="0 0 121.805 121.804"
                                            >
                                                <path
                                                    d="M7.308 68.211h107.188a7.309 7.309 0 0 0 7.309-7.31 7.308 7.308 0 0 0-7.309-7.309H7.308a7.31 7.31 0 0 0 0 14.619z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                        <span className="text-slate-900 text-sm font-semibold px-3">
                                            1
                                        </span>
                                        <button
                                            type="button"
                                            className="border-0 outline-0 cursor-pointer"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-2.5 h-2.5"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    d="M256 509.892c-19.058 0-34.5-15.442-34.5-34.5V36.608c0-19.058 15.442-34.5 34.5-34.5s34.5 15.442 34.5 34.5v438.784c0 19.058-15.442 34.5-34.5 34.5z"
                                                    data-original="#000000"
                                                />
                                                <path
                                                    d="M475.392 290.5H36.608c-19.058 0-34.5-15.442-34.5-34.5s15.442-34.5 34.5-34.5h438.784c19.058 0 34.5 15.442 34.5 34.5s-15.442 34.5-34.5 34.5z"
                                                    data-original="#000000"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </td>
                                <td className="p-4">
                                    <h4 className="text-base font-semibold text-slate-900">${item.price}</h4>
                                </td>
                            </tr>
                            ))
                           }
                        </tbody>
                    </table>
                </div>
                <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
                    <h2 className="text-xl font-semibold text-slate-900 border-b border-gray-300 pb-4">
                        Order Summary
                    </h2>
                    <ul className="text-slate-500 font-medium divide-y divide-gray-300 mt-6">
                        <li className="flex flex-wrap gap-4 text-base py-3">
                            Subtotal{" "}
                            <span className="ml-auto font-semibold text-slate-900">${totalPrice}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base py-3">
                            Shipping{" "}
                            <span className="ml-auto font-semibold text-slate-900">{shoping}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base py-3">
                            Tax{" "}
                            <span className="ml-auto font-semibold text-slate-900">${tax}</span>
                        </li>
                        <li className="flex flex-wrap gap-4 text-base py-3 font-semibold text-slate-900">
                            Total <span className="ml-auto">${totalPrice + tax}</span>
                        </li>
                    </ul>
                    <button
                        type="button"
                        className="mt-6 text-base font-medium px-4 py-2 tracking-wide w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Card
