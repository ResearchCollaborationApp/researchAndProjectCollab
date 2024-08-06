import Navigation from "../navbar/navigation"
import UserInfo from "../profilepage/userInfo"
import AutoScroll from "./autoScroll"
import ScrollingFeed from "./scrollingfeed/scrollingFeed"
export default function FeedPage() {
  return (
    <>
    <Navigation/>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-4 lg:gap-8 lg:mx-8 px-8">
      <div className="h-fit hidden lg:block md:block">
        <AutoScroll/>
      </div>
      <div className="h-fit lg:col-span-2">
        <ScrollingFeed/>
      </div>
      <div className="h-fit hidden  p-3 border-rounded lg:block md:block">
        <h3 className="px-3 text-2xl bg-white font-medium mb-2 text-gray-900">
        Top Research in School
        </h3>
      <div
        className="border border-gray-100 bg-white p-4 shadow-md sm:p-6 mb-4"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
          animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
          itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
          Molestias explicabo corporis voluptatem?
        </p>

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more

          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </div>

      <div
        className="border border-gray-100 bg-white p-4 shadow-md sm:p-6 mb-3"
      >
        <span className="inline-block rounded bg-blue-600 p-2 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
            />
          </svg>
        </span>

        <a href="#">
          <h3 className="mt-0.5 text-lg font-medium text-gray-900">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h3>
        </a>

        <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
          animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
          itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
          Molestias explicabo corporis voluptatem?
        </p>

        <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
          Find out more

          <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
            &rarr;
          </span>
        </a>
      </div>
      </div>
  </div>
  </>
  )
}
