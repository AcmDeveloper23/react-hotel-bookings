import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Bookmarks from "./pages/Bookmarks";
import Details from "./pages/Details";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </Router>
  )
}

export default App;