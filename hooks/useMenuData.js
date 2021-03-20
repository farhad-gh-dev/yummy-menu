import { useState, useEffect } from "react";

const restaurantMenuURI = `http://localhost:8000/yummy-menu/menu/main`;

const useMenuData = (fetchedData) => {
  const [menuData, setMenuData] = useState(null);
  const [activeType, setActiveType] = useState(null);
  const [menuDataError, setMenuDataError] = useState({
    text: "",
    type: "",
  });

  const errorHandler = (text, type) => {
    setMenuDataError({
      text,
      type,
    });

    setTimeout(() => {
      setMenuDataError({ text: "", type: "" });
    }, 3000);
  };

  const activeTypeHandler = (typeTitle) => {
    if (activeType !== typeTitle) setActiveType(typeTitle);
  };

  const dataFormatHandler = (dataToFormat) => {
    //GET ALL FOOD TYPES
    let allTypes = [];
    dataToFormat.restaurantMenu.map((item) => {
      if (!allTypes.includes(item.type)) allTypes.push(item.type);
    });

    let formattedMenu = {};
    //PUSH EACH ITEM TO RELATED TYPE ARRAY
    allTypes.map((type) => {
      let itemByType = [];
      dataToFormat.restaurantMenu.map((item) => {
        if (type === item.type) {
          itemByType.push(item);
        }
      });
      formattedMenu = {
        ...formattedMenu,
        [type]: itemByType,
      };
    });

    //FORMAT ITEMS IN EACH TYPE BY THEIR CATEGORY
    Object.keys(formattedMenu).map((type) => {
      //GET TOP 3 POPULAR ITEMS FOR EACH FOOD TYPE
      const itemsByType = [...formattedMenu[type], { orderedTimes: 0 }];
      //last value in itemsByType is a dummy data to prevent sort function to over right the original variables *a bug
      const popularItems = itemsByType
        .sort((a, b) => b.orderedTimes - a.orderedTimes)
        .slice(0, 3);

      console.log(formattedMenu[type]);
      console.log(popularItems);

      let itemCategories = ["popular"];
      //GET ALL CATEGORIES FOR THIS TYPE
      formattedMenu[type].map((item) => {
        if (!itemCategories.includes(item.category)) {
          itemCategories.push(item.category);
        }
        return;
      });

      let itemsInCategories = {};
      //PUSH EACH ITEM TO RELATED TYPE ARRAY
      itemCategories.map((categoryTitle) => {
        if (categoryTitle === "popular") {
          itemsInCategories = {
            ...itemsInCategories,
            [categoryTitle]: popularItems,
          };
        } else {
          itemsInCategories = {
            ...itemsInCategories,
            [categoryTitle]: formattedMenu[type].filter(
              (item) => categoryTitle === item.category
            ),
          };
        }
      });

      formattedMenu[type] = itemsInCategories;
    });

    return formattedMenu;
  };

  useEffect(() => {
    const test = {};
    if (
      !fetchedData ||
      (fetchedData.constructor === Object &&
        Object.keys(fetchedData).length === 0)
    ) {
      errorHandler("something went wrong", "fail");
      return;
    }

    try {
      const formattedData = dataFormatHandler(fetchedData);
      setActiveType(Object.keys(formattedData)[0]);
      setMenuData(formattedData);
    } catch {
      errorHandler("something went wrong", "fail");
    }
  }, []);

  return { menuData, activeType, menuDataError, activeTypeHandler };
};

export default useMenuData;
