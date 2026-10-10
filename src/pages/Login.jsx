import AuthForm from '../components/auth/AuthForm'
import AuthSidePanel from '../components/auth/AuthSidePanel'

export default function Login() {
  return (
    <div className="grid min-h-screen font-body text-slate-900 lg:grid-cols-2">
      <AuthForm mode="login" />
      <AuthSidePanel mode="login" />
    </div>
  )
}
