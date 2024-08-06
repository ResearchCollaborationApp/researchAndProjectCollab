import UserPostTitle from "./userPostTitle";
const PostCard = ({ data }) => {
  return (
    <>
   <div className="bg-white max-w-xl" >
    <UserPostTitle/>
      <p className="mt-2 max-w-sm text-gray-700">
        {data.body}
      </p>
      <img
        alt="movie-poster"
        src="https://as1.ftcdn.net/v2/jpg/02/43/25/90/1000_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg"
        className="h-60 w-full object-cover sm:h-80 lg:h-96"
      />
      </div>
  </>
  );
};

export default PostCard;