import { useState, useEffect } from "react";
import axios from "axios";

const fakeData = {
  restaurantName: "main",
  _id: "601ae91d264f601888190621",
  restaurantName: "main",
  restaurantMenu: [
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190622",
      title: "`double steakhouse`",
      description:
        "`The Double Steakhouse is the only burger for the real gourmets. With no fewer than two pieces of 100% Flame Grilled Beef.`",
      image: "/design-utils/temp/double-steakhouse.png",
      category: "beaf",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190623",
      title: "`double bacon`",
      description:
        "`Bacon, cheese, ketchup and mayonnaise on a flame grilled beef burger. With 2x beef it is also twice as delicious!`",
      image: "/design-utils/temp/double-bacon-burger.png",
      category: "beaf",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190624",
      title: "`plant-base whopper`",
      description:
        "`The WHOPPER® for citizens who love plants more. The plant-based WHOPPER® contains a vegetable hamburger and vegetable mayonnaise.`",
      image: "/design-utils/temp/plant-based-whopper.png",
      category: "beaf",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190625",
      title: "`hamburger`",
      description:
        "`First there was the burger. Then the King came. The Hamburger from BURGER KING® is “the real thing”`",
      image: "/design-utils/temp/hamburger.png",
      category: "beaf",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190626",
      title: "`cheese lover chicken`",
      description:
        "`Is the cheese and chicken combination your favorite? Go for the Cheese Lover Chicken. A freshly toasted and delicious choice.`",
      image: "/design-utils/temp/cheese-lover-chicken.png",
      category: "chicken",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190627",
      title: "`long chicken`",
      description:
        "`Long ago you could enjoy Chicken Burger for a short time. Until we came up with the Long Chicken; a sesame bun with a spicy chicken breast fillet.`",
      image: "/design-utils/temp/long-chicken.png",
      category: "chicken",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190628",
      title: "`crunchy chicken deluxe`",
      description:
        "`We have chicken and we have CHICKEN! The Crunchy Chicken Deluxe certainly belongs to the latter category.`",
      image: "/design-utils/temp/crunchy-chicken-deluxe.png",
      category: "chicken",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190629",
      title: "`crispy chicken`",
      description:
        "`Crunchy on the outside, soft on the inside. The Crispy Chicken has everything you would expect from a chicken burger.`",
      image: "/design-utils/temp/crispy-chicken.png",
      category: "chicken",
      type: "burger",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062a",
      title: "`BBQ mixed grill`",
      description:
        "`This barbecue mixed grill pizza has everything you want! Divine BBQ sauce, fresh mozzarella, onion and bell pepper.`",
      image: "/design-utils/temp/bbq-mixed-grill.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062b",
      title: "`Vegan Shawarma`",
      description:
        "`The Vegan Shawarma pizza is one especially for you as a vegetarian or vegan. There are no animal products in the pizza.`",
      image: "/design-utils/temp/vegan-shawarma.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062c",
      title: "`Hot Chicken`",
      description:
        "`The Hot Chicken pizza is for people who love chicken and spicy food. This delicious pizza is a real favorite of everyone.`",
      image: "/design-utils/temp/hot-chicken.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062d",
      title: "`hot thai chicken`",
      description:
        "`Anyone who loves Asian food has ordered Thai food. And those who love Thai, lucky enough to order the Hot Thai Chicken Pizza.`",
      image: "/design-utils/temp/hot-thai-chicken.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062e",
      title: "`Brooklyn Style`",
      description:
        "`Real American pizza: the Brooklyn Style pizza is a real American classic. The pizza is one of our toppers for a reason.`",
      image: "/design-utils/temp/brooklyn-style.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f60188819062f",
      title: "`Pepperoni Perfection`",
      description:
        "`The Pepperoni Perfection is a delicious variation on our successful Double Pepperoni pizza where everything revolves around super tasty pepperoni.`",
      image: "/design-utils/temp/pepperoni-perfection.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190630",
      title: "`New York`",
      description:
        "`The New York pizza is the perfect lunch or evening meal. The New York pizza is topped with red tomato sauce, ground beef and turkey ham.`",
      image: "/design-utils/temp/new-york.png",
      category: "other",
      type: "pizza",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190631",
      title: "`Caffee Americano`",
      description:
        "`Espresso shots topped with hot water create a light layer of crema culminating in this wonderfully rich cup with depth and nuance.`",
      image: "/design-utils/temp/paper-cup.png",
      category: "hot",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190632",
      title: "`Espresso`",
      description:
        "`Our smooth signature Espresso Roast with rich flavour and caramelly sweetness is at the very heart of everything we do.`",
      image: "/design-utils/temp/paper-cup.png",
      category: "hot",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190633",
      title: "`Hot Chocolate`",
      description:
        "`Steamed milk and mocha sauce topped with sweetened whipped cream and a chocolate-flavoured drizzle. A timeless classic made to sweeten your spirits.`",
      image: "/design-utils/temp/hot-chocolate.png",
      category: "hot",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190634",
      title: "`Green Tea`",
      description:
        "`Pure green tea is steamed with milk. A perfect hot companion day or night.`",
      image: "/design-utils/temp/green-tea.png",
      category: "hot",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190635",
      title: "`Iced Caffè Americano`",
      description:
        "`Espresso shots topped with cold water produce a light layer of crema, then served over ice. The result: a wonderfully rich cup with depth and nuance.`",
      image: "/design-utils/temp/paper-cup.png",
      category: "cold",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190636",
      title: "`Iced Espresso`",
      description:
        "`Our signature Espresso Roast over ice boasts rich, robust flavor. A recipe of perfection at the heart of handcrafted espresso we serve.`",
      image: "/design-utils/temp/paper-cup.png",
      category: "cold",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190637",
      title: "`Lemonade`",
      description:
        "`Awaken your taste buds with the zing of refreshing lemonade—this tangy, fresh sip puts a little zip in your step.`",
      image: "/design-utils/temp/lemonade.png",
      category: "cold",
      type: "drink",
    },
    {
      orderedTimes: 0,
      _id: "601ae91d264f601888190638",
      title: "`Iced Pineapple Matcha`",
      description:
        "`Our premium matcha green tea shaken with flavors of pineapple and ginger along with coconutmilk and ice for a delicious beverage to uplift your day.`",
      image: "/design-utils/temp/iced-pineapple-matcha.png",
      category: "cold",
      type: "drink",
    },
  ],
};

