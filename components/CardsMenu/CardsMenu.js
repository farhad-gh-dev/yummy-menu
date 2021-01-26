import { useState } from "react";

import ItemCard from "./ItemCard/ItemCard";

export default function CardsMenu() {
  const testData = [
    { title: "singles" },
    { title: `today's specials` },
    { title: "combo" },
    { title: "singles 2" },
    { title: `today's specials 2` },
    { title: "combo 2" },
  ];

  const [activeCategory, setActiveCategory] = useState(`today's specials`);

  const activeCategoryHandler = (categoryTitle) => {
    setActiveCategory(categoryTitle);
  };

  return (
    <div className="cards-menu h-100 d-flex flex-column">
      <div className="cards-categories">
        {testData.map((item) => {
          return (
            <div
              className={`category${
                activeCategory === item.title ? " active" : ""
              }`}
              onClick={() => activeCategoryHandler(item.title)}
            >
              {item.title}
            </div>
          );
        })}
      </div>
      <div className="cards-container">
        <div className="h-100 d-inline-block">
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
    </div>
  );
}
