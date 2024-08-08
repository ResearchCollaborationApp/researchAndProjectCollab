import { useState } from "react";
import UserPostTitle from "./userPostTitle";

const PostCard = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="h-fit rounded-md  bg-gray-300 w-full mb-3">
      <UserPostTitle />
      <p className={`m-3 p-1 w-fit font-semibold text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`}>
        {data.body}
        
      </p>
      <button
        onClick={handleToggle}
        className="text-blue-600 ml-2 font-semibold mt-1"
      >
        {isExpanded ? "See Less" : "See More"}
      </button>
      <img
        alt="movie-poster"
        src="https://as1.ftcdn.net/v2/jpg/02/43/25/90/1000_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg"
        className="h-70 w-70 w-full object-cover sm:h-80 lg:h-96"
      />
    </div>
  );
};

export default PostCard;
