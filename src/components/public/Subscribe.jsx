export default function Subscribe() {
  return (
    <section className="mt-[8rem] px-4 md:px-24 mb-[8rem]">
      <div className="flex flex-col py-8 sm:py-[8rem] px-6 lg:px-[10rem] xl:px-[16rem] items-center rounded-[30px] md:rounded-[4rem] bg-[#f8f8f8]">
        <div className="title mb-6 font-medium text-2xl sm:text-[3rem] text-center leading-normal ">
          Subscribe to our email newsletter and get 10% off
        </div>
        <div className="email flex justify-between py-[1.2rem] w-[80%] border-b-2 border-gray-200 mb-8">
          <input
            className="focus:outline-none w-[70%] bg-transparent placeholder:text-gray-700"
            placeholder="Enter your email"
          ></input>
          <button className="subscribe w-[8rem] sm:w-[8rem] h-10 sm:h-14 text-sm bg-black text-white rounded-full">
            Subscribe
          </button>
        </div>
        <div className="text-center">
          Join the 10,000 users in our newsletter
        </div>
      </div>
    </section>
  );
}
