import { useState } from "react";

const useOrderData = () => {
  const [orderData, setOrderData] = useState({
    restaurantName: "main",
    items: [],
  });

  const toggleItemInOrder = (itemId) => {
    const ItemIsInOrder = orderData.items.some((item) => item._id === itemId);

    if (!ItemIsInOrder) {
      setOrderData({
        ...orderData,
        items: [
          ...orderData.items,
          {
            _id: itemId,
            quantity: 1,
          },
        ],
      });
    } else {
      setOrderData({
        ...orderData,
        items: orderData.items.filter((item) => item._id !== itemId),
      });
    }
  };

  const increaseItemQuantity = (itemId) => {
    setOrderData({
      ...orderData,
      items: orderData.items.map((item) => {
        if (item._id === itemId) {
          item.quantity += 1;
        }
        return item;
      }),
    });
  };

  const decreaseItemQuantity = (itemId) => {
    setOrderData({
      ...orderData,
      items: orderData.items.map((item) => {
        if (item._id === itemId && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      }),
    });
  };

  return {
    orderData,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
  };
};

export default useOrderData;
