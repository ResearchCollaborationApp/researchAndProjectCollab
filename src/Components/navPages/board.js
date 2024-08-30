import { Link } from "react-router-dom";
function Board(props) {
  const boardElements = props.boards;
  return (
    <>
      {boardElements.map((board, index) => (
        <div
          key={index}
          className="block overflow-hidden bg-white rounded-lg border shadow-purple-200 shadow-md m-4 mb-5 p-4 sm:p-6 lg:p-8"
        >
          <div className="sm:flex sm:justify-between sm:gap-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {board.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-gray-600">
                Created by {board.creator}
              </p>
            </div>

            <div className="hidden sm:block sm:shrink-0">
              <div className="flex flex-col">
                <Link
                  to="#"
                  className="bg-purple-500 text-white font-semibold group relative inline-flex items-center overflow-hidden rounded-md border px-8 py-3 focus:outline-none focus:ring"
                >
                  <span className="absolute mt-4 end-full transition-all group-hover:end-4">
                    <svg
                      className="size-5 rtl:-rotate-0"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>

                  <span class="text-sm font-medium transition-all group-hover:me-4">
                    {" "}
                    Discussion Board{" "}
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-md text-gray-500 line-clamp-4">
              {board.description}
            </p>
          </div>

          <div className="mt-5">
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>

            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={board.progressPercent}
              aria-valuemin="0"
              aria-valuemax="100"
              className="block rounded-full bg-gray-200"
            >
              <span
                className="block h-3 rounded-full bg-purple-500"
                style={{ width: `${board.progressPercent}%` }}
              ></span>
            </span>
          </div>
          <div className="flex flex-col-reverse mt-1">
            <dd className="text-sm text-gray-500">
              Your team has completed {board.progressPercent}% of the project.
            </dd>
          </div>
          <div className="mt-6 flex gap-8 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dd className="text-xs text-gray-500">Since {board.createdOn}</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dd className="text-xs text-gray-500">
                You and {board.numberOfMembers - 1} others
              </dd>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Board;
