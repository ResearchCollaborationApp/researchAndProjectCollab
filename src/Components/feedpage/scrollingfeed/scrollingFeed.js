import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import PostCard from "./postCard"
import Loader from "./loader"

const ScrollingFeed = () => {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/posts?offset=10&limit=10");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        console.log(responseData);
        // const data = responseData.results;
        setItems(responseData);
        // console.log(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const fetchMoreData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts?offset=${index}0&limit=10`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      // const data = responseData.results;
      setItems((prevItems) => [...prevItems, ...responseData]);
      setHasMore(Object.values(responseData).length > 0);

      // Update the index after fetching data
      setIndex((prevIndex) => prevIndex + 1);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <InfiniteScroll
      dataLength={items.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<Loader />}
    >
      <div className='container'>
        <div className='row'>
          {items &&
            items.map((item) => <PostCard data={item} key = {item._id} />)
          }
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default ScrollingFeed;