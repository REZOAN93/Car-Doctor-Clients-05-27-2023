import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvidor/AuthProvidor";
import Orderdata from "./Orderdata";

const Order = () => {
  const { user } = useContext(AuthContext);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/ordersinfo?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleUpdateStatus = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = order.filter((odr) => odr._id !== id);
          const approving = order.find((or) => or._id === id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrder(newOrders);
        }
      });
  };
  const handleDelete = (id) => {
    const procced = window.confirm("Would you like to delete the order?");
    if (procced === true) {
      fetch(`http://localhost:5000/orderdelete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order is Deleted");
            const restOrder = order.filter((odr) => odr._id !== id);
            setOrder(restOrder);
          }
        });
    }
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {order.map((or) => (
            <Orderdata
              key={or._id}
              orderdata={or}
              handleUpdateStatus={handleUpdateStatus}
              handleDelete={handleDelete}
            ></Orderdata>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Order;
