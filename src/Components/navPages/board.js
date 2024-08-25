function Board(props) {
  const boardElements = props.boards;
  return (
    <>
      {boardElements.map((board, index) => (
        <div
          key={index}
          className="block overflow-hidden bg-white rounded-lg border border-indigo-500 m-3 p-4 sm:p-6 lg:p-8"
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
              <img
                alt="board-logo"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="size-16 rounded-lg object-cover shadow-sm"
              />
            </div>
          </div>

          <div className="mt-4">
            <p className="text-pretty text-md text-gray-500">
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
                className="block h-3 rounded-full bg-indigo-600"
                style={{ width: `${board.progressPercent}%` }}
              ></span>
            </span>
          </div>
          <div className="flex flex-col-reverse mt-1">
            <dd className="text-sm text-gray-500">
              Your team has completed {board.progressPercent}% of the project.
            </dd>
          </div>
          <dl className="mt-6 flex gap-4 sm:gap-6">
            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">Created</dt>
              <dd className="text-xs text-gray-500">{board.createdOn}</dd>
            </div>

            <div className="flex flex-col-reverse">
              <dt className="text-sm font-medium text-gray-600">
                Team Members
              </dt>
              <dd className="text-xs text-gray-500">
                You and {board.numberOfMembers - 1} others are in this board
              </dd>
            </div>
          </dl>
        </div>
      ))}
    </>
  );
}

export default Board;
