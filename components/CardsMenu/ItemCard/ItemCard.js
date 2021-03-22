export default function ItemCard({
  itemData,
  itemOrderInfo,
  toggleItemInOrder = () => {},
  increaseItemQuantity = () => {},
  decreaseItemQuantity = () => {},
}) {
  if (!itemData) return null;
  return (
    <div className="item-card p-relative">
      <img
        src="/design-utils/item-card-bg.png"
        alt="card background"
        className="background-shape"
      />
      <div className="card-content cover-parent">
        <div className="item-image">
          <img src={itemData.image} alt="item image" />
        </div>
        <div className="item-text secondary-font">
          <div className="title text-weight-bold text-cap">
            {itemData.title}
          </div>
          <div className="description">{itemData.description}</div>
        </div>
        <button
          className="add-button text-cap"
          onClick={() => toggleItemInOrder(itemData)}
        >
          {itemOrderInfo ? "remove item" : "add item"}
        </button>
        {itemOrderInfo ? (
          <div className="item-counter text-center">
            <button
              className="increase"
              onClick={() => increaseItemQuantity(itemData._id)}
            >
              <img src="/design-utils/increase.svg" alt="increase" />
            </button>
            <div className="order-number text-weight-bold">
              {itemOrderInfo.quantity}
            </div>
            <button
              className="decrease"
              onClick={() => decreaseItemQuantity(itemData._id)}
            >
              <img src="/design-utils/decrease.svg" alt="decease" />
            </button>
          </div>
        ) : null}
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
