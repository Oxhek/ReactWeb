import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import App from './Routes/App'
import Changelog, {RawChangelog} from './Routes/Launcher/Changelog'
import Launcher from './Routes/Launcher/Launcher'
import Assets from './Routes/Launcher/Assets'
import Error from './Routes/Error'
import './index.css'
import './Routes/App.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />
  },
  {
    path: '/launcher',
    element: <Launcher />,
    errorElement: <Error />
 },
 {
    path: '/Launcher/assets',
    element: <Assets />,
    errorElement: <Error />
 
 },
{
  path: '/launcher/changelog',
        element: <Changelog />,
          errorElement: <Error />
},
{
          path: '/launcher/changelog/raw',
          element: <RawChangelog />,
          errorElement: <Error />
},
{
  path: "/launcher/logo",
  element: <img src="../public/Logo.svg" style={{width: 200+"px", height: 200+"px"}}alt="Game Launcher Logo"/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <div className='footer'><h5>Launcher: V0.2</h5></div>
  </React.StrictMode>,
)
