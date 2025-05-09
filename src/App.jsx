import { BrowserRouter, Route, Routes } from "react-router-dom"
import AllUsers from "./components/AllUsers"
import Dictionary from "./components/Dictionary"
import Navbar from "./components/Navbar"
import Post from "./components/Post"
import Users from "./components/Users"


function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/post" element={<Post />} />
          <Route path="/allusers" element={<AllUsers />} />
          <Route path="//dictionary" element={<Dictionary />} />
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