const useMenuData = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const activeTypeHandler = (typeTitle) => {
    if (activeType !== typeTitle) setActiveType(typeTitle);
  };

  const menuFetch = () => {
    let menuTypes = [];
    fakeData.restaurantMenu.map((item) => {
      if (!menuTypes.includes(item.type)) menuTypes.push(item.type);
    });

    let formattedMenu = {};
    menuTypes.map((type) => {
      let itemByType = [];
      fakeData.restaurantMenu.map((item) => {
        if (type === item.type) {
          itemByType.push(item);
        }
      });
      formattedMenu = {
        ...formattedMenu,
        [type]: itemByType,
      };
    });

    Object.keys(formattedMenu).map((type) => {
      let popularItems = formattedMenu[type]
        .sort((a, b) =>
          a.orderedTimes > b.orderedTimes
            ? -1
            : b.orderedTimes > a.orderedTimes
            ? 1
            : 0
        )
        .slice(0, 3);

      let itemCategories = ["popular"];
      formattedMenu[type].map((item) => {
        if (!itemCategories.includes(item.category)) {
          itemCategories.push(item.category);
        }
        return null;
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
    const formattedMenu = menuFetch();

    setActiveType(Object.keys(formattedMenu)[0]);
    setMenuData(formattedMenu);
  }, []);

  return { menuData, activeType, activeTypeHandler };
};

export default useMenuData;
