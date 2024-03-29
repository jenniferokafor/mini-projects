import { useEffect } from "react"
import axios from "axios"

const productsUrl = "https://course-api.com/react-store-products"
const randomUserUrl = "https://randomuser.me/api"

const GlobalInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await axios(productsUrl)
      console.log(responseOne)
    } catch (error) {}
    console.log("global axios instance")
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">global instance</h2>
}
export default GlobalInstance
