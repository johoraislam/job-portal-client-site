import { useContext } from "react";
import { NavLink } from "react-router";
import AuthContext from "../../context/AuthContext";
import auth from "../../firebase/firebase.init";
import toast from "react-hot-toast";
import jobIcon from "../../assets/logo.png"

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const handleSignOut = ()=>{
    signOutUser(auth)
    .then(() => {
      toast.success('succesfull signOut')
    }).catch((error) => {
      toast.error('something is wrong'+ error)
    });
  }

  const links = (
    <>
      <li>
        <NavLink to="/">home</NavLink>
      </li>
      <li>
        <NavLink to={'/myapplications'}>My Applications</NavLink>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img src={jobIcon} className="size-12" alt="" />
        <h2 className="text-[#70B4EC] font-mono text-2xl">Job Portal</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-2">
        {user ? (
          <>
          <button onClick={handleSignOut} className="btn bg-amber-500 text-white">Sign Out</button>
          </>
        ) : (
          <>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "underline text-blue-600" : "hover:underline"
              }
            >
              Register
            </NavLink>

            <NavLink
              to="/signIn"
              className={({ isActive }) => (isActive ? "btn underline" : "btn")}
            >
              Sign In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
