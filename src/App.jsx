import { FaStar } from "react-icons/fa"; 
import './App.css'
import Boost from './components/boost/Boost'
import Collection from './components/Collection/Collection'
import Customers from './components/customers/Customers'
import Hero from './components/hero/Hero'
import Team from "./components/Team/Team";
import Product from "./components/product/Product";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
      {/* <Navbar/> */}
      <Hero/>
      <Collection/>
      <Boost/>
      <Customers/>
      <Product/>
      <Team/>
      <Footer/>

    </>
  )
}

export default App
