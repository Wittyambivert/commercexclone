import { FiTruck, FiCreditCard, FiCheckCircle } from "react-icons/fi";

export default function Features() {
  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[8rem] ">
      <div className="flex flex-col sm:flex-row items-start min-[400px]:items-center sm:items-start justify-between border-t-2 border-gray-200 py-12 ">
        <SingleFeatures
          icon={<FiTruck size={26} />}
          title="Free Shipping"
          price="Over $29.00 USD"
        />
        <SingleFeatures
          icon={<FiCreditCard size={26} />}
          title="Secure payment"
          price="Over $29.00 USD"
        />
        <SingleFeatures
          icon={<FiCheckCircle size={26} />}
          title="30 Days Guarantee"
          price="Over $29.00 USD"
        />
      </div>
    </section>
  );
}

export const SingleFeatures = ({ icon, title, price }) => {
  return (
    <div className="w-ful md:w-[30%] flex flex-row sm:flex-col md:flex-row gap-4 items-center ">
      <div className="flex justify-center items-center w-20 h-20 rounded-3xl mb-3 md:mb-0 bg-gray-100 ">
        {icon}
      </div>
      <div className="titles">
        <h3 className="mb-1 text-left sm:text-center md:text-left font-semibold">
          {title}
        </h3>
        <p className="text-left sm:text-center md:text-left text-gray-400">
          {price}
        </p>
      </div>
    </div>
  );
};
