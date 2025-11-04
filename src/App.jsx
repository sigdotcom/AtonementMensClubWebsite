import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Christmas from "./pages/Christmas/Christmas";
import Contact from "./pages/Contact/Contact";
import "./App.css";

//probably don't need to touch
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout wraps all pages that share Navbar and Footer */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="events" element={<Events />} />
          <Route path="christmas" element={<Christmas />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
