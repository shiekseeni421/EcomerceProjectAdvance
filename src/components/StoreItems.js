import React from "react";
import "../tailwind.css";
import { UseShopingContext } from "../context/ShopingCartContext";
function StoreItems(props) {
  let { id, Name, Prize, ImgUrl } = props;
  const { getItemQnty, decrementCart, removeCart, onAdd } = UseShopingContext();
  let stockItem = getItemQnty(id);
  return (
    <>
      <div className="w-64 m-2 shadow-inner">
        <img src={ImgUrl} className="object-cover w-full" alt="shopingImg" />
        <div className="flex-col items-center justify-center  p-2">
          <h5 className="text-center">{Name}</h5>
          <p className="text-center">Prize: ₹{Prize}</p>
        </div>
        <div className="text-center">
          {stockItem === 0 ? (
            <button
              className=" bg-blue-500 border-0 p-3 cursor-pointer mb-2 mt-2 text-white rounded border-none"
              onClick={() => onAdd(id)}
            >
              + Add Cart
            </button>
          ) : (
            <div className="flex-col items-center">
              <div
                className="flex items-center justify-center "
                style={{ gap: "0.5rem" }}
              >
                <button
                  className="bg-indigo-700 px-3 rounded-full text-white border-none"
                  onClick={() => onAdd(id)}
                >
                  +
                </button>
                <span>{stockItem} Item to add</span>
                <button
                  className="bg-indigo-700 px-3 rounded-full text-white border-none"
                  onClick={() => decrementCart(id)}
                >
                  -
                </button>
              </div>
              <button
                className="bg-red-600 text-white px-5 py-2 rounded border-none"
                onClick={() => removeCart(id)}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default StoreItems;
