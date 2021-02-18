import Head from "next/head";
import axios from "axios";
import useThemeMode from "../hooks/useThemeMode";
import useAuth from "../hooks/useAuth";
import useMenuData from "../hooks/useMenuData";
import useOrderData from "../hooks/useOrderData";

import Navbar from "../components/navbar/Navbar";
import TypeMenu from "../components/TypeMenu/TypeMenu";
import CardsMenu from "../components/CardsMenu/CardsMenu";

export default function Home({ fetchedData }) {
  const { themeIsDark, themeModeHandler } = useThemeMode();
  // const { userIsLogged } = useAuth();
  const { menuData, activeType, activeTypeHandler } = useMenuData(fetchedData);
  const {
    orderData,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useOrderData();

  const logoutHandler = () => console.log("logged-out");

  if (true)
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

  return <div>loading...</div>;
}

export async function getServerSideProps() {
  const { data } = await axios.get(`http://localhost:8000/yummy-menu/main`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      fetchedData: data,
    },
  };
}
