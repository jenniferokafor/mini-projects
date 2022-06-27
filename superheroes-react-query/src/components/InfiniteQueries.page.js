import { useInfiniteQuery } from "react-query"
import axios from "axios"

const fetchColors = () => {
  return axios.get(`http://localhost:4000/colors`)
}

const InfiniteQueriesPage = () => {
  const { isLoading, isError, error, data } = useInfiniteQuery(
    "colors",
    fetchColors
  )

  if (isLoading) {
    return <h2>Loading</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <div>
        {data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id}. {color.label}
              </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InfiniteQueriesPage
