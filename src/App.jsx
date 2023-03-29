import { BrowserRouter,Route, Routes } from "react-router-dom"
import Header from "src/components/header/Header.jsx"
import Footer from "src/components/footer/Footer.jsx"
import Home from "src/components/home/Home.jsx"
import Info from "src/components/info/Info.jsx"
import Search from "src/components/search/Search.jsx"
import Coommunity from "src/components/community/Community.jsx"

function App() {

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/search" element={<Search />} />
        <Route path="/community" element={<Coommunity />} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
