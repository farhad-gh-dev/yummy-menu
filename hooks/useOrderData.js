import { useEffect, useState } from "react";
import Router from "next/router";

const useOrderData = () => {
  const [orderData, setOrderData] = useState(null);
  const [submitMessage, setSubmitMessage] = useState({
    text: "",
    type: "",
  });

  const updateSessionStorage = (userOrder) => {
    sessionStorage.setItem("order", JSON.stringify(userOrder));
  };
  const clearSessionStorage = () => {
    sessionStorage.removeItem("order");
  };

  const toggleItemInOrder = (itemData) => {
    if (!orderData) {
      const firstOrder = {
        restaurantName: "main",
        items: [
          {
            _id: itemData._id,
            title: itemData.title,
            image: itemData.image,
            price: itemData.price,
            quantity: 1,
            discount: 10,
          },
        ],
      };
      updateSessionStorage(firstOrder);
      setOrderData(firstOrder);

      return;
    }

    const ItemIsInOrder = orderData.items.some(
      (item) => item._id === itemData._id
    );

    if (!ItemIsInOrder) {
      const updatedOrder = {
        ...orderData,
        items: [
          ...orderData.items,
          {
            _id: itemData._id,
            title: itemData.title,
            image: itemData.image,
            price: itemData.price,
            quantity: 1,
            discount: 10,
          },
        ],
      };
      updateSessionStorage(updatedOrder);
      setOrderData(updatedOrder);
    } else {
      if (orderData.items.length === 1) {
        clearSessionStorage();
        setOrderData(null);
        return;
      }
      const filteredOrder = {
        ...orderData,
        items: orderData.items.filter((item) => item._id !== itemData._id),
      };
      updateSessionStorage(filteredOrder);
      setOrderData(filteredOrder);
    }
  };

  const increaseItemQuantity = (itemId) => {
    const updatedOrder = {
      ...orderData,
      items: orderData.items.map((item) => {
        if (item._id === itemId) {
          item.quantity += 1;
        }
        return item;
      }),
    };
    updateSessionStorage(updatedOrder);
    setOrderData(updatedOrder);
  };

  const decreaseItemQuantity = (itemId) => {
    const updatedOrder = {
      ...orderData,
      items: orderData.items.map((item) => {
        if (item._id === itemId && item.quantity > 1) {
          item.quantity -= 1;
        }
        return item;
      }),
    };
    updateSessionStorage(updatedOrder);
    setOrderData(updatedOrder);
  };

  const submitOrder = () => {
    if (submitMessage.text) return;

    setSubmitMessage({
      text: "your order will be ready soon",
      type: "success",
    });
    setTimeout(() => {
      setSubmitMessage({
        text: "",
        type: "",
      });

      clearSessionStorage();
      setOrderData(null);
      Router.push("/");
    }, 3000);
  };

  useEffect(() => {
    const orderInSession = sessionStorage.getItem("order");
    if (orderInSession) setOrderData(JSON.parse(orderInSession));
  }, []);

  return {
    orderData,
    ordersNumber: orderData ? orderData.items.length : 0,
    submitMessage,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
    submitOrder,
  };
};

export default useOrderData;
