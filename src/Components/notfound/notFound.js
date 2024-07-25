import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <div>
        <h2>
            Oops page not found!
        </h2>
        <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius quidem quam repellat.
        </p>
        <p>Go to <Link to = "/" className="text-cyan-800">homepage</Link></p>
    </div>
  )
}
