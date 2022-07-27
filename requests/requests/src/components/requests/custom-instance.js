import { useEffect } from "react"
import authFetch from "../../axios/custom"
import axios from "axios"

const randomUserUrl = "https://randomuser.me/api"

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const responseOne = await authFetch("/react-store-products")
      const responseTwo = await axios(randomUserUrl)
    } catch (error) {}
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <h2 className="text-center">custom instance</h2>
}
export default CustomInstance
