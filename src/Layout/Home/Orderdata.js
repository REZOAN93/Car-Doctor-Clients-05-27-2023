import React, { useEffect, useState } from "react";

const Orderdata = ({ orderdata, handleDelete, handleUpdateStatus }) => {
  const { email, customer, phone, name, _id, status } = orderdata;
  const [service, setService] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/services/${customer}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [customer]);

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-ghost hover:bg-red-600"
          >
            X
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={service.img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{service.title}</div>
            <div className="text-sm opacity-50">$ {service.price}</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">{email}</span>
      </td>
      <td>{phone}</td>
      <th>
        <button
          onClick={() => handleUpdateStatus(_id)}
          className="btn btn-ghost btn-xs"
        >
          {status ? status : "Pending"}
        </button>
      </th>
    </tr>
  );
};

export default Orderdata;
