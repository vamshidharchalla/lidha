import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css';
import ContactUs from "./components/ContactUs";
import Header from './components/Header';
import Home from "./components/Home";

import SocialIcons from "./components/SocialIcons"

function App() {
  return (
   <BrowserRouter>
      <Header />
      <SocialIcons />
      <div className="lidha-wrapper">
        <Routes>
          <Route path="/"  element={ <Home /> } />
          <Route path="/contact-us"  element={ <ContactUs /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
