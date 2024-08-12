import { useState } from "react";
import UserPostTitle from "./userPostTitle";

const PostCard = ({ data }) => {
  const likeColor = "purple";

  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  const [countClick, setCountClick] = useState(0);

  const handleClick = (event) => {
      setCountClick(prevCount => {
          const newCount = prevCount + 1; // Increment the count
          // Change the fill color based on the new count
          if (newCount % 2 !== 0) {
              event.target.setAttribute('fill', likeColor);
              event.target.setAttribute('stroke', likeColor);
          } else {
              event.target.setAttribute('fill', 'white');
              event.target.setAttribute('stroke', 'black');
          }
          return newCount; // Return the new count for state update
      });
  };
  
  return (
    <div className="h-fit rounded-md  bg-white w-full mb-3">
      <UserPostTitle />
      <p className={`mx-2 p-1 w-fit font-semibold text-gray-700 ${isExpanded ? "" : "line-clamp-3"}`}>
        {data.body}
        
      </p>
      <button
        onClick={handleToggle}
        className="text-indigo-600 ml-2 font-semibold"
      >
        {isExpanded ? "see less" : "..see more"}
      </button>
      <img
        alt="movie-poster"
        src="https://as1.ftcdn.net/v2/jpg/02/43/25/90/1000_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg"
        className="h-70 w-70 w-full object-cover sm:h-80 lg:h-96"
      />
      <div className = "flex gap-10 h-10 items-center justify-start p-8">
        <button 
        onClick = {handleClick}
        className="flex items-baseline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <span className="text-gray-500">100k</span>
        </button>
        <button className="flex items-baseline">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="size-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
          <span className="text-gray-500">350k</span>
        </button>
      </div>
    </div>
  );
};

export default PostCard;
