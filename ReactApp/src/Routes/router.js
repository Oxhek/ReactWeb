import App from './App'
import Changelog from './Launcher/Changelog'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/launcher/changelog',
    element: <Changelog />,
  }
])

export const RouteProvider = () => { 
    return (
     <RouterProvider router={router}/>
     )
    }