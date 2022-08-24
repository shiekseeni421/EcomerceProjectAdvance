import React from "react";
import "../App.css";
import { UseShopingContext } from "../context/ShopingCartContext";
function StoreItems(props) {
  let { id, Name, Prize, ImgUrl } = props;
  const { getItemQnty, decrementCart, removeCart, onAdd } = UseShopingContext();
  let stockItem = getItemQnty(id);
  return (
    <>
      <div className="card  w-64 m-2">
        <img src={ImgUrl} className="object-cover w-full" alt="shopingImg" />
        <div className="flex-col items-center justify-center  p-2">
          <h5 className="ItemName">{Name}</h5>
          <p className="prize">Prize: ₹{Prize}</p>
        </div>
        <div className="button_container">
          {stockItem === 0 ? (
            <button
              className=" bg-blue-500 border-0 p-3 cursor-pointer mb-2 mt-2 text-white rounded-2"
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
                <button className="addButton" onClick={() => onAdd(id)}>
                  +
                </button>
                <span>{stockItem} Item to add</span>
                <button className="addButton" onClick={() => decrementCart(id)}>
                  -
                </button>
              </div>
              <button
                className="remove_button mx-48"
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
