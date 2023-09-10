import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom"
import './styles/index.css'
import TodoList from './modules/todo-list/TodoList'
import Pokemon from './modules/pokemon/Pokemon'
import Dashboard from './modules/dashboard/Dashboard'
import { navSettings } from './routers/nav-settings'

const router = createHashRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: navSettings.navItems[1].path,
    element: <TodoList />,
  },
  {
    path: navSettings.navItems[2].path,
    element: <Pokemon />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
