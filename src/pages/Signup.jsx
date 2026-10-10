import AuthForm from '../components/auth/AuthForm'
import AuthSidePanel from '../components/auth/AuthSidePanel'

export default function Signup() {
  return (
    <div className="grid min-h-screen font-body text-slate-900 lg:grid-cols-2">
      <AuthForm mode="signup" />
      <AuthSidePanel mode="signup" />
    </div>
  )
}
