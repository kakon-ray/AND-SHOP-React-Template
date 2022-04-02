/* eslint-disable jsx-a11y/alt-text */
import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";

import "./ShopCard.css";

import { ViewListIcon } from "@heroicons/react/solid";
import { SwitchHorizontalIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/solid";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { wishListContext } from "../../Contexts/wishListContext";
import { toast } from "react-toastify";

const ShopCard = ({ position, title, price, img, img1, item }) => {
  const [wishList, setWishList] = useContext(wishListContext);

  const addTowishList = () => {
    const exist = wishList.find((wishItem) => wishItem.item?.id === item.id);
    console.log(exist);
    if (!exist) {
      setWishList([...wishList, { item }]);
      toast.success(" Successfully Added in Wishlist");
    } else if (exist) {
      toast.error("Already Added in Wishlist");
    }
  };

  return (
    <div className="col-md-3" id="shop-card">
      <Card className="card-container">
        <div className="img-container">
          <img src={img} className="img-fluid" />

          <img src={img1} className="upper-image img-fluid" />
        </div>

        <Card.Body className="text-center">
          <Card.Text>{title}</Card.Text>
          <h5>{price}</h5>
        </Card.Body>
        <span className="badge-container p-0">
          <span className="badge">{position}</span>
        </span>

        <div className="overly-container">
          <button className="btn btn-light overly-content-btn">
            Add to Cart
          </button>
          <div className="overly-content-icon d-flex flex-column gap-4">
            <button className=" icon-btn" onClick={addTowishList}>
              <FontAwesomeIcon icon={faHeart} className="badge" size="lg" />
            </button>
            <button className=" icon-btn" onClick={addTowishList}>
              <FontAwesomeIcon
                icon={faCodeCompare}
                className="badge"
                size="lg"
              />
            </button>
            <button className=" icon-btn" onClick={addTowishList}>
              <FontAwesomeIcon icon={faEye} className="badge" size="lg" />
            </button>

            {/* <ViewListIcon className="h-7 w-7 text-light-500 badge my-3" />
            <SwitchHorizontalIcon className="h-7 w-7 text-light-500 badge my-3" /> */}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ShopCard;
