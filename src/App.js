import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import AboutUs from "./components/About";
import Offers from "./components/Offers";
import LocationPage from "./LocationPage";


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/offers" element={<Offers/>} />
        <Route path="/tours/:id" element={<LocationPage/>}></Route>

      </Routes>
      <Footer />
    </>
  );
}

export default App;
