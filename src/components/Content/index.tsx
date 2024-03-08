// import ImgNotice1 from "../../assets/464x261-1.jpeg";
// import ImgNotice2 from "../../assets/464x261-2.jpeg";

// import ImgNotice3 from "../../assets/216x216-1.jpeg";
// import ImgNotice4 from "../../assets/216x216-2.jpeg";

// import ImgNotice5 from "../../assets/216x121-1.jpeg";
// import ImgNotice6 from "../../assets/216x121-2.jpeg";
// import ImgNotice7 from "../../assets/216x121-3.jpeg";
// import ImgNotice8 from "../../assets/216x121-4.jpeg";
// import ImgNotice9 from "../../assets/216x121-8.jpeg";
// import ImgNotice10 from "../../assets/216x121-12.jpeg";
// import ImgNotice11 from "../../assets/216x121-9.jpeg";
// import ImgNotice12 from "../../assets/216x121-11.jpeg";
// import ImgNotice13 from "../../assets/216x121-6.jpeg";
// import ImgNotice14 from "../../assets/216x121-10.jpeg";
// import ImgNotice15 from "../../assets/216x121-7.jpeg";
// import ImgNotice16 from "../../assets/216x121-5.jpeg";
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
        {mainNews?.slice(0, 2).map((news) => {
          return <MainNewsCard news={news} key={news.title} />;
        })}
        ,
        {mainNews?.slice(2, 4).map((news) => {
          return <MainTopNewsCard news={news} key={news.title} />;
        })}
        ,
        {mainNews?.slice(4, 8).map((news) => {
          return <MainFooterNewsCard news={news} key={news.title} />;
        })}
        ,<h1 className="ml-4 text-[#004861] text-3xl font-bold">BRASIL</h1>
        {brasilNews?.slice(0, 4).map((news) => {
          return <MainBrasilNewsCard news={news} key={news.title} />;
        })}
        ,<h1 className="ml-4 text-[#004861] text-3xl font-bold">MUNDO</h1>
        {mundoNews?.slice(0, 4).map((news) => {
          return <MainMundoNewsCard news={news} key={news.title} />;
        })}
      </section>
    </>
  );
};
