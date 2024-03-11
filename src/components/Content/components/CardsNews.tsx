import { News } from "../../../hooks/rest/news/models";

interface MainNewsCardProps {
  news: News;
}

export const MainNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      <img src={`assets/${news.image}`} alt={news.image} />

      <div>
        <h3 className="ml-4 mt-2 text-[#004861] font-bold">
          {news.label.toLocaleUpperCase()}
        </h3>
        <h1 className="ml-4 text-2xl font-bold ">{news.title}</h1>
        <p className="ml-4 font-semibold text-lg mb-3 ">{news.description} </p>
      </div>
    </div>
  );
};

export const MainTopNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      <div className="border border-y-gray-200 mt-2 mb-2"></div>
      <div className="flex">
        <div className="flex flex-col items-end">
          <img src={`assets/${news.image}`} alt={news.image} className="p-3" />
        </div>
        <div>
          <h3 className="ml-4 text-[#004861] font-bold">
            {news.label.toLocaleUpperCase()}
          </h3>
          <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
          <p className="ml-4 font-semibold text-sm">{news.description}</p>
        </div>
      </div>
    </div>
  );
};

export const MainFooterNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      <div className="border border-y-gray-200 mt-2 mb-2"></div>
      <div className="flex ">
        <div className="">
          <img src={`assets/${news.image}`} alt={news.image} className=" p-3" />
          <p className=" flex ml-4 font-semibold text-sm">{news.description}</p>
        </div>

        <div>
          <h3 className="ml-4 text-[#004861] font-bold">
            {" "}
            {news.label.toLocaleUpperCase()}
          </h3>
          <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
        </div>
      </div>
    </div>
  );
};

export const MainBrasilNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      <div className="border  border-y-gray-200 mt-2 mb-2"></div>

      <div className="flex ">
        <div className="flex flex-col items-start w-full">
          <img
            src={`assets/${news.image}`}
            alt={news.image}
            className=" p-3 "
          />
          <p className=" flex ml-4 font-semibold text-base">
            {news.description}
          </p>
        </div>

        <div>
          <h3 className="ml-4 text-[#004861] font-bold">
            {news.label.toLocaleUpperCase()}
          </h3>
          <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
        </div>
      </div>
    </div>
  );
};

export const MainMundoNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      <div className="border  border-y-gray-200 mt-2 mb-2"></div>

      <div className="flex">
        <div className="flex flex-col items-start ">
          <img src={`assets/${news.image}`} alt={news.image} className=" p-3" />
          <p className=" flex ml-4 font-semibold text-base">
            {news.description}
          </p>
        </div>

        <div>
          <h3 className="ml-4 text-[#004861] font-bold">
            {" "}
            {news.label.toLocaleUpperCase()}
          </h3>
          <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
        </div>
      </div>
    </div>
  );
};
