import { useNewsList } from "../../hooks/rest/news";
import {
  MainBrasilNewsCard,
  MainFooterNewsCard,
  MainMundoNewsCard,
  MainNewsCard,
  MainTopNewsCard,
} from "./components/CardsNews";

export const Content = () => {
  const { mainInfo } = useNewsList();
  const mainNews = mainInfo[0]?.data;
  const brasilNews = mainInfo[1]?.data;
  const mundoNews = mainInfo[2]?.data;

  console.log("asdasd", mainInfo);

  return (
    <>
      <section>
        <div className="md:flex md:justify-center ">
          {mainNews?.slice(0, 2).map((news) => {
            return (
              <div key={news.title} className="md:w-2/4 md:p-8">
                <MainNewsCard news={news} />
              </div>
            );
          })}
        </div>
        <div className="md:flex">
          {mainNews?.slice(2, 4).map((news) => {
            return (
              <div className="md:w-2/4 md:p-8 ">
                <MainTopNewsCard news={news} key={news.title} />
              </div>
            );
          })}
        </div>

        <div className="md:flex md:justify-center md:mt-10">
          {mainNews?.slice(4, 8).map((news) => {
            return <MainFooterNewsCard news={news} key={news.title} />;
          })}
        </div>

        <div className="md:flex md:mt-10">
          <h1 className="ml-4 text-[#004861] text-3xl font-bold ">BRASIL</h1>
          {brasilNews?.slice(0, 4).map((news) => {
            return (
              <div className="md:w-full">
                <MainBrasilNewsCard news={news} key={news.title} />
              </div>
            );
          })}
        </div>
        <div className="md:flex md:mt-10">
          <h1 className="ml-4 text-[#004861] text-3xl font-bold">MUNDO</h1>
          {mundoNews?.slice(0, 4).map((news) => {
            return (
              <div className="md:w-full">
                <MainMundoNewsCard news={news} key={news.title} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
