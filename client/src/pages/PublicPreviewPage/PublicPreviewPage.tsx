import { useParams } from 'react-router-dom'
import { styles } from './PublicPreviewPage.styles'

export default function PublicPreviewPage() {
  const { id } = useParams<{ id: string }>()

  return (
    <main className={styles.page}>
      <div className={styles.card}>
        <h1 className={styles.title}>Public Preview</h1>
        <p className={styles.subtitle}>
          Read-only view of project <code>{id}</code> — wired up in Phase 6,
          no login required.
        </p>
      </div>
    </main>
  )
}
