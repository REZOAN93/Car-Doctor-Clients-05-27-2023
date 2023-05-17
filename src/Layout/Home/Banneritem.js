import React from 'react';

const Banneritem = (props) => {
    const {image,id,prev,next}=props.slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
    <div className="carousel-img">
    <img src={image} alt="" className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 top-1/4">
      <h1 className="text-6xl font-bold text-white">
        Affrodable <br />
        Price for Car <br />
        Servicing
        </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-20 w-1/2 top-1/2">
      <p className="text-white text-2xl">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
    </div>
    <div className="absolute flex justify-start transform -translate-y-1/2 left-20 w-1/2 top-3/4">
      <button className="btn btn-active btn-secondary me-5">Button</button>
      <button className="btn btn-outline btn-secondary">Button</button>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle me-2">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
    );
};

export default Banneritem;