import { useState } from "react";

export default function ItemCards() {
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
    <div className="items-cards h-100 d-flex flex-column">
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
        <div className="h-100">
          <div className="item-card test-border-2">
            <img
              src="/design-utils/item-card-bg.png"
              alt="card background"
              className="background-shape"
            />
          </div>
          <div className="item-card test-border-2">
            <img
              src="/design-utils/item-card-bg.png"
              alt="card background"
              className="background-shape"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
