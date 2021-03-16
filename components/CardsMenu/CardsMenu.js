import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import ItemCard from "./ItemCard/ItemCard";

export default function CardsMenu(props) {
  const {
    menuData,
    orderData,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = props;

  const [activeCategory, setActiveCategory] = useState("popular");

  const activeCategoryHandler = (categoryTitle) => {
    setActiveCategory(categoryTitle);
  };

  useEffect(() => {
    setActiveCategory("popular");
  }, [menuData]);

  if (menuData && Object.keys(menuData).includes(activeCategory))
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
              const itemOrderInfo = orderData
                ? orderData.items.find(
                    (orderedItem) => orderedItem._id === item._id
                  )
                : null;
              return (
                <ItemCard
                  key={uuid}
                  itemData={item}
                  toggleItemInOrder={toggleItemInOrder}
                  itemOrderInfo={itemOrderInfo}
                  increaseItemQuantity={increaseItemQuantity}
                  decreaseItemQuantity={decreaseItemQuantity}
                />
              );
            })}
          </div>
        </div>
      </div>
    );

  return <div className="loading">loading...</div>;
}
