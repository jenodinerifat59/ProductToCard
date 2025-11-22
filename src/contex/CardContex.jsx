import React, { createContext, useState } from 'react'

let productProvider = createContext()
const CardContex = ({children}) => {
    let [cardProduct , setCardProduct] = useState([])
    let paylode = {cardProduct , setCardProduct}
  return (
    <productProvider.Provider value={ paylode}>
      {children}
    </productProvider.Provider>
  )
}
export {productProvider}
export default CardContex
