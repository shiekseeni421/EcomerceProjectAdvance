import React from "react";
import { UseShopingContext } from "../context/ShopingCartContext";
import "../tailwind.css";

export function CartItem({ id, quantity }) {
  let { removeCart } = UseShopingContext();
  let DataArray = [
    {
      id: 0,
      ItemName: "Color Block Snake Print Satchel",
      ProductPrize: 400,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_f9b13334143b4102bc6e743068a83dd0~mv2_d_3444_4568_s_4_2.webp",
    },
    {
      id: 1,
      ItemName: "Suede Trim Knit Fedora",
      ProductPrize: 600,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_c9e22cba4e534026a1a7be3b15a8a648~mv2_d_2629_3487_s_4_2.webp",
    },
    {
      id: 2,
      ItemName: "Green Suede Slides",
      ProductPrize: 550,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.jpg/v1/fill/w_281,h_375,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_fe4605fcf8b74a439ad933c7253d7779~mv2_d_2629_3487_s_4_2.webp",
    },
    {
      id: 3,
      ItemName: "Neutral Drop Post Earrings",
      ProductPrize: 699,
      imgUrl:
        "https://static.wixstatic.com/media/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.jpg/v1/fill/w_319,h_425,al_c,q_80,usm_0.66_1.00_0.01/ea71bb_4f91ddb36f2346c9870d41f83ee4c93e~mv2_d_2487_3298_s_4_2.webp",
    },
  ];

  const item = DataArray.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="flex justify-between items-center p-2">
      <div className="flex items-center">
        <img src={item.imgUrl} className="w-40 h-40 mx-5" alt="img" />
        <div>
          <div>
            Item Count
            {quantity > 0 && (
              <span className="text-sm text-gray-500">x{quantity}</span>
            )}
          </div>
          <div className="text-xs text-gray-500">Prize:{item.ProductPrize}</div>
          <div>Total: {item.ProductPrize * quantity}</div>
        </div>
      </div>
      <button
        className="text-white bg-red-700 h-10 w-10 rounded-full"
        onClick={() => removeCart(item.id)}
      >
        &times;
      </button>
    </div>
  );
}
