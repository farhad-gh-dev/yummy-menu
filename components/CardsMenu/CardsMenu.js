import { useState, useEffect } from "react";

import ItemCard from "./ItemCard/ItemCard";

export default function CardsMenu(props) {
  const { menuData } = props;

  const [activeCategory, setActiveCategory] = useState("today's specials");

  const activeCategoryHandler = (categoryTitle) => {
    setActiveCategory(categoryTitle);
  };

  if (menuData)
    return (
      <div className="cards-menu h-100 d-flex flex-column">
        <div className="cards-categories">
          {Object.keys(menuData).map((categoryTitle) => {
            return (
              <div
                key={categoryTitle}
                className={`category${
                  activeCategory === categoryTitle ? " active" : ""
                }`}
                onClick={() => activeCategoryHandler(categoryTitle)}
              >
                {categoryTitle}
              </div>
            );
          })}
        </div>
        <div className="cards-container">
          <div className="flex-fill d-inline-block">
            {menuData[activeCategory].map((item) => {
              return (
                <ItemCard
                  key={item.title}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </div>
        </div>
      </div>
    );

  return <div className="loading">loading...</div>;
}
