import { styles } from './HomePage.styles'

export default function HomePage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Home</h1>
        <p className={styles.subtitle}>
          The hero + AI prompt box lands here in Phase 4.
        </p>
      </div>
    </main>
  )
}
