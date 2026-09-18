import { styles } from './MyProjectsPage.styles'

export default function MyProjectsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.subtitle}>
          Your generated sites will be listed here (wired up in Phase 12) —
          this route is guarded once auth exists in Phase 3.
        </p>
      </div>
    </main>
  )
}
