import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../common/Logo'

const items = [['Plans', '/plans'], ['Features', '/'], ['Domains', '/domains'], ['Resources', '/']]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = (to) => ({ isActive }) =>
    `font-medium ${isActive && to !== '/' ? 'underline underline-offset-4' : ''}`

  return (
    <header className="bg-gradient-to-r from-tu-teal to-tu-navy text-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-4">
        <div className="flex items-center gap-12">
          <Link to="/"><Logo /></Link>
          <nav className="hidden gap-8 md:flex">
            {items.map(([label, to]) => (
              <NavLink key={label} to={to} className={linkClass(to)}>{label}</NavLink>
            ))}
          </nav>
        </div>
        <div className="hidden items-center gap-4 md:flex">
          <Link to="/login" className="px-3 font-medium">Log In</Link>
          <Link to="/signup" className="rounded bg-tu-teal px-3 py-2.5 font-medium ring-1 ring-white/10">Sign Up</Link>
        </div>
        <button className="text-2xl md:hidden" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
      </div>

      {open && (
        <div className="space-y-3 px-6 pb-4 md:hidden">
          {items.map(([label, to]) => (
            <Link key={label} to={to} onClick={() => setOpen(false)} className="block">{label}</Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link to="/login" onClick={() => setOpen(false)}>Log In</Link>
            <Link to="/signup" onClick={() => setOpen(false)} className="rounded bg-tu-teal px-3 py-1">Sign Up</Link>
          </div>
        </div>
      )}
    </header>
  )
}
