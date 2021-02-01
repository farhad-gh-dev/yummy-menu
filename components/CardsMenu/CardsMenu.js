import { useState } from "react";
import { v4 as uuid } from "uuid";

import ItemCard from "./ItemCard/ItemCard";

export default function CardsMenu(props) {
  const { menuData } = props;

  const [activeCategory, setActiveCategory] = useState("popular");

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
                key={uuid()}
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
                  key={uuid}
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
