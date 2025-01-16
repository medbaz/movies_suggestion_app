import { BrowserRouter as Routers , Routes , Route } from "react-router-dom"
import Layout from "./layout/layout"
import Homme from "./components/Homme"



function App() {


  return (
    <Routers>
      <Routes >
        <Route path="/" element={<Layout> <Homme/> </Layout>} >  </Route>
      </Routes>

    </Routers>
  
  )
}

export default App
