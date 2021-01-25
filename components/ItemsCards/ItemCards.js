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
        <div className="h-100 d-inline-block">
          <div className="item-card p-relative">
            <img
              src="/design-utils/item-card-bg.png"
              alt="card background"
              className="background-shape"
            />
            <div className="card-content cover-parent">
              <div className="item-image">
                <img src="/design-utils/temp/burger.png" alt="item image" />
              </div>
              <div className="item-text secondary-font">
                <div className="title text-weight-bold">Steak Delight</div>
                <div className="description">
                  One advanced diverted domestic sex repeated bringing you old.
                  Possible procured her trifling laughter thoughts property she
                  met way.
                </div>
              </div>
              <button className="add-button text-cap">add item</button>
              <button className="favorite-button">
                <img src="/design-utils/favorite-icon.png" alt="favorite" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
