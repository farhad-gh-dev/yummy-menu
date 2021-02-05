import { useState } from "react";
import { v4 as uuid } from "uuid";
import useFormatData from "./hooks/useFormatData";

import ItemCard from "./ItemCard/ItemCard";

export default function CardsMenu(props) {
  const { menuData } = props;

  const { categories, popularItems } = useFormatData(menuData);
  const [activeCategory, setActiveCategory] = useState("popular");

  const activeCategoryHandler = (categoryTitle) => {
    setActiveCategory(null);
    setActiveCategory(categoryTitle);
  };

  if (menuData && popularItems)
    return (
      <div className="cards-menu h-100 d-flex flex-column">
        <div className="cards-categories">
          {categories.map((category) => {
            return (
              <div
                key={uuid()}
                className={`category${
                  activeCategory === category ? " active" : ""
                }`}
                onClick={() => activeCategoryHandler(category)}
              >
                {category}
              </div>
            );
          })}
        </div>
        <div className="cards-container">
          <div className="flex-fill d-inline-block">
            {activeCategory === "popular"
              ? popularItems.map((item) => {
                  return (
                    <ItemCard
                      key={uuid}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  );
                })
              : null}

            {activeCategory !== null
              ? menuData.map((item) => {
                  if (item.category === activeCategory) {
                    return (
                      <ItemCard
                        key={uuid}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                      />
                    );
                  }
                  return null;
                })
              : null}
          </div>
        </div>
      </div>
    );

  return <div className="loading">loading...</div>;
}
