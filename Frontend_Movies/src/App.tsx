import { BrowserRouter as Routers , Routes , Route } from "react-router-dom"
import Layout from "./layout/layout"
import Homme from "./components/Homme"
import Register from "./components/Register.tsx"
import Login from "./components/Login.tsx"
import Suggestion from "./components/Suggesstion.tsx"
import Ratings from "./components/Ratings.tsx"
import RateMovies from "./components/RateMovies.tsx"
import Watchlater from "./components/watchlater.tsx"
function App() {


  return (
    <Routers>
      <Routes >
        <Route path="/" element={<Layout> <Homme/> </Layout>} >  </Route>
        <Route path='/Sign_up' element={<Layout > <Register/></Layout>} ></Route>
        <Route path='/Sign_in' element={<Layout > <Login/></Layout>} ></Route>
        <Route path="/suggestions" element={<Layout> <Suggestion/> </Layout>} >  </Route>
        <Route path="/rate_movies" element={<Layout> <RateMovies/> </Layout>} >  </Route>
        <Route path="/watch_later" element={<Layout> <Watchlater/> </Layout>} >  </Route>
        <Route path="/ratings" element={<Layout> <Ratings/> </Layout>} >  </Route>
        <Route path="*" element={<Layout> <Homme/> </Layout>} >  </Route>
      </Routes>

    </Routers>
  
  )
}

export default App
