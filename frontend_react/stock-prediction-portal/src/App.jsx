import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "./components/Register"

function App() {

  return (
    <>

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>

   </>
  )
}

export default App 
