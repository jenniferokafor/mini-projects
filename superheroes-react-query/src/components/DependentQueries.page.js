import { useQuery } from "react-query"
import axios from "axios"

const fetchByEmail = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`)
}

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchByEmail(email))
  // next grab channelId info if user exists
  const channelId = user?.data.channelId

  const {} = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  )

  return <div>Dependent queries</div>
}

export default DependentQueriesPage
