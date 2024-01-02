import Carousel from "./Carousel";
import { FeaturedProductsData } from "./constants";
import { useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function FeaturedProducts() {
  const [current, setCurrent] = useState(0);
  const slides = FeaturedProductsData.length;

  // const prev = () =>
  //   setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));

  // const next = () =>
  //   setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));

  const next = () => {
    setCurrent((current) => (current + 1) % slides);
  };

  const prev = () => {
    setCurrent((current) => (current - 1 + slides) % slides);
  };

  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[8rem]">
      <div className="title flex flex-col items-start sm:items-center justify-start sm:justify-between sm:flex-row mb-8">
        <h3 className="text-2xl mb-4 ">Featured Products</h3>
        <button className="py-2 border-b-2 border-b-gray-400">
          Browse all products
        </button>
      </div>
      <div className="slider">
        <div className="overflow-hidden relative w-full  ">
          <div
            className=" vest flex gap-9 transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${current * 60}%)` }}
          >
            {FeaturedProductsData.map((item, i) => (
              <Carousel
                key={i}
                category={item.category}
                imgSrc={item.imgSrc}
                productTitle={item.productTitle}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <button
              onClick={prev}
              className="bg-gray-100 p-1 sm:p-3 rounded-full"
            >
              <MdChevronLeft size={40} />
            </button>
            <button
              onClick={next}
              className="bg-gray-100 p-1 sm:p-3 rounded-full"
            >
              <MdChevronRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
