import React from "react";

const Address = () => {
  return (
    <div className="grid grid-cols-3 bg-slate-950 text-white gap-4 rounded-xl mt-10 h-64">
      <div className="  h-14 w-64 mt-20 ms-14">
        <h1 className="">We are open monday-friday</h1>
        <h1 className="font-bold text-2xl">7:00 am - 9:00 pm</h1>
      </div>
      <div className=" h-14 w-64 mt-20 ms-14 ">
        <h2>Have a question?</h2>
        <h1 className="font-bold text-2xl">+2546 251 2658</h1>
      </div>
      <div className=" h-14 w-64 mt-20 ms-14">
        <h1>Need a repair? our address</h1>
        <h1 className="font-bold text-2xl">Liza Street, New York</h1>
      </div>
    </div>
  );
};

export default Address;
