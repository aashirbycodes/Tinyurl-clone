import useGo from '../../hooks/useGo'

export default function AuthSidePanel({ mode }) {
  const go = useGo()
  const login = mode === 'login'

  return (
    <div className="relative hidden flex-col items-center justify-center bg-gradient-to-br from-tu-teal to-tu-navy px-10 text-center text-white lg:flex">
      <button onClick={() => go('home')} className="absolute right-8 top-6 grid h-4 w-4 place-items-center rounded-sm bg-slate-300 text-[10px] text-slate-700" aria-label="close">✕</button>

      <div className="h-80 w-full max-w-md overflow-hidden rounded-2xl shadow-2xl">
        <img
          src={login
            ? 'https://tinyurl.com/build/assets/login-image-CgwmjQq8.png'
            : 'https://tinyurl.com/build/assets/sign-up-image-BLCLD85z.png'}
          alt={login ? 'Welcome back illustration' : 'Account creation illustration'}
          className="h-full w-full object-contain"
          loading="lazy"
        />
      </div>

      {login ? (
        <div className="mt-10 space-y-4 font-heading text-xl font-semibold"><p>Welcome Back!</p><p>Your Links Have Missed You</p></div>
      ) : (
        <p className="mt-10 font-heading text-2xl font-semibold">Amplify Your Success with Data-Driven Shortened Links</p>
      )}
    </div>
  )
}
