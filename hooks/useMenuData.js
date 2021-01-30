import { useState, useEffect } from "react";
import axios from "axios";

const fakeData = {
  burger: {
    popular: [
      {
        title: `hamburger`,
        description: `First there was the burger. Then the King came. The Hamburger from BURGER KING® is “the real thing”`,
        image: "/design-utils/temp/hamburger.png",
      },
      {
        title: `double steakhouse`,
        description: `The Double Steakhouse is the only burger for the real gourmets. With no fewer than two pieces of 100% Flame Grilled Beef.`,
        image: "/design-utils/temp/double-steakhouse.png",
      },
      {
        title: `cheese lover chicken`,
        description: `Is the cheese and chicken combination your favorite? Go for the Cheese Lover Chicken. A freshly toasted and delicious choice.`,
        image: "/design-utils/temp/cheese-lover-chicken.png",
      },
    ],
    beaf: [
      {
        title: `double steakhouse`,
        description: `The Double Steakhouse is the only burger for the real gourmets. With no fewer than two pieces of 100% Flame Grilled Beef.`,
        image: "/design-utils/temp/double-steakhouse.png",
      },
      {
        title: `double bacon`,
        description: `Bacon, cheese, ketchup and mayonnaise on a flame grilled beef burger. With 2x beef it is also twice as delicious!`,
        image: "/design-utils/temp/double-bacon-burger.png",
      },
      {
        title: `plant-base whopper`,
        description: `The WHOPPER® for citizens who love plants more. The plant-based WHOPPER® contains a vegetable hamburger and vegetable mayonnaise.`,
        image: "/design-utils/temp/plant-based-whopper.png",
      },
      {
        title: `hamburger`,
        description: `First there was the burger. Then the King came. The Hamburger from BURGER KING® is “the real thing”`,
        image: "/design-utils/temp/hamburger.png",
      },
    ],
    chicken: [
      {
        title: `cheese lover chicken`,
        description: `Is the cheese and chicken combination your favorite? Go for the Cheese Lover Chicken. A freshly toasted and delicious choice.`,
        image: "/design-utils/temp/cheese-lover-chicken.png",
      },
      {
        title: `long chicken`,
        description: `Long ago you could enjoy Chicken Burger for a short time. Until we came up with the Long Chicken; a sesame bun with a spicy chicken breast fillet.`,
        image: "/design-utils/temp/long-chicken.png",
      },
      {
        title: `crunchy chicken deluxe`,
        description: `We have chicken and we have CHICKEN! The Crunchy Chicken Deluxe certainly belongs to the latter category.`,
        image: "/design-utils/temp/crunchy-chicken-deluxe.png",
      },
      {
        title: `crispy chicken`,
        description: `Crunchy on the outside, soft on the inside. The Crispy Chicken has everything you would expect from a chicken burger.`,
        image: "/design-utils/temp/crispy-chicken.png",
      },
    ],
  },
  drink: {
    "today's specials": [
      {
        title: `coca cola`,
        description: `One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.`,
        image: "/design-utils/temp/drink1.png",
      },
    ],
    popular: [
      {
        title: `coca cola`,
        description: `One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.`,
        image: "/design-utils/temp/drink1.png",
      },
    ],
  },
};

const useMenuData = () => {
  const [menuData, setMenuData] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const activeTypeHandler = (typeTitle) => {
    setActiveType(typeTitle);
  };

  const menuDataFetch = async () => {
    const { data } = await axios(
      "https://run.mocky.io/v3/9161b65e-c571-46f8-886c-f1c61cfe30b7"
    );

    return data;
  };

  useEffect(() => {
    setTimeout(() => {
      setActiveType(Object.keys(fakeData)[0]);
      setMenuData(fakeData);

      const fetchHolder = async () => {
        const data = await menuDataFetch();
        console.log(data);
      };
      fetchHolder();
    }, 1000);
  }, []);

  return { menuData, activeType, activeTypeHandler };
};

export default useMenuData;
