import React, { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const SocialLogin = () => {
    const { googleSignIn} = useContext(AuthContext)

    const handleClickWithGoogle = ()=>{
        googleSignIn()
        .then((result)=>{
            console.log(result.user)
        })
        .catch((error)=>{
            console.log(error.massage)
        })
    }
  return (
    <div>
        <div className="divider">Or</div>
      <div className="w-full">
        <button onClick={handleClickWithGoogle} className="bg-[#2FBAD3] w-full py-2 rounded-md font-bold text-white">Google</button>
      </div>
    </div>
  );
};

export default SocialLogin;
