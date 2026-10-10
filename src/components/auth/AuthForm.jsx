import { useState } from 'react'
import Logo from '../common/Logo'
import useGo from '../../hooks/useGo'

const socials = [['G', 'Google', 'text-red-500'], ['f', 'Facebook', 'text-blue-600'], ['𝕏', 'X (Twitter)', 'text-black'], ['▦', 'Microsoft', 'text-orange-500']]

const Divider = ({ t }) => (
  <div className="flex items-center gap-4 text-sm"><hr className="flex-1 border-slate-300" />{t}<hr className="flex-1 border-slate-300" /></div>
)

export default function AuthForm({ mode }) {
  const go = useGo()
  const login = mode === 'login'
  const [name, setName] = useState(''), [email, setEmail] = useState(''), [pw, setPw] = useState('')
  const [show, setShow] = useState(false), [msg, setMsg] = useState(null)
  const score = Math.min(4, (pw.length >= 8) + /[A-Z]/.test(pw) + /[0-9]/.test(pw) + /[^A-Za-z0-9]/.test(pw))
  const ready = login ? email && pw : name && email && pw
  const field = 'mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-tu-teal'

  const submit = (e) => {
    e.preventDefault()
    if (!/^\S+@\S+\.\S+$/.test(email)) return setMsg({ ok: false, t: 'Please enter a valid email address.' })
    if (!login && pw.length < 8) return setMsg({ ok: false, t: 'Password must be at least 8 characters.' })
    setMsg({ ok: true, t: login ? 'Logged in (demo only, no backend).' : 'Account created (demo only, no backend).' })
  }


  return (
    <div className="relative flex items-center justify-center bg-tu-bg px-6 py-20">
      <button onClick={() => go('home')} className="absolute left-9 top-5"><Logo className="text-2xl !text-tu-teal" /></button>
      <form onSubmit={submit} className="w-full max-w-[525px]">
        <h1 className="font-heading text-3xl font-bold">{login ? 'Log In' : 'Sign Up'}</h1>
        <p className="mt-2 text-sm">
          {login ? "Don't have an account? " : 'Already a user? '}
          <button type="button" onClick={() => go(login ? 'signup' : 'login')} className="font-medium text-tu-teal">{login ? 'Sign Up' : 'Log In'}</button>
        </p>
        <div className="mt-4"><Divider t="continue with" /></div>

        {!login && (
          <div className="mt-6"><label className="text-sm font-semibold">Name</label>
            <input className={field} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" /></div>
        )}
        <div className="mt-5"><label className="text-sm font-semibold">Email</label>
          <input className={field} value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email Address" /></div>
        <div className="mt-5"><label className="text-sm font-semibold">Password</label>
          <div className="relative">
            <input type={show ? 'text' : 'password'} className={field} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="Enter Password" />
            <button type="button" onClick={() => setShow(!show)} className="absolute right-3 top-1/2 mt-1 -translate-y-1/2 text-sm" aria-label="show password">{show ? '🙈' : '👁'}</button>
          </div>
        </div>

        {login ? (
          <div className="mt-5 flex items-center justify-between text-sm">
            <label className="flex items-center gap-3"><input type="checkbox" className="h-4 w-4" />Keep me logged in</label>
            <a href="#" onClick={(e) => e.preventDefault()} className="font-medium text-tu-teal">Forgot password?</a>
          </div>
        ) : (
          <>
            <div className="mt-3 flex items-center gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-300">
                <div className={`h-full transition-all ${['bg-slate-300', 'bg-red-500', 'bg-orange-400', 'bg-yellow-400', 'bg-green-600'][score]}`} style={{ width: `${score * 25}%` }} />
              </div>
              <span className="text-[11px]">Security: ⓘ</span>
            </div>
            <p className="mt-8 text-[11px]">By Signing Up, you agree to our <a className="text-tu-teal underline">Terms of Service</a>, <a className="text-tu-teal underline">Privacy Policy</a>, and <a className="text-tu-teal underline">Use of Cookies</a>.</p>
          </>
        )}

        {msg && <p className={`mt-4 text-sm font-medium ${msg.ok ? 'text-tu-green' : 'text-red-600'}`}>{msg.t}</p>}
        <button type="submit" className={`mt-6 w-full rounded py-2.5 text-sm font-medium text-white transition ${ready ? 'bg-tu-teal hover:opacity-90' : 'bg-neutral-500'}`}>{login ? 'Log In' : 'Sign Up'}</button>

        <div className="mt-5"><Divider t="or" /></div>
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {socials.map(([i, n, c]) => (
            <button key={n} type="button" className="flex items-center gap-2 rounded border border-slate-400 bg-white px-3 py-1.5 text-[11px]"><span className={`text-sm font-black ${c}`}>{i}</span>{n}</button>
          ))}
        </div>
      </form>
    </div>
  )
}
