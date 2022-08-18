import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { NavBar } from "./components/NavBar";
import { ShopingProvider } from "./context/ShopingCartContext";
import { ShopingCartItem } from "./components/ShopingCartItem";

function App() {
  return (
    <ShopingProvider>
      <NavBar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Routes>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Routes>
          <Route path="/Store" element={<Store />}></Route>
        </Routes>
        <Routes>
          <Route path="/ItemCart" element={<ShopingCartItem />}></Route>
        </Routes>
      </Container>
    </ShopingProvider>
  );
}

export default App;
