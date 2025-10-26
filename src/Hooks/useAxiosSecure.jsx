import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { signOutUser } = UseAuth(); 
  const navigate = useNavigate();    

  useEffect(() => {
    const requestInterceptor = axiosInstance.interceptors.request.use(
      (response) => response,
      (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
          console.log('Handle unauthorized access, e.g., redirect to login');
          signOutUser()
            .then(() => {
              console.log('User signed out due to unauthorized access');
              navigate('/signIn');
            })
            .catch((signOutError) => {
              console.error('Error signing out user:', signOutError);
            });
        }
        return Promise.reject(error);
      }
    );

    // Cleanup interceptor on unmount
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
    };
  }, [signOutUser, navigate]);

  return axiosInstance;
};

export default useAxiosSecure;
