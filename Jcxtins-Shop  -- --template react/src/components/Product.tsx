import { BsPlus, BsEye, BsCheck } from "react-icons/bs";
const Product = ({ item,addCartHandler,isAdded }) => {
  return (
    <div>
      <div className="border border-neutral-200 rounded-md flex justify-center items-center relative overflow-hidden group transition">
        <div className="w-[300px] h-[230px] flex justify-center items-center transition-all group-hover:scale-110 duration-300 cursor-pointer ease-in-out ">
          <img src={item.image} className="w-[100px]" alt="" />
        </div>
        <div className=" absolute top-10 -right-11 group-hover:right-3 drop-shadow-lg w-8 h-16 flex flex-col items-center justify-center bg-white opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-sky-400 active:bg-sky-200 w-8 h-8 flex items-center cursor-pointer justify-center"onClick={()=>addCartHandler(item)}>
            {isAdded?<BsCheck/>:<BsPlus className=" text-[18px] text-white cursor-pointer " />}
          </div>
          <div className=" w-8 h-8 flex items-center justify-center active:bg-sky-100">
            <BsEye className="text-[18px]  cursor-pointer" />
          </div>
        </div>
      </div>
      <div>
        <p className="capitalize font-semibold text-neutral-500 text-[14px] tracking-tight">
          {item.category}
        </p>
        <p className="font-semibold text-[15px] capitalize">{item.title}</p>
        <p className="text-[14px]">${item.price}</p>
      </div>
    </div>
  );
};

export default Product;
