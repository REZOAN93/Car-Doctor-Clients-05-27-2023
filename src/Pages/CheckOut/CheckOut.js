import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvidor/AuthProvidor";

const CheckOut = () => {
  const { title, _id } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handleorder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value} ${form.lastName.value}`;
    const email = user?.email || "Unregistered";
    const phone = form.number.value;
    const message = form.message.value;
    const order = { name, email, phone, message, customer: _id };

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged === true) {
          alert("Order is confirm");
          form.reset();
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleorder} class="w-3/5 m-auto py-10">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              name="firstName"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Email
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="email"
              name="email"
              placeholder="Enter Email"
              defaultValue={user.email}
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Phone
            </label>
            <input
              class="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="number"
              name="number"
              placeholder="Enter phone"
            />
          </div>
        </div>
        <div>
          <textarea
            className="textarea bg-white textarea-bordered w-full h-36"
            name="message"
            placeholder="Your Message"
          ></textarea>
        </div>
        <input
          className=" btn w-full mt-5 bg-orange-600 hover:bg-orange-800"
          type="submit"
          value="Confirm Order"
        />
      </form>
    </div>
  );
};

export default CheckOut;
