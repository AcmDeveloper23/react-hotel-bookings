import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Bookmarks from "./pages/Bookmarks";
import Details from "./pages/Details";
import Hotels from "./pages/Hotels";
import Login from "./pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App;