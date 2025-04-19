
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#1A3554]">
      <div className="text-center bg-white p-12 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-[#1A3554]">404</h1>
        <p className="text-xl text-[#6CADDE] mb-4">Oops! Page not found</p>
        <a href="/" className="text-[#6CAAD9] hover:text-[#00275B] underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
