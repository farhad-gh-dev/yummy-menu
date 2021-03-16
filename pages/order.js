import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";
import useLogOut from "../hooks/useLogOut";
import useOrderData from "../hooks/useOrderData";
import Link from "next/link";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";
import OrderedItemsPanel from "../components/OrderPanel/OrderedItems";
import OrderSubmit from "../components/OrderPanel/OrderSubmit";

export default function Order() {
  const { isLoading } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const { logoutHandler } = useLogOut();
  const {
    orderData,
    toggleItemInOrder,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useOrderData();

  if (isLoading) return <Loading />;
  return (
    <div className="order-page d-flex flex-column">
      <Head>
        <title>Yummy Menu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        logoutHandler={logoutHandler}
        themeIsDark={themeIsDark}
        themeModeHandler={themeModeHandler}
      />

      {orderData ? (
        <div className="section-container d-flex flex-column flex-fill p-relative">
          <div className="flex-fill p-relative">
            <OrderedItemsPanel
              orderData={orderData}
              toggleItemInOrder={toggleItemInOrder}
              increaseItemQuantity={increaseItemQuantity}
              decreaseItemQuantity={decreaseItemQuantity}
            />
          </div>
          <OrderSubmit submitHandler={() => console.log("submit order")} />
        </div>
      ) : (
        <div className="section-container d-flex flex-column flex-fill p-relative">
          <div className="empty-order cover-parent d-flex flex-column justify-content-center align-items-center">
            <div className="message-title text-cap text-weight-bold">
              <span>n</span>
              <span>o</span>
              <div className="d-inline-block"> </div>
              <span>o</span>
              <span>r</span>
              <span>d</span>
              <span>e</span>
              <span>r</span>
            </div>
            <div className="redirect-link text-cap">
              <Link href="/">
                <a>go to menu</a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
