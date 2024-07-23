import React from "react";

const ProductCard = ({ data }) => {
  return (
    <>
  <div classNameName= "container mx-auto border ml-5">
    <a href="#" className="block">
    <img
      alt="movie-poster"
      src={data.poster}
      className="h-60 w-full object-cover sm:h-80 lg:h-96"
    />
    <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{data.title}</h3>
    <p className="mt-2 max-w-sm text-gray-700">
      {data.plot}
    </p>
  </a>
</div>
  </>
  );
};

export default ProductCard;