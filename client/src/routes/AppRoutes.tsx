import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '@/constants/routes'
import BuilderPage from '@/pages/BuilderPage'
import CommunityPage from '@/pages/CommunityPage'
import HomePage from '@/pages/HomePage'
import LoginPage from '@/pages/LoginPage'
import MyProjectsPage from '@/pages/MyProjectsPage'
import NotFoundPage from '@/pages/NotFoundPage'
import PublicPreviewPage from '@/pages/PublicPreviewPage'
import RegisterPage from '@/pages/RegisterPage'

/**
 * The single route table for the whole app. Auth guarding (redirecting
 * /projects and /builder/:id to /login when logged out) is added in
 * Phase 3 once ProtectedRoute + the Redux auth slice exist.
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route path={ROUTES.PROJECTS} element={<MyProjectsPage />} />
      <Route path={ROUTES.COMMUNITY} element={<CommunityPage />} />
      <Route path={ROUTES.BUILDER_PATTERN} element={<BuilderPage />} />
      <Route path={ROUTES.PUBLIC_PREVIEW_PATTERN} element={<PublicPreviewPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
