import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Bookmarks from "./pages/Bookmarks";
import Details from "./pages/Details";
import Hotels from "./pages/Hotels";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </Router>
  )
}

export default App;