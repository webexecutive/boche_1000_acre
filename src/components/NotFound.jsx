import Button from "./Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">

      {/* Image */}
      <img
        src="/images/404.webp"
        alt="Page Not Found"
        className="w-72 md:w-96 mb-8 drop-shadow-xl"
      />

    

      {/* Description */}
      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you're looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Button onClick={() => navigate("/")}>
        Go Back Home
      </Button>

    </div>
  );
};

export default NotFound;