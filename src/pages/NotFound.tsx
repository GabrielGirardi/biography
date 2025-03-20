import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import CustomCursor from "../components/CustomCursor";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <CustomCursor />

      <div className="text-center max-w-md">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <div className="absolute inset-0 bg-gradient-to-br from-kawasaki-green/20 to-blue-300/20 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-8xl font-bold text-gray-900">404</h1>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <a
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full bg-kawasaki-green text-white font-medium transition-all hover:shadow-lg hover:shadow-kawasaki-green/20 hover:translate-y-[-2px] cursor-hover"
        >
          <ArrowLeft className="mr-2 w-5 h-5" />
          Return to Home
        </a>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-kawasaki-green/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-300/5 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default NotFound;