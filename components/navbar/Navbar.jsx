import Image from "next/image";
import { useState } from "react";

const DropdownItem = ({ icon, text, bgShape }) => {
  return (
    <div
      className="dropdown-item d-flex align-items-center"
      style={{ backgroundImage: `url(${bgShape})` }}
    >
      <img src={icon} alt="user" className="item-icon" />
      <div className="item-text text-cap">{text}</div>
    </div>
  );
};

export default function Navbar({ logo_img_src }) {
  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownStatus = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <img src={logo_img_src} alt="yummy menu" />
      </div>
      <div className="right-side d-flex align-items-center">
        <div className="shopping-card">
          <img src="/design-utils/shop-card.svg" alt="orders basket" />
        </div>
        <div className="dropdown-menu p-relative">
          <button
            onClick={() => handleDropdownStatus()}
            className={`button d-flex justify-content-center align-items-center${
              dropdownIsOpen ? " active" : ""
            }`}
          >
            <div className="bar"></div>
            <div className="bar middle"></div>
            <div className="bar"></div>
          </button>
          <div
            className={`dropdown-items-container${
              dropdownIsOpen ? " show" : ""
            }`}
          >
            <DropdownItem
              text={"your profile"}
              icon={"/design-utils/user.svg"}
              bgShape={"/design-utils/navbar-dp-shape-1.svg"}
            />
            <DropdownItem
              text={"log out"}
              icon={"/design-utils/log-out.svg"}
              bgShape={"/design-utils/navbar-dp-shape-2.svg"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
