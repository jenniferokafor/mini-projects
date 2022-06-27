import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/superheroes">Superheroes</Link>
        </li>

        <li>
          <Link to="/rqsuperheroes">rqsuperheroes</Link>
        </li>
      </nav>
    </div>
  )
}
