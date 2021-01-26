import { useState } from "react";

const useOrderData = () => {
  const [orderData, setOrderData] = useState([]);

  const toggleItemInOrder = () => {};

  return {
    orderData,
    toggleItemInOrder,
  };
};

export default useOrderData;
