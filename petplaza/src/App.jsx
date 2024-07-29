import Navbar from "./components/navbar"
import Footer from "./components/footer"
import { Routes, Route,useLocation } from "react-router-dom";
import Home from "./components/home";
import Add from "./components/addPet";
import ServicePage from "./components/service";
import PetDetails from "./components/petDetails";
import UserLogin from "./components/login";
import UpdateDetails from "./components/update";
import ProductsPage from "./components/product";
import AddFeedback from "./components/feedback";

function App() {
  const location = useLocation();
  return(
    <div className="APP">
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="add" element={<Add/>}/>
        <Route path="addfeed" element={<AddFeedback/>}/>
        <Route path="/product" element={<ProductsPage/>}/>
        <Route path="service" element={<ServicePage/>}/>
        <Route path="pet/:id" element={<PetDetails/>}/>
        <Route path="update/:id" element={<UpdateDetails/>}/>
        <Route path='/' element={<UserLogin />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  )
}

export default App
