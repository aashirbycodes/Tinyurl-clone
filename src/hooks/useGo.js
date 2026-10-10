import { useNavigate } from 'react-router-dom'

const paths = { home: '/', plans: '/plans', domains: '/domains', login: '/login', signup: '/signup' }

// go('plans') -> /plans  (ya seedha path de sakte ho: go('/plans'))
export default function useGo() {
  const navigate = useNavigate()
  return (p) => navigate(paths[p] ?? p)
}
