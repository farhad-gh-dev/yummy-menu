import { useState } from "react";

export default function TypeMenu() {
  const [activeItem, setActiveItem] = useState("burger");

  const testData = [
    { title: "burger", icon: "/design-utils/burger.png" },
    { title: "pizza", icon: "/design-utils/pizza.png" },
    { title: "drink", icon: "/design-utils/drink.png" },
  ];

  const activeItemHandler = (itemTitle) => {
    setActiveItem(itemTitle);
  };

  return (
    <div className="type-menu d-grid">
      {testData.map((item) => {
        return (
          <div
            key={item.title}
            className={`menu-item${activeItem === item.title ? " active" : ""}`}
          >
            <div className="item-title text-center text-cap">{item.title}</div>
            <div
              className="p-relative"
              onClick={() => activeItemHandler(item.title)}
            >
              <img
                src="/design-utils/type-menu-shape.svg"
                alt="background shape"
                className="bg-shape"
              />
              <img src={item.icon} alt="item shape" className="item-shape" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
