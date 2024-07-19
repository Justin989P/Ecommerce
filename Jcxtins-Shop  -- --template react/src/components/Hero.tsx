import { useContext, useEffect, useState } from "react";
import { AppContexts } from "./Context/AppContext";

const Hero = () => {
  const { products, setProducts, heroImgs, setHeroImgs } =
    useContext(AppContexts);

  useEffect(() => {
    const heroImg = products.filter((product) => product.id === 17);
    setHeroImgs(heroImg);
  }, [products]);

  return (
    <div className="w-[80%] mx-auto text-neutral-700 flex justify-between items-center ">
      <div className="mt-[10em]">
        <div
          className="flex items-center  gap-x-2"
        >
          <span className="w-12 h-1.5 bg-yellow-400 rounded-md"></span>
          <h3 className="uppercase font-bold text-[16px] tracking-tighter">
            New Trend
          </h3>
        </div>
        <div className="text-[55px] leading-tight">
          <h1>
            AUTUMN SALE STYLISH{" "}
            <span className="block font-extrabold text-sky-500">WOMENS</span>
          </h1>
        </div>
        <div className="inline-block">
          <p className="font-bold">DISCOVER MORE</p>
          <div className="h-4 w-full rounded-md bg-orange-500"></div>
        </div>
      </div>
      <div className="mt-[7em] hidden lg:block">
        {heroImgs.map((heroImg) => (
          <div
            className="max-w-[400px] max-h-[520px]  bg-sky-800 p-[10px] "
            key={heroImg.id}
          >
            <img src={heroImg.image} className="h-[490px] w-[350px] " alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
