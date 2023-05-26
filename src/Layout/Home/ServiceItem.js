import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
  const { _id, title, img, price, description } = props.item;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="border-2">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-xl text-orange-600">Price: ${price}</p>
          <div className="card-actions justify-end">
            <Link className="btn btn-primary" to={`/checkout/${_id}`}>
              Buy Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
