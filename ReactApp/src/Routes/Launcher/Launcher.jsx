import "../App.css"
import "./Launcher.css"

export default function Launcher()
{
    return(
        <div className="Header">
            <a href="/launcher/logo" className="alink"><img src="/logo.svg" className="logo"alt="Launcher"/></a>
            <a href="/"><button className="MainButton">Inicio</button></a>
            <a href="https://github.com/Oxhek/GameLauncher/releases"><button className="DownloadButton">Descargar</button></a>
            <a href="/launcher/changelog"><button className="ChangelogButton">Changelog</button></a>
        </div>
    )
}