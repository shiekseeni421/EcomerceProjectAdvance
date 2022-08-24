import React from "react";
import { UseShopingContext } from "../context/ShopingCartContext";

function EnterPageTest() {
  const { cartQuantity } = UseShopingContext();
  return <div id="qnty_1">{cartQuantity}</div>;
}

export default EnterPageTest;
