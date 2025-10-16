import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white text-center px-4">
      <h1 className="text-9xl font-extrabold text-red-500 drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-4xl font-semibold mt-4">Oops! Page not found</h2>
      <p className="text-gray-400 mt-2 mb-6">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-6 rounded-full transition duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
