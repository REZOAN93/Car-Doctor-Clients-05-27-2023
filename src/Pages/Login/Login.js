import React from "react";
import img from "../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
    
  };
  return (
    <div className="hero w-full my-10">
      <div className="hero-content grid gap-32 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left ">
          <img className="w-3/4" src={img} alt="" />
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl "
        >
          <div className="card-body">
            <h1 className="text-2xl text-center font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
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
                id=""
              />

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
