import Title from "./components/Title"
import "./axios/global"
import Interceptors from "./components/requests/interceptors-request"

function App() {
  return (
    <div>
      <Title />
      <Interceptors />
    </div>
  )
}

export default App
