import { useState } from 'react'
import Button from '../Modules/Button'
import './App.css'

function App() {

  return (
    <div className="App">
      <div className='Header'>
        <h1 className="Name">D1903GL</h1>
      </div>
      <div className='description'>
        <div className="DescriptionInfo"><img src="/icons8-subfusil-ametrallador-64.png"></img><h5>Description</h5></div> <h3>D1903GL(D1903 GameLauncher) is a Game Downloader / Launcher for playing my own game without change launchers<br /> <br />·Features:<br/>·GameDownload<br/>·GameRunning<br/>·ConfigChange</h3>
      </div>
      <div className="ToDo">
      <ul>
        <h3>ToDo</h3>
        <li className='ToDoItem'>Translation system</li>
      </ul>
      </div>
      <div className="Interface">
      <a href="/launcher"><Button name="launcher" /></a>
      <div type="separator"></div>
      <a href="/launcher/assets"><Button name="Assets" /></a>
      </div>
    </div>
  )
}

export default App
