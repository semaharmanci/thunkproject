import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteItem, updateItem } from "../redux/actions/basketAction";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  
  
  const handleIncrease = () => {
    dispatch(updateItem(item.id, item.amount + 1));
  };
  const handleDecrease = () => {
    item.amount > 1 ? dispatch(updateItem(item.id, item.amount -1)) : dispatch(deleteItem(item.id));
  };

  return (
    <div className="flex gap-4 border mb-10 ronded-lg p-4">
      <img src={item.photo} className="w-[115px] rounded-lg" alt="" />
      <div className="w-full flex flex-col justify-between ">
        <h3 className="text-xl font-semibold text-red-500">{item.title}</h3>
        <p className="text-gray-500">{item.restaurantName}</p>
        <div className="flex justify-between items-center">
          <p className="text-semibold">{item.price} TL </p>
          <div className=" border text-xl rounded-lg">
            <button
              onClick={handleDecrease}
              className="p-3 text-red-500 hover:bg-red-100 rounded-lg transition"
            >
              {item.amount > 1 ? <FaMinus /> : <FaTrash />}
            </button>
            <span className="p-3 text-semibold text-gray-500">
              {item.amount}
            </span>
            <button
              onClick={handleIncrease}
              className="p-3 text-red-500 hover:bg-red-100 rounded-lg transition"
            >
              <FaPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
