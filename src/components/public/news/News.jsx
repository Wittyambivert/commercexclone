import { SingleNews } from "./SingleNews";
import { NewsData } from "./constants";

export default function News() {
  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[4rem]">
      <div className="">
        <div className="title flex flex-col sm:flex-row justify-between  items-center mb-12">
          <h3 className="text-4xl mb-8 sm:mb-0">Our articles and news</h3>
          <button className="w-full sm:w-[16rem] h-[4rem] border-2 rounded-full">
            Browse all articles
          </button>
        </div>
        <div className="flex flex-col sm:flex-row justify-between">
          {NewsData.map((item, i) => (
            <SingleNews
              key={i}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
              tag={item.tag}
              date={item.date}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
