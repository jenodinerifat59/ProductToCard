import React, { useContext } from "react";
import { productProvider } from "../contex/CardContex";

const Card = () => {
  let { cardProduct, setCardProduct } = useContext(productProvider);

  // Increase quantity
  const handleIncrease = (item) => {
    const updated = cardProduct.map((p) =>
      p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
    );
    setCardProduct(updated);
  };

  // Decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      // Remove item if quantity becomes zero
      const filtered = cardProduct.filter((p) => p.id !== item.id);
      return setCardProduct(filtered);
    }

    const updated = cardProduct.map((p) =>
      p.id === item.id ? { ...p, quantity: p.quantity - 1 } : p
    );
    setCardProduct(updated);
  };

  // Remove item fully
  const handleRemove = (deitem) => {
    const filtered = cardProduct.filter((item) => item.id !== deitem.id);
    setCardProduct(filtered);
  };

  // Calculate totals with quantity
  let totalPrice = cardProduct.reduce(
    (prev, curr) => prev + curr.price * curr.quantity,
    0
  );

  let tax = Math.round((totalPrice * 5) / 100);
  let shoping = cardProduct.length;

  return (
    <div>
      <div className="grid lg:grid-cols-3">
        {/* LEFT PART */}
        <div className="lg:col-span-2 p-6 bg-white overflow-x-auto">
          <div className="flex gap-2 border-b border-gray-300 pb-4">
            <h2 className="text-xl font-semibold text-slate-900 flex-1">
              Shopping Cart
            </h2>
            <h4 className="text-base text-slate-900 font-medium">
              {shoping} Items
            </h4>
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
                <th className="text-base text-slate-500 p-4 font-medium">
                  Price
                </th>
              </tr>
            </thead>

            <tbody className="whitespace-nowrap divide-y divide-gray-300">
              {cardProduct.map((item) => (
                <tr key={item.id}>
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

                        <button
                          onClick={() => handleRemove(item)}
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
                        onClick={() => handleDecrease(item)}
                        className="cursor-pointer"
                      >
                        -
                      </button>

                      <span className="text-slate-900 text-sm font-semibold px-3">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => handleIncrease(item)}
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-4">
                    <h4 className="text-base font-semibold text-slate-900">
                      ${item.price * item.quantity}
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* RIGHT PART */}
        <div className="bg-gray-50 p-6 lg:sticky lg:top-0 lg:h-screen">
          <h2 className="text-xl font-semibold text-slate-900 border-b border-gray-300 pb-4">
            Order Summary
          </h2>

          <ul className="text-slate-500 font-medium divide-y divide-gray-300 mt-6">
            <li className="flex flex-wrap gap-4 text-base py-3">
              Subtotal{" "}
              <span className="ml-auto font-semibold text-slate-900">
                ${totalPrice}
              </span>
            </li>

            <li className="flex flex-wrap gap-4 text-base py-3">
              Shipping{" "}
              <span className="ml-auto font-semibold text-slate-900">
                {shoping}
              </span>
            </li>

            <li className="flex flex-wrap gap-4 text-base py-3">
              Tax{" "}
              <span className="ml-auto font-semibold text-slate-900">
                ${tax}
              </span>
            </li>

            <li className="flex flex-wrap gap-4 text-base py-3 font-semibold text-slate-900">
              Total{" "}
              <span className="ml-auto">${totalPrice + tax}</span>
            </li>
          </ul>

          <button className="mt-6 text-base font-medium px-4 py-2 tracking-wide w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white cursor-pointer">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
