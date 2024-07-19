import { useContext } from "react";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";
import { AppContexts } from "./Context/AppContext";
import {
  IoMdAdd,
  IoMdArrowForward,
  IoMdClose,
  IoMdRemove,
} from "react-icons/io";
const MyCarts = () => {
  const {
    numberOfCart,
    myCarts,
    increaseQuantity,
    decreaseQuantity,
    showMycartsHandler,
    showMycarts,
    deleteCartHandler,
    total,
  } = useContext(AppContexts);
  return (
    <div
      className={`${
        showMycarts ? "right-0" : "-right-full"
      } fixed  top-0 z-[100] bg-white drop-shadow-2xl  px-[1em] w-[100%]  md:w-[60%] lg:w-[40%] xl:w-[32%] h-screen `}
    >
      <div>
        <div className="flex justify-between items-center mt-[1em]">
          <p className="uppercase font-bold tracking-tight">
            Shopping bag ({numberOfCart})
          </p>
          <IoMdArrowForward
            className="font-bold text-[20px] cursor-pointer"
            onClick={showMycartsHandler}
          />
        </div>
        <div className="h-[75vh] overflow-y-auto mt-[16px]">
          {myCarts.map((cart) => (
            <div
              className="flex items-center gap-x-[] last:mb-[0em] mb-[2em] mx-auto w-[93%] sm:w-[90%]"
              key={cart.id}
            >
              <img
                src={cart.image}
                className="sm:min-w-[70px] sm:max-w-[70px] min-w-[60px] max-w-[60px]"
                alt={cart.title + "image"}
              />
              <div className="flex justify-between">
                <div className="">
                  <div className="flex justify-between items-center">
                    <p className="text-[14px] font-semibold uppercase mb-[0.5em] w-[250px] sm:w-[270px]">
                      {cart.title}
                    </p>
                    <IoMdClose
                      className="mb-[2em] float-right cursor-pointer"
                      onClick={() => deleteCartHandler(cart.id)}
                    />
                  </div>
                  <div className="flex justify-between">
                    <div className="flex gap-x-[1em] border">
                      <button
                        className="hover:bg-gray-200 px-2"
                        onClick={() => decreaseQuantity(cart.id)}
                      >
                        <BsDash />
                      </button>
                      <p>{cart.quantity}</p>
                      <button
                        className="hover:bg-gray-200 px-2"
                        onClick={() => increaseQuantity(cart.id)}
                      >
                        <BsPlus />
                      </button>
                    </div>
                    <p>${cart.price}</p>
                    <div className="">
                      <p>${cart.price * cart.quantity}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-[1.5em] mb-[0.5em]">
          <p className="font-semibold uppercase">Total: ${total}</p>
          <button className="bg-red-500 p-[8px] text-white">
            <BsTrash />
          </button>
        </div>
        <button className="w-full bg-neutral-900 text-white font-semibold py-[5px]">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default MyCarts;
