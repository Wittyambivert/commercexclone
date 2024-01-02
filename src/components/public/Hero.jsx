import heroImg from "../../assets/images/hero-img.jpg";

export const Hero = ({ onClick }) => {
  return (
    <>
      <section className="hero flex flex-col md:flex-row gap-2 justify-between items-center  p-4 md:pl-24 pt-4 md:pt-0 bg-[#f8f8f8]">
        <div className="left  flex flex-col justify-center ">
          <div className="title w-[100%] md:w-[80%]">
            <h1 className="mb-6 text-3xl md:text-5xl md:leading-snug font-normal">
              High-quality tech gadgets & accessories
            </h1>
            <h2 className="text-sm text-[#5b5b5b]">
              Sem sit amet adipiscing ullamcorper adipiscing adipiscing dole
              convallis tincidunt senectus enim blandit elit egestas.
            </h2>
          </div>
          <div className="buttons mt-9">
            <button
              className="w-[100%] sm:w-[12rem] h-[4rem] mr-4 bg-black text-white rounded-full "
              onClick={onClick}
            >
              Browse products
            </button>
            <button className="w-[100%] sm:w-[10rem] h-[4rem] border-2 mt-3 border-black rounded-full">
              About us
            </button>
          </div>
        </div>
        <div className="right relative flex justify-end  overflow-hidden mt-9 md:mt-0">
          {/* <div className="bg-[linear-gradient(90deg, #f8f8f8, hsla(0, 0%, 97.3%, 0))] w-[10%]"></div> */}
          <div className="bg-yellow w-[10rem] h-9"></div>
          <img src={heroImg} className="w-full object-cover" />
        </div>
      </section>
    </>
  );
};
