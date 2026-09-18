import { NavLink } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import { styles } from './Navbar.styles'

const NAV_LINKS = [
  { to: ROUTES.HOME, label: 'Home' },
  { to: ROUTES.PROJECTS, label: 'My Projects' },
  { to: ROUTES.COMMUNITY, label: 'Community' },
]

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <NavLink to={ROUTES.HOME} className={styles.brand} end>
          Web<span className={styles.brandAccent}>Genie</span>
        </NavLink>

        <nav className={styles.links}>
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) => styles.link(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <NavLink to={ROUTES.LOGIN} className={styles.loginLink}>
            Log in
          </NavLink>
          <NavLink to={ROUTES.REGISTER} className={styles.signupLink}>
            Sign up
          </NavLink>
        </div>
      </div>
    </header>
  )
}
