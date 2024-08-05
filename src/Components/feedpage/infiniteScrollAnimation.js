import React, { useEffect } from 'react';

const InfiniteScrollAnimation = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within the scroller
        const scrollerContent = Array.from(scroller.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scroller.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="scroller w-full flex flex-col gap-2 animate-scroll-slow" data-speed="slow" data-animated="true" style={{ overflow: 'hidden' }}>
        <img src="https://i.pravatar.cc/150?img=1" alt="" className="w-full h-40" />
        <img src="https://i.pravatar.cc/150?img=2" alt="" className="w-full h-40" />
        <img src="https://i.pravatar.cc/150?img=3" alt="" className="w-full h-40" />
        <img src="https://i.pravatar.cc/150?img=4" alt="" className="w-full h-40" />
        <img src="https://i.pravatar.cc/150?img=5" alt="" className="w-full h-40" />
        <img src="https://i.pravatar.cc/150?img=6" alt="" className="w-full h-40" />
      </div>
      <style jsx>{`
        @keyframes scroll-slow {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100%); }
        }
        .animate-scroll-slow {
          animation: scroll-slow 60s linear infinite;
        }
        .scroller:hover {
          animation-play-state: paused;
        }
      `}</style>
    </>
  );
};

export default InfiniteScrollAnimation;


