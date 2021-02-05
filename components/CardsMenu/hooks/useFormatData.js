import { useState, useEffect } from "react";

const useFormatData = (dataArray) => {
  //   const [categories, setCategories] = useState([]);
  //   const [popularItems, setPopularItems] = useState(null);

  let itemCategories = ["popular"];
  dataArray.map((item) => {
    if (!itemCategories.includes(item.category)) {
      itemCategories.push(item.category);
    }
    return null;
  });

  let popularItems = dataArray
    .sort((a, b) =>
      a.orderedTimes > b.orderedTimes
        ? -1
        : b.orderedTimes > a.orderedTimes
        ? 1
        : 0
    )
    .slice(0, 3);
  //   useEffect(() => {
  //     let itemCategories = ["popular"];
  //     dataArray.map((item) => {
  //       if (!itemCategories.includes(item.category)) {
  //         itemCategories.push(item.category);
  //       }
  //       return null;
  //     });
  //     setCategories(itemCategories);

  //     let popularItems = dataArray.sort((a, b) =>
  //       a.orderedTimes > b.orderedTimes
  //         ? -1
  //         : b.orderedTimes > a.orderedTimes
  //         ? 1
  //         : 0
  //     );
  //     setPopularItems(popularItems.slice(0, 3));
  //   }, []);

  return {
    categories: itemCategories,
    popularItems: popularItems,
  };
};

export default useFormatData;
