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

  const fakeData = ["burger.png", "brooklyn-style.png", "paper-cup.png"];

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
            {fakeData.map((item) => {
              return (
                <div className="card-container p-relative">
                  <img
                    src="/design-utils/order-card.png"
                    className="bg-shape w-100"
                    alt="card background"
                  />
                  <div className="card-content cover-parent d-flex">
                    <div className="item-image text-center">
                      <img src={`/design-utils/temp/${item}`} alt="item" />
                    </div>
                    <div
                      style={{
                        alignSelf: "center",
                        marginLeft: "15px",
                        marginTop: "15px",
                      }}
                    >
                      <div className="item-title secondary-font text-weight-bold">
                        Steak Delight
                      </div>
                      <div className="counter d-flex justify-space-between align-items-center">
                        <button className="increase">
                          <img
                            src="/design-utils/increase.svg"
                            alt="increase"
                          />
                        </button>
                        <div className="number-of-orders text-weight-bold">
                          2
                        </div>
                        <button className="decrease">
                          <img
                            src="/design-utils/decrease.svg"
                            alt="decrease"
                          />
                        </button>
                      </div>
                    </div>
                    <div className="item-cost p-absolute text-weight-bold">
                      30.4$
                      <span className="discount p-absolute from-top from-right">
                        -10%
                      </span>
                    </div>
                    <div className="remove-btn p-absolute">
                      <img
                        src="/design-utils/remove.png"
                        alt="remove button"
                        className="w-100"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
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
