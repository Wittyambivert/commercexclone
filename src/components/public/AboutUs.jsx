import about from "../../assets/images/about-us.jpg";

export default function AboutUs() {
  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[8rem] ">
      <div className="flex flex-col lg:flex-row items-center rounded-[30px] md:rounded-[4rem]  overflow-hidden bg-black text-white relative">
        <div className="left mt-10 md:mt-20 lg:mt-0 mb-10 lg:mb-0 px-10 lg:pl-28">
          <div className="titles">
            <div className="title text-lg sm:text-4xl font-semibold sm:font-normal mb-4">
              Why are we different
            </div>
            <div className="subtitle mb-6">
              Lorem ipsum dolor sit amet consectetur adipising elit arcu mollis
              tortor velit faciliss diam vel posuere
            </div>
          </div>
          <button className="w-full sm:w-40 h-16 text-black font-semibold bg-white rounded-full">
            About us
          </button>
        </div>

        <div className="right">
          <img src={about} className="" />
        </div>
      </div>
    </section>
  );
}
