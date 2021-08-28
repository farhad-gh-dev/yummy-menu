export default function Loading({ themeIsDark = false }) {
  return (
    <div
      className={`page-container loading p-absolute from-top from-left w-100 h-100 d-flex align-items-center justify-content-center${
        themeIsDark ? " dark-theme" : ""
      }`}
    >
      <div className="text-uppercase text-weight-bold z-index-11">
        loading
        <div className="dots d-inline-block">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}
