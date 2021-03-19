import { useState, useEffect } from "react";
import axios from "axios";

const restaurantMenuURI = `http://localhost:8000/yummy-menu/menu/main`;

const useMenuData = (fetchedData) => {
  const [menuData, setMenuData] = useState(null);
  const [activeType, setActiveType] = useState(null);

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
      const popularItems = itemsByType
        .sort((a, b) => b.orderedTimes - a.orderedTimes)
        .slice(0, 3);

      console.log(formattedMenu[type]);
      console.log(popularItems);

      let itemCategories = ["popular"];
      formattedMenu[type].map((item) => {
        if (!itemCategories.includes(item.category)) {
          itemCategories.push(item.category);
        }
        return;
      });

      let itemsInCategories = {};
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
    const formattedData = dataFormatHandler(fetchedData);

    setActiveType(Object.keys(formattedData)[0]);
    setMenuData(formattedData);
  }, []);

  return { menuData, activeType, activeTypeHandler };
};

export default useMenuData;
