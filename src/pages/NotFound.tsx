import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <section className="h-screen flex flex-col gap-4 justify-center items-center pb-20">
      <h1 className="text-4xl text-gray-800 font-bold ">404 Not Found</h1>
      <p className="text-2xl text-gray-600">The page you are looking for does not exist.</p>
      <Link to="/">
        <button className="btn btn-outline btn-primary">Go to Home</button>
       </Link>
    </section>
  )
}

export default NotFound