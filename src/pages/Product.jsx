import React, { useContext, useEffect, useState } from 'react'
import { productProvider } from '../contex/CardContex';

const Product = () => {
  let [products, setProducts] = useState([])
  let [skeleton, setSkeleton] = useState(false)
  // State for controlling the success notification popup
  let [showNotification, setShowNotification] = useState(false);
  
  let { cardProduct, setCardProduct } = useContext(productProvider)

  useEffect(() => {
    setSkeleton(true)
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        setProducts(data);
        setSkeleton(false)
      })
      .catch(err => {
        console.error(err);
        setSkeleton(false);
      });
  }, [])

  let handelAddToCard = (newItem) => {
    const existingItem = cardProduct.find(item => item.id === newItem.id);

    if (existingItem) {
      // 1. Increment quantity
      const updatedCart = cardProduct.map(item =>
        item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCardProduct(updatedCart);
    } else {
      // 2. Add new item with quantity: 1
      setCardProduct([...cardProduct, { ...newItem, quantity: 1 }]);
    }

    // 3. Show the notification for 3 seconds
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Popup will disappear after 3000 milliseconds (3 seconds)
  }

  // console.log(cardProduct)

  if (skeleton) {
    // ... (Your existing skeleton JSX goes here)
    return (
      <div className='grid grid-cols-4 gap-3 mt-7 ml-2 '>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        <div role="status" className="max-w-sm border border-gray-300 rounded-lg p-4">
          <div className="animate-pulse w-full bg-gray-300 h-48 rounded-lg mb-5 flex justify-center items-center">
            <svg className="w-8 h-8 stroke-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.23520 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z" stroke="stroke-current" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </div>
          <div className=" w-full flex justify-between items-start animate-pulse">
            <div className="block">
              <h3 className="h-3 bg-gray-300 rounded-full w-48 mb-4" />
              <p className="h-2 bg-gray-300 rounded-full w-32 mb-2.5" />
            </div>
            <span className="h-2 bg-gray-300 rounded-full w-16 " />
          </div>
        </div>
        {/* ... Repeat skeleton cards ... */}
      </div>
    )
  }

  return (
    <div className="p-4 relative"> {/* Added relative positioning for the popup */}
      
      {/* --- Notification Popup --- */}
      {showNotification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white p-4 rounded-lg shadow-xl z-50 transition-opacity duration-300">
          <div className="flex items-center">
            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span className="font-semibold">Product added successfully! ✅</span>
          </div>
        </div>
      )}
      {/* --------------------------- */}
      
      <div className="lg:max-w-7xl md:max-w-4xl max-w-xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center mb-6 sm:mb-12">
          Choice items
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {
            products.map((item) =>
              <div key={item.id} className="bg-slate-100 p-2 overflow-hidden">
                <div className="bg-white flex flex-col h-full">
                  <a href="javascript:void(0)" className="block">
                    <div className="aspect-[139/125] w-full">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain p-4"
                      />
                    </div>
                  </a>
                  <div className="p-4 text-center flex-1">
                    <h4 className="text-sm sm:text-base font-semibold text-slate-900 line-clamp-2 min-h-[3rem]">
                      {item.title}
                    </h4>
                    <h4 className="text-base sm:text-lg text-red-600 font-semibold mt-2">
                      ${item.price.toFixed(2)} <strike className="text-slate-400 ml-1">${(item.price + 5).toFixed(2)}</strike>
                    </h4>
                  </div>
                  {/* The button calls handelAddToCard, which triggers the popup */}
                  <button onClick={() => { handelAddToCard(item) }}
                    type="button"
                    className="bg-slate-700 font-medium cursor-pointer hover:bg-slate-800 text-white text-sm px-2 py-2 w-full"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>

  )
}

export default Product