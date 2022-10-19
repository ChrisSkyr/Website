import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import { Footer, Protected, Navbar } from './Components/index'
import { Home, About, Products, Account, Login} from './pages/index'
import './styles/common/App.css'


function App() {



  return(
    <>
    <AuthContextProvider>
      <div className="page-container">
          <Navbar/>
          <div className="container">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/account" element={<Protected><Account/></Protected>}/>
                <Route path="/login" element={<Login/>}/>
            </Routes>
          </div>
          <Footer/>
      </div>
    </AuthContextProvider>
    </>
  )
}

export default App;