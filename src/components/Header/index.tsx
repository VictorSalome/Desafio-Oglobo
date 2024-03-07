import { useState } from "react";
import ImgHeader from "../../assets/header-oglobo.svg";


export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <footer>
      <div className="bg-[#004861] flex h-16 items-center ">
        <div className="ml-4">
          <button
            className="text-white p-3"
            onClick={handleMenuClick}
            aria-label="Menu"
          >
            &#9776;
          </button>
          <div
            className={`${
              menuVisible ? "block" : "hidden"
            } absolute bg-white shadow-md p-2 rounded`}
          >
            <ul>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Opção 1
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Opção 2
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Opção 3
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white ml-12 w-40">
          <img src={ImgHeader} alt="header-logo" />
        </div>
      </div>
    </footer>
  );
};
