import ImgHeader from "../../../public/assets/header-oglobo.svg";
import { MenuHamburguer } from "../MenuHamburguer";

export const Header = () => {
  return (
    <header className="bg-[#004861] flex w-full md:h-20 ">
      <div className="md:flex md:items-center">
        <MenuHamburguer />
      </div>

      <div className="flex-grow flex justify-center items-center w-full ">
        <img
          src={ImgHeader}
          alt="header-logo"
          className="h-12 w-28 md:w-full"
        />
      </div>
      <div className="w-14"></div>
    </header>
  );
};
