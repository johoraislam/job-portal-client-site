import Lottie from "lottie-react";
import animationLottieData from "../assets/Login.json"
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router";
import { em } from "motion/react-client";
import axios from "axios";

const SignIn = () => {
    const {signInUser} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location)
    // const navigate = useNavigate()
    // const from = location.state || '/';
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value.trim();

        signInUser(email,password)
        .then((userCredential) => {
            // Signed in 
           let email2 = {email: userCredential.user.email}
           axios.post('http://localhost:3000/jwt',email2,{withCredentials:true})
           .then(res =>{
            console.log(res.data)
            // localStorage.setItem('job-token',data.data.token)
           })
            // navigate(from,{replace:true})
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
          });
    
      };
  return (
    <div className="hero bg-base-200 min-h-screen">

    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="w-96">
        <Lottie animationData={animationLottieData} />
      </div>

      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleSignIn} className="fieldset space-y-2">
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
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn bg-[#70B4EC] text-white  rounded-xl shadow-md hover:shadow-lg hover:bg-[#362478] transition-all duration-500 mt-4 w-full">
             SignIn
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SignIn