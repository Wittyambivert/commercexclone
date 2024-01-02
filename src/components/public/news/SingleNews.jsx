export function SingleNews({ imgSrc, title, description, tag, date }) {
  return (
    <div className="item w-full sm:w-[45%] mb-12 sm:mb-0">
      <div className="content border-b-2 border-gray-300 mb-12">
        <div className="img overflow-hidden rounded-[30px] md:rounded-[4rem] mb-8">
          <img src={imgSrc} />
        </div>
        <h4 className="article-title text-2xl md:text-4xl mb-4">{title}</h4>
        <p className="article-description mb-6 text-gray-500">{description}</p>
      </div>
      <div className="footer flex justify-between items-center">
        <button className="ideas w-[6rem] h-[3rem] rounded-full bg-black text-white">
          {tag}
        </button>
        <p className="date text-gray-500">{date}</p>
      </div>
    </div>
  );
}
