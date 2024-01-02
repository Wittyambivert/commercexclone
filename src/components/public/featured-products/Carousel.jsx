import { Swiper, SwiperSlide } from "swiper/react";

export default function Carousel({
  category,
  imgSrc,
  productTitle,
  description,
  price,
}) {
  return (
    <SwiperSlide>
      <div className="w-[100%] sm:w-[25%] shrink-0 relative ">
        <div className="flex justify-center items-center uppercase w-[9rem] h-[3rem] text-sm bg-white text-gray-400 rounded-full absolute top-8 left-8 drop-shadow-md">
          {category}
        </div>
        <div className="overflow-hidden rounded-[30px] md:rounded-[4rem]">
          <img src={imgSrc} />
        </div>
        <div className="titles mt-6">
          <h3 className="font-semibold text-lg">{productTitle}</h3>
          <p className="text-gray-400 mt-2">{description}</p>
          <p className="font-semibold text-sm mt-4">{price}</p>
        </div>
      </div>
    </SwiperSlide>
  );
}
