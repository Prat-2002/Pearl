import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Products from './Components/Products';
import AboutUs from './Components/AboutUs';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Review from './Components/Review';
import Login from './Pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    
      {/* <Route path='/' element={<Login />}></Route> */}
      <Route path='/' element={[<Navbar />,<Home/>,<Products/>,<AboutUs/>,]}></Route>
      {/* <Route path='/' element={<Home />}></Route>
      <Route path='/' element={<AboutUs />}></Route>
      <Route path='/' element={<Products />}></Route> */}
      <Route path='/review' element={<Review />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
