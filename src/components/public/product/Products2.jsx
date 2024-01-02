import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import mouse from "../../../../src/assets/images/products/mouse.jpg";
import { ProductsData } from "./constants";
import SingleProduct from "./SingleProduct";

export function Products() {
  return (
    <section className="mt-36 mb-48 px-4 md:px-24 w-full">
      <div className="px-4 sm:px-34 md:px-4 bg-purple-400">
        <div className=" px-4 py-4 border-b-2 border-b-gray-400">
          <div className="flex justify-center md:justify-start gap-2 md:gap-8 text-md md:text-lg mb-8 bg-yellow-400">
            <Link>All</Link>
            <span>/</span>
            <Link>Technology</Link>
            <span>/</span>
            <Link>Gear</Link>
            <span>/</span>
            <Link className="bg-slate-300">Audio</Link>
          </div>
          <div className="flex justify-between md:justify-end items-center bg-green-500">
            <input
              className="border-gray-500 focus:outline-none  hover:border-gray-400"
              placeholder="Search for products"
            />
            <div className="border-gray-500">
              <MdSearch />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-16">
        {ProductsData.map((item, index) => (
          <SingleProduct
            key={index}
            imgSrc={item.imgSrc}
            category={item.category}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
}
