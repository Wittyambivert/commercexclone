import React from "react";

export default function SingleProduct({ imgSrc, category, title, price }) {
  return (
    <div className="flex flex-col">
      <div className="w-[full] rounded-[30px] md:rounded-[4rem] overflow-hidden">
        <img src={imgSrc} />
      </div>
      <div className="mt-6 md:mt-10">
        <div className="text-lg xl:text-xl tracking-wider text-gray-400 uppercase">
          {category}
        </div>
        <div className="mt-2 text-xl xl:text-2xl capitalize">{title}</div>
        <div className="mt-2 text-lg xl:text-xl uppercase">{price}</div>
      </div>
    </div>
  );
}
