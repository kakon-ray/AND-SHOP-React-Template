import React from "react";
import "./HeaderBanner.css";
import banner1 from "../../assets/img/banner_3.71b74319.jpg";
import banner2 from "../../assets/img/man.422a052d.png";

const HeaderBanner = () => {
  return (
    <div
      id="header-banner"
      style={{
        backgroundImage: `url(${banner1})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <div id="header-banner-content" className="ms-3">
            <p className="pb-0 mb-0 title">LIVE FOR</p>
            <p className="py-0 my-0 title-two">FASHION</p>
            <p className="ps-2 mt-0 mb-3 save py-2">SAVE UP TO 50%</p>
            <button className="btn btn-outline-light py-2 ms-2">
              Shop Now
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ms-3">
            <img
              src={banner2}
              alt=""
              className="img-fluid"
              style={{ width: "88%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBanner;
