import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen bg-tu-bg font-body text-slate-900">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
