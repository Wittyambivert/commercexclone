import { FeaturedProductsData } from "./constants";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";

export default function FeaturedProducts() {
  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[8rem]">
      <div className="title flex flex-col items-start sm:items-center justify-start sm:justify-between sm:flex-row mb-8">
        <h3 className="text-2xl mb-4 ">Featured Products</h3>
        <button className="py-2 border-b-2 border-b-gray-400">
          Browse all products
        </button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        cssMode={true}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        breakpoints={{
          480: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1020: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >
        {FeaturedProductsData.map((item, i) => (
          <SwiperSlide
            className="w-[100%] sm:w-[25%] shrink-0 relative"
            key={i}
          >
            <div className="flex justify-center items-center uppercase w-[9rem] h-[3rem] text-sm bg-white text-gray-400 rounded-full absolute top-8 left-8 drop-shadow-md">
              {item.category}
            </div>
            <div className="overflow-hidden rounded-[30px] md:rounded-[4rem]">
              <img src={item.imgSrc} />
            </div>
            <div className="titles mt-6">
              <h3 className="font-semibold text-lg">{item.productTitle}</h3>
              <p className="text-gray-400 mt-2">{item.description}</p>
              <p className="font-semibold text-sm mt-4">{item.price}</p>
            </div>
          </SwiperSlide>
        ))}

        <div className="absolute z-20 inset-0 flex items-center justify-between p-4">
          <div className="swiper-button-prev ">
            <div className="bg-gray-100 p-1 sm:p-3 rounded-full cursor-pointer">
              <MdChevronLeft size={40} className="text-gray-500" />
            </div>
          </div>
          <div className="swiper-button-next">
            <div className="bg-gray-100 p-1 sm:p-3 rounded-full  cursor-pointer">
              <MdChevronRight size={40} className="text-gray-500" />
            </div>
          </div>
        </div>
      </Swiper>
    </section>
  );
}
