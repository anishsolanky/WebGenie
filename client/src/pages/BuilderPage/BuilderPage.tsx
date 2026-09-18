import { useParams } from 'react-router-dom'
import { styles } from './BuilderPage.styles'

export default function BuilderPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Builder</h1>
        <p className={styles.subtitle}>
          Project <code>{id}</code> — the Sandpack editor, live preview, and
          chat panel arrive in Phase 5.
        </p>
      </div>
    </main>
  )
}
