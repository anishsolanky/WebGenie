import { styles } from './CommunityPage.styles'

export default function CommunityPage() {
  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Community</h1>
        <p className={styles.subtitle}>
          Published sites from every user will be browsable here — wired up
          in Phase 12, no login required to view.
        </p>
      </div>
    </main>
  )
}
