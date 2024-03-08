import { useState } from "react";

export const MenuHamburguer = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuClick = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <div>
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
        } absolute bg-[#004861] shadow-md p-2 rounded`}
      >
        <ul>
          <li>
            <a href="#" className="text-white  hover:text-gray-600">
              Opção 1
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-600">
              Opção 2
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-gray-600">
              Opção 3
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
