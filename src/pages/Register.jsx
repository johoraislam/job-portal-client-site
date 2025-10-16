import React, { useContext } from "react";
import Lottie from "lottie-react";
import animationLottieData from "../assets/Login.json";
import AuthContext from "../context/AuthContext";
import toast, { Toaster } from "react-hot-toast";
import SocialLogin from "./shared/SocialLogin";
import { Link } from "react-router";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    // 🔒 Password Validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long!");
      return;
    }
    if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one uppercase letter!");
      return;
    }
    if (!/[@#$,.]/.test(password)) {
      toast.error("Password must contain at least one special character: @, #, $, , or .");
      return;
    }

    // ✅ Password is valid, proceed
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log("User created:", user);
        toast.success("Account created successfully!");
        form.reset();
      })
      .catch((error) => {
        console.log(error.code, error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      {/* Toaster for notifications */}
      <Toaster position="top-right" reverseOrder={false} />

      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="w-96">
          <Lottie animationData={animationLottieData} />
        </div>

        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="fieldset space-y-2">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
                required
              />

              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
                required
              />

              <div>
                <p className="link link-hover">have you a account? <Link to={'/signIn'} className="text-blue-600">Login</Link></p>
              </div>

              <button type="submit" className="btn bg-[#70B4EC] text-white  rounded-xl shadow-md hover:shadow-lg hover:bg-[#362478] transition-all duration-500 mt-4 w-full">
                Register
              </button>
              <SocialLogin/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
