import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const DropdownItem = ({ icon, text, bgShape }) => {
  return (
    <div className="dropdown-item d-flex align-items-center">
      <img
        src={bgShape}
        alt="item background"
        className="item-bg-shape w-100 h-100 p-absolute from-right"
      />
      <img src={icon} alt="user" className="item-icon" />
      <div className="item-text text-cap">{text}</div>
    </div>
  );
};

export default function Navbar(props) {
  const { LogoImageSrc, orderPage, ordersNumber } = props;

  const [dropdownIsOpen, setDropdownIsOpen] = useState(false);

  const handleDropdownStatus = () => {
    setDropdownIsOpen(!dropdownIsOpen);
  };

  return (
    <div className="navbar">
      <div className="left-side">
        <img src={LogoImageSrc} alt="yummy menu" />
      </div>
      <div className="right-side d-flex align-items-center">
        <Link href={orderPage}>
          <a className="shopping-card p-relative">
            <img src="/design-utils/shop-card.svg" alt="orders basket" />
            {ordersNumber ? (
              <div className="orders-number d-flex justify-content-center align-items-center p-absolute">
                <span>{ordersNumber}</span>
              </div>
            ) : null}
          </a>
        </Link>
        <div className="dropdown-menu p-relative">
          <button
            onClick={() => handleDropdownStatus()}
            className={`dropdown-button d-flex justify-content-center align-items-center${
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
            {/* <div className="dropdown-item d-flex align-items-center">
              <img
                src="/design-utils/navbar-dp-shape-3.svg"
                alt="item background"
                className="item-bg-shape w-100 h-100 p-absolute from-right"
              />
              <div className="item-text text-cap">theme mode</div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
