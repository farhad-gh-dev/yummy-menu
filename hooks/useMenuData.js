import { useState, useEffect } from "react";
import axios from "axios";

const fakeData = {
  burger: {
    singles: [
      {
        title: `hamburger`,
        description: `One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.`,
        image: "/design-utils/temp/hamburger.png",
      },
    ],
    "today's specials": [
      {
        title: `Steak Delight`,
        description: `One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way.`,
        image: "/design-utils/temp/burger.png",
      },
    ],
    combo: {},
  },
  drink: {
    "today's specials": [
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
