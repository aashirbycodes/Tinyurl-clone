import { useState } from 'react'
import Btn from '../common/Btn'
import QR from './QR'
import { normalizeWebUrl, valid } from '../../utils/validate'
import useGo from '../../hooks/useGo'

export default function Hero() {
  const go = useGo()
  const [tab, setTab] = useState('link')
  const [url, setUrl] = useState(''), [alias, setAlias] = useState(''), [domain, setDomain] = useState('tinyurl.com')
  const [err, setErr] = useState(''), [links, setLinks] = useState([]), [qr, setQr] = useState(''), [qrErr, setQrErr] = useState(''), [copied, setCopied] = useState(null)

  const shorten = (e) => {
    e.preventDefault()
    const v = url.trim()
    if (!v) return setErr('Please enter a long URL.')
    if (!valid(v)) return setErr('Please enter a valid URL.')
    if (alias && alias.trim().length < 5) return setErr('Alias must be at least 5 characters.')
    const full = normalizeWebUrl(v)
    const code = alias.trim() || Math.random().toString(36).slice(2, 8)
    setLinks((current) => [{ id: Date.now(), long: full, short: `${domain}/${code}` }, ...current])
    setUrl(''); setAlias(''); setErr('')
  }
  const makeQr = (e) => {
    e.preventDefault()
    if (!valid(url.trim())) return setErr('Please enter a valid URL.')
    setQr(normalizeWebUrl(url.trim())); setQrErr(''); setErr('')
  }
  const copy = async (l) => {
    try {
      await navigator.clipboard.writeText('https://' + l.short)
      setCopied(l.id); setErr('')
      setTimeout(() => setCopied(null), 1500)
    } catch {
      setCopied(null)
      setErr('Could not copy the link. Please copy it manually.')
    }
  }
  const input = 'w-full rounded border border-slate-300 bg-white px-3 py-2.5 outline-none focus:border-tu-teal'

  return (
    <section className="bg-tu-navy text-white">
      <div className="mx-auto max-w-[1380px] px-6 pb-16 pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_563px]">
          <div>
            <h1 className="font-heading text-4xl font-bold leading-[1.5] sm:text-5xl sm:leading-[1.4]">URL Shortener, Branded Short Links &amp; Analytics</h1>
            <p className="mt-6 max-w-xl text-lg leading-8">Welcome to the original link shortener, making the web simpler since 2002.</p>
            <p className="mt-4 max-w-xl text-lg leading-8">Use branded domains for fully custom links, follow your link analytics, and unlock more powerful tools with a paid plan.</p>
            <div className="mt-6 flex gap-4"><Btn v="white" onClick={() => go('plans')}>View Plans</Btn><Btn onClick={() => go('signup')}>Create Free Account</Btn></div>
          </div>

          <div className="overflow-hidden rounded-lg text-slate-800">
            <div className="flex">
              <button onClick={() => setTab('link')} className={`flex-1 px-5 py-5 font-heading font-bold ${tab === 'link' ? 'rounded-t-lg bg-tu-bg' : 'bg-tu-teal text-white'}`}>🔗 Shorten a Link</button>
              <button onClick={() => setTab('qr')} className={`flex-1 px-5 py-5 font-heading font-bold ${tab === 'qr' ? 'rounded-t-lg bg-tu-bg' : 'bg-tu-teal text-white'}`}>▦ Generate QR Code</button>
            </div>
            <form onSubmit={tab === 'link' ? shorten : makeQr} className="bg-tu-bg p-5">
              <label className="font-semibold">➤ Long URL <span className="text-red-600">*</span></label>
              <input className={`${input} mt-2`} value={url} onChange={(e) => setUrl(e.target.value)} placeholder="Paste long URL here" />
              {tab === 'link' ? (
                <>
                  <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-end gap-x-2 gap-y-2">
                    <label className="font-semibold">🌐 Domain</label><span /><label className="font-semibold">🖋 Alias (optional)</label>
                    <select className={input} value={domain} onChange={(e) => setDomain(e.target.value)}><option>tinyurl.com</option><option>tiny.one</option></select>
                    <span className="pb-2 text-xl">/</span>
                    <input className={input} value={alias} onChange={(e) => setAlias(e.target.value)} placeholder="Add alias here" />
                  </div>
                  <p className="mt-1 text-right text-xs text-slate-500">Must be at least 5 characters</p>
                  {err && <p className="mt-2 text-sm font-medium text-red-600">{err}</p>}
                  <Btn v="green" type="submit" className="mt-5 w-full">Shorten Link</Btn>
                  <p className="mt-4 text-xs italic">By clicking Shorten Link, you agree with our <a className="not-italic text-tu-teal">Terms of Service</a>, <a className="text-tu-teal">Privacy Policy</a>, and <a className="text-tu-teal">Use of Cookies</a>.</p>
                </>
              ) : (
                <>
                  {err && <p className="mt-2 text-sm font-medium text-red-600">{err}</p>}
                  <Btn v="green" type="submit" className="mt-5 w-full">Generate QR Code</Btn>
                  {qrErr && <p className="mt-2 text-sm font-medium text-red-600" role="alert">{qrErr}</p>}
                  {qr && <div className="mt-5 flex justify-center"><div className="rounded bg-white p-3 shadow"><QR text={qr} onError={setQrErr} /></div></div>}
                </>
              )}
            </form>
          </div>
        </div>

        <h2 className="mt-10 font-heading text-2xl font-bold">Your Recent Links:</h2>
        <div className="mt-4 space-y-2 text-slate-800">
          {links.length === 0 && <div className="rounded bg-tu-bg px-4 py-3 font-semibold">ⓘ &nbsp;No links yet in your history</div>}
          {links.map((l) => (
            <div key={l.id} className="flex items-center justify-between gap-3 rounded bg-tu-bg px-4 py-3">
              <div className="min-w-0"><p className="truncate text-sm text-slate-500">{l.long}</p><p className="font-bold text-tu-teal">{l.short}</p></div>
              <Btn onClick={() => copy(l)} className="!py-2 text-sm">{copied === l.id ? 'Copied ✓' : 'Copy'}</Btn>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
