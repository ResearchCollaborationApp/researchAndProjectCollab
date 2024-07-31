import React from "react";

const PostCard = ({ data }) => {
  return (
    <>
   <div className="bg-gray-300">
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{data.author}</h3>
      <p className="mt-2 max-w-sm text-gray-700">
        {data.caption}
      </p>
      <img
        alt="movie-poster"
        src={data.image}
        className="h-60 w-full object-cover sm:h-80 lg:h-96"
      />
      </div>

  </>
  );
};

export default PostCard;