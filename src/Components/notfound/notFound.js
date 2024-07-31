import { Link } from "react-router-dom"

function Error404() {
  return (
    <>
      <div className="grid h-screen place-items-center w-full">
        <iframe 
          src="https://lottie.host/embed/95128820-181c-46a5-9eb8-e2aa2f522d4e/QH5Jh3GQfN.json" 
          className="w-full h-full max-w-2xl max-h-2xl"
          title="404 Animation"
        ></iframe>
        <p>Go to <Link to = "/" className="text-cyan-800">homepage</Link></p>
      </div>
    </>
  )
}

export default Error404;
