import { CategoryData } from "./constants";
import SingleCategory from "./SingleCategory";

export const Category = () => {
  return (
    <section className="mt-[8rem] px-4 md:px-24 w-full mb-[8rem] relative">
      <div className="category-container flex flex-wrap justify-center gap-6">
        {CategoryData.map((item, index) => (
          <SingleCategory
            key={index}
            title={item.title}
            description={item.description}
            link={item.link}
            imgSrc={item.imgSrc}
          />
        ))}
      </div>
    </section>
  );
};
