import React from "react";

const ServiceItem = (props) => {
  const { title, img, price, description } = props.item;

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
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
