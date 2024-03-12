import { News } from "../../../hooks/rest/news/models";

interface MainNewsCardProps {
  news: News;
}

export const MainNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div className="md:relative md:w-full">
      <img
        src={`assets/${news.image}`}
        alt={news.image}
        className="md:w-full md:h-auto"
      />

      <div className="md:absolute md:inset-0 md:flex md:flex-col md:justify-end md:text-white">
        <h3 className="ml-4 mt-2 text-[#004861] font-bold md:text-white">
          {news.label.toLocaleUpperCase()}
        </h3>
        <h1 className="ml-4 text-2xl font-bold md:text-white">{news.title}</h1>
        <p className="ml-4 font-semibold text-lg mb-3 md:text-white">
          {news.description}{" "}
        </p>
      </div>
    </div>
  );
};

export const MainTopNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div className="md:w-full md:p-5">
      <div className="border border-y-gray-200 mt-2 mb-2"></div>
      <div className="flex">
        <div className="flex flex-col items-end ">
          <img
            src={`assets/${news.image}`}
            alt={news.image}
            className="p-3 md:w-96 md:h-72"
          />
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
      <div className="flex">
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
      {/* Versão para dispositivos móveis */}
      <div className="md:hidden">
        {" "}
        {/* md:hidden indica que essa parte do código será exibida apenas em dispositivos menores que md */}
        <div className="border border-y-gray-200 mt-2 mb-2"></div>
        <div className="flex md:flex-col md:w-96">
          <div className="flex flex-col items-start w-full">
            <img
              src={`assets/${news.image}`}
              alt={news.image}
              className="p-3"
            />
            <p className="flex ml-4 font-semibold text-base md:w-60">
              {news.description}
            </p>
          </div>

          <div className="md:w-60">
            <h3 className="ml-4 text-[#004861] font-bold">
              {news.label.toLocaleUpperCase()}
            </h3>
            <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
          </div>
        </div>
      </div>

      {/* Versão para desktop */}
      <div className="hidden md:block">
        {" "}
        {/* hidden md:block indica que essa parte do código será exibida apenas em dispositivos md ou maiores */}
        <div className="border border-y-gray-200 mt-2 mb-2"></div>
        <div className="flex md:flex-col md:p-10 md:w-full md:ml-5">
          <img
            src={`assets/${news.image}`}
            alt={news.image}
            className="p-3 md:w-72"
          />
          <div className="md:w-60">
            <h3 className="ml-4 text-[#004861] font-bold">
              {news.label.toLocaleUpperCase()}
            </h3>
            <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
          </div>

          <p className="flex ml-4 font-semibold text-base">
            {news.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const MainMundoNewsCard = ({ news }: MainNewsCardProps) => {
  return (
    <div>
      {/* Versão para dispositivos móveis */}
      <div className="md:hidden">
        {/* md:hidden indica que essa parte do código será exibida apenas em dispositivos menores que md */}
        <div className="border border-y-gray-200 mt-2 mb-2"></div>
        <div className="flex md:flex-col md:w-96">
          <div className="flex flex-col items-start w-full">
            <img
              src={`assets/${news.image}`}
              alt={news.image}
              className="p-3"
            />
            <p className="flex ml-4 font-semibold text-base md:w-60">
              {news.description}
            </p>
          </div>

          <div className="md:w-60">
            <h3 className="ml-4 text-[#004861] font-bold">
              {news.label.toLocaleUpperCase()}
            </h3>
            <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
          </div>
        </div>
      </div>

      {/* Versão para desktop (md:block) */}
      <div className="hidden md:block">
        {/* hidden md:block indica que essa parte do código será exibida apenas em dispositivos md ou maiores */}
        <div className="border border-y-gray-200 mt-2 mb-2"></div>

        <div className="flex md:flex-col md:p-10 md:w-full md:ml-4">
          <img
            src={`assets/${news.image}`}
            alt={news.image}
            className="p-3 md:w-72 "
          />
          <div className="md:w-60">
            <h3 className="ml-4 text-[#004861] font-bold">
              {news.label.toLocaleUpperCase()}
            </h3>
            <h1 className="ml-4 text-xl font-bold">{news.title}</h1>
          </div>

          <p className="flex ml-4 font-semibold text-base">
            {news.description}
          </p>
        </div>
      </div>
    </div>
  );
};
