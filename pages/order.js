import Head from "next/head";
import useTokenCheckInApp from "../hooks/useTokenCheckInApp";
import useThemeMode from "../hooks/useThemeMode";
import useLogOut from "../hooks/useLogOut";

import Loading from "../components/Loading/Loading";
import Navbar from "../components/navbar/Navbar";

export default function Order() {
  const { isLoading } = useTokenCheckInApp();
  const { themeIsDark, themeModeHandler } = useThemeMode();
  const { logoutHandler } = useLogOut();

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

      <div className="section-container d-flex flex-column flex-fill">
        <div className="flex-fill">
          <div className="order-items-panel">
            <div className="title text-cap text-weight-bold">your order</div>
            <div className="card-container p-relative">
              <img
                src="/design-utils/order-card.png"
                className="bg-shape w-100"
                alt="card background"
              />
              <div className="card-content cover-parent">
                <div
                  className="item-image d-inline-block"
                  style={{ width: "80px" }}
                >
                  <img
                    src="/design-utils/temp/burger.png"
                    alt="item"
                    className="w-100"
                  />
                </div>
                <div className="item-title d-inline-block">test</div>
                <div className="counter d-inline-block">counter</div>
                <div className="item-cost d-inline-block">30.4$</div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-submit-panel">
          <div className="cost-items-container">
            <div className="cost-item d-flex justify-space-between">
              <div className="item-title">delivery fee</div>
              <div className="item-cost">Free</div>
            </div>
            <div className="cost-item d-flex justify-space-between">
              <div className="item-title">total price</div>
              <div className="item-cost">108.4 $</div>
            </div>
          </div>
          <button
            className="checkout-btn"
            onClick={() => console.log("checkout clicked...")}
          >
            checkout
          </button>
        </div>
      </div>
    </div>
  );
}
