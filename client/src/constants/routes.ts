/**
 * Single source of truth for every URL in the app. Nothing outside this
 * file should ever write a route path as a raw string literal.
 *
 * Static paths are plain strings. Dynamic paths need TWO forms:
 *  - a *_PATTERN string for <Route path={...}> (react-router's :param syntax)
 *  - a function for building a real href/navigate target, e.g. ROUTES.BUILDER(id)
 */
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  PROJECTS: '/projects',
  COMMUNITY: '/community',

  BUILDER_PATTERN: '/builder/:id',
  BUILDER: (id: string) => `/builder/${id}`,

  PUBLIC_PREVIEW_PATTERN: '/public/:id',
  PUBLIC_PREVIEW: (id: string) => `/public/${id}`,
} as const
