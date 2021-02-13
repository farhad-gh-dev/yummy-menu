import Head from "next/head";
import useThemeMode from "../hooks/useThemeMode";
import useMenuData from "../hooks/useMenuData";
import useOrderData from "../hooks/useOrderData";

import Navbar from "../components/navbar/Navbar";
import TypeMenu from "../components/TypeMenu/TypeMenu";
import CardsMenu from "../components/CardsMenu/CardsMenu";

export default function Home() {
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const { menuData, activeType, activeTypeHandler } = useMenuData();
  const {
    orderData,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useOrderData();

  const logoutHandler = () => console.log("logged-out");

  return (
    <div className="menu-page d-flex flex-column">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        ordersNumber={orderData.items.length}
        logoutHandler={logoutHandler}
        themeIsDark={themeIsDark}
        themeModeHandler={themeModeHandler}
      />

      <div className="menu-container d-flex flex-column flex-fill">
        <div className="flex-fill">
          {menuData !== null ? (
            <CardsMenu
              menuData={menuData[`${activeType}`]}
              orderedItems={orderData.items}
              toggleItemInOrder={toggleItemInOrder}
              increaseItemQuantity={increaseItemQuantity}
              decreaseItemQuantity={decreaseItemQuantity}
            />
          ) : (
            <div>loading...</div>
          )}
        </div>
        <div>
          <TypeMenu
            activeType={activeType}
            activeTypeHandler={activeTypeHandler}
          />
        </div>
      </div>
    </div>
  );
}
