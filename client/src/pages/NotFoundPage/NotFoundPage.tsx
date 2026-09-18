import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { styles } from './NotFoundPage.styles'

export default function NotFoundPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>404 — Page not found</h1>
        <p className={styles.subtitle}>That page doesn't exist.</p>
        <NavLink to={ROUTES.HOME} className={styles.homeLink}>
          Back home
        </NavLink>
      </div>
    </main>
  )
}
