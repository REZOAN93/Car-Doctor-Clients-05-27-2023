import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Contexts/AuthProvidor/AuthProvidor";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        if (user) {
          setError("");
          form.reset();
          navigate("/");
        } else {
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid gap-32 md:grid-cols-2 flex-col lg:flex-row">
        <div className=" lg:text-left ">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <div className="card text-center flex-shrink-0 w-full max-w-sm shadow-2xl pb-20 pt-5">
          <form onSubmit={handleSignup} className="card-body">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                className="input input-bordered"
                type="password"
                name="password"
                required
                id=""
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <p className="text-red-700 mb-5">{error}</p>
              <input
                className="btn btn-primary"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p>
            Already have an Account ?{" "}
            <Link className="text-orange-600" to={"/login"}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
