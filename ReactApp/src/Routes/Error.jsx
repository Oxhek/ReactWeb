import { useRouteError } from "react-router-dom"
import './Error.css'

export default function Error()
{
    const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page">
        <img src="/404.png" className="errorIcon"></img>
        <div className="error-message">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      </div>
    </div>
  )
}