import './Assets.css'
import '../App.css'

export default function Assets()
{
    return (
        <div className="assets">
            <div className="Header">
                <h1>Assets</h1>
            </div>
            <div className="assets-list">
            <div className="assets-list-item"><img src="/icons8-subfusil-ametrallador-64.png"/> - <a target="_blank" href="https://icons8.com/icon/50nMHsbwCzHj/subfusil-ametrallador">Subfusil ametrallador icon by Icons8</a></div>
            <div className="assets-list-item"><img src="/icons8-engranaje-48.png"/> - <a target="_blank" href="https://icons8.com/icon/104923/engranaje">Engranaje icon by Icons8</a></div>
            <div className="assets-list-item"><img src="/404.png" style={{width: 60+"px", height: 60+"px"}}/> - <a href="https://www.flaticon.com/free-icons/code" title="code icons">Code icons created by catkuro - Flaticon</a></div>
            </div>
        </div>

        )
}

