import React from "react";
import { restImgUrl } from "../utils/constants";
import { LuIndianRupee } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../utils/cartSlice";

const MenuItems = (props) => {

    const cart = useSelector((state) => state.cart)
    const dispatch = useDispatch();

  const { cards } = props;

  return (
    <>
      {cards.map((card) => (
        <>
          <div key={card.card.info.id} className="flex justify-between p-2 ">
            <div className="w-9/12 text-start">
              <p className="font-extrabold">{card.card.info.name}</p>
              <div className="flex items-center">
                <span>
                  <LuIndianRupee />
                </span>
                {card.card.info.price ? (
                  <p className="font-bold">{card.card.info.price / 100}</p>
                ) : (
                  <p className="font-bold">
                    {card.card.info.defaultPrice / 100}
                  </p>
                )}
              </div>
              <div>
                {card.card.info.ratings.aggregatedRating.rating ? (
                  <span className="font-bold flex items-center text-green-700">
                    <FaStar /> {card.card.info.ratings.aggregatedRating.rating}
                  </span>
                ) : (
                  ""
                )}
              </div>
              <p>{card.card.info.description}</p>
            </div>
            <div className=" w-3/12">
              <div>
                {card.card.info.imageId && (
                  <img
                    className="h-[100px] w-[100px] rounded"
                    src={restImgUrl + card.card.info.imageId}
                  />
                )}
              </div>
              <button onClick={() => dispatch(addToCart(card))} className="bg-white font-bold text-green-700 mr-2 rounded-lg shadow-lg p-2">
                Add +
              </button>
            </div>
          </div>
          <hr className="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        </>
      ))}
    </>
  );
};

export default MenuItems;
