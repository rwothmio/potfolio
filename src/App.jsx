import React from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from './store/index'

function App() {
  return (
    <Provider store={store} >
    <BrowserRouter>
      <NavBar />
      <div className="sections">
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
