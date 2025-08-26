import ReactDOM from 'react-dom/client';

import "./style.css"

import Navbar from './Components/Navbar';
import Searchbar from './Components/Searchbar';
import Products from './Components/Products';
import About from './Components/About';
import Footer from './Components/Footer';





const root = ReactDOM.createRoot(document.getElementById("root"))











root.render(
  <div>
    <Navbar></Navbar>
    <Searchbar></Searchbar>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
)
