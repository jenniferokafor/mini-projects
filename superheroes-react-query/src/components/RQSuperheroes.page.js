import Nav from "./nav"
import useSuperHeroesData from "../hooks/useSuperHeroesData"
import { Link } from "react-router-dom"

export default function RQSuperheroes() {
  const onSuccess = () => {
    console.log("Perform side effect after data fetching")
  }

  const onError = () => {
    console.log("Perform side effect after encountering error")
  }

  const { isLoading, data, isError, error, isFetching, refetch } =
    useSuperHeroesData(onSuccess, onError)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <div className="wrapper">
        <Nav />
        RQSuperheroes
        <button onClick={refetch}>Show superheroes</button>
      </div>

      <div className="data">
        {data?.data.map((hero) => {
          return (
            <div key={hero.id}>
              <Link to={`${hero.id}`}>{hero.name}</Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
