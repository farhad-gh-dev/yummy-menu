export default function ItemCard(props) {
  const { title, description } = props;

  return (
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
            Possible procured her trifling laughter thoughts property she met
            way.
          </div>
        </div>
        <button className="add-button text-cap">add item</button>
        <div className="item-counter text-center">
          <button className="increase" onClick={() => console.log("increased")}>
            <img src="/design-utils/increase.svg" alt="increase" />
          </button>
          <div className="order-number text-weight-bold">{0}</div>
          <button className="decrease" onClick={() => console.log("decreased")}>
            <img src="/design-utils/decrease.svg" alt="decease" />
          </button>
        </div>
        <button
          className="favorite-button"
          onClick={() => console.log("added to favorite")}
        >
          <img src="/design-utils/favorite-icon.png" alt="favorite" />
        </button>
      </div>
    </div>
  );
}
