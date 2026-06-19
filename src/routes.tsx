import { createBrowserRouter } from 'react-router-dom'
import MenuTemplate from './layout/Layout'
import DriftPage from './pages/Drift'
import ForzaPage from './pages/Forza'
import HomePage from './pages/Home'
import NotFoundPage from './pages/NotFound'
import TimeAttackPage from './pages/TimeAttack'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MenuTemplate />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'drift', element: <DriftPage /> },
      { path: 'timeattack', element: <TimeAttackPage /> },
      { path: 'forza', element: <ForzaPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])