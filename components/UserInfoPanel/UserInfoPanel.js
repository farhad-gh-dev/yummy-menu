export default function UserInfoPanel({ userInfo }) {
  return (
    <div className="user-info-panel">
      <div className="title text-cap text-weight-bold">your profile</div>
      <div className="info-cards-container">
        {Object.keys(userInfo).map((item, index, arr) => {
          return (
            <div
              key={item}
              className={`info-card p-relative${
                index === arr.length - 1 ? " last" : ""
              }`}
            >
              <div className="card-title text-cap">
                {item.replace("_", " ")}
              </div>
              {Array.isArray(userInfo[item]) ? (
                userInfo[item].map((d) => {
                  return (
                    <div key={d} className="card-description multiple text-cap">
                      {d}
                    </div>
                  );
                })
              ) : (
                <div className="card-description text-cap text-weight-bold">
                  {userInfo[item]}
                </div>
              )}

              <button
                className="edit-btn text-cap p-absolute from-top from-right"
                onClick={() => console.log("edit btn clicked")}
              >
                edit
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
