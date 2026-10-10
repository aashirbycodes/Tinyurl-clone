import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-tu-bg px-6 text-center font-body">
      <div>
        <h1 className="font-heading text-6xl font-black text-tu-teal">404</h1>
        <p className="mt-4 text-lg">Page not found.</p>
        <Link to="/" className="mt-6 inline-block rounded bg-tu-teal px-5 py-3 font-medium text-white">Back to Home</Link>
      </div>
    </div>
  )
}
