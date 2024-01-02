import { Link } from "react-router-dom";

export default function SingleCategory({ title, description, link, imgSrc }) {
  return (
    <div className="relative w-[100%] lg:w-[48%] h-[32rem] rounded-[4rem] p-16 bg-[#f8f8f8] overflow-hidden">
      <div className="relative z-20">
        <h3 className="text-4xl mb-6">{title}</h3>
        <p className="w-[80%] mb-12">{description}</p>
      </div>
      <Link
        className=" relative z-20 underline underline-offset-8 font-semibold"
        href={link}
      >
        Explore category
      </Link>
      <div>
        <img className="z-10 absolute bottom-0 right-0 w-[80%]" src={imgSrc} />
      </div>
    </div>
  );
}
