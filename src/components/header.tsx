import React from "react";
import { IconContext } from "react-icons";
import { BiMenu } from "react-icons/bi";

interface HeaderProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, isSidebarOpen }) => {
  return (
    <>
      <header
        className="bg-dark d-flex justify-content-between align-items-center w-100 px-3 py-2"
        style={{ position: "fixed", top: 0, zIndex: 2 }}
      >
        <p className="text-white fs-5 m-0">Ryuta Sakmoto</p>
        <IconContext.Provider value={{ size: "2em" }}>
          <BiMenu
            color="white"
            style={{ transform: "translateY(-2px)" }}
            onClick={onMenuClick}
          />{" "}
          {/* メニューをクリックしたときに関数を実行 */}
        </IconContext.Provider>
      </header>
    </>
  );
};

export default Header;
