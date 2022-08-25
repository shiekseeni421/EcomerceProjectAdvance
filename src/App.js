import { Routes, Route } from "react-router-dom";
import { CategoryPage } from "./pages/CategoryPage";
import { Store } from "./pages/Store";
import { NavBar } from "./components/NavBar";
import { ShopingProvider } from "./context/ShopingCartContext";
import { ShopingCartItem } from "./components/ShopingCartItem";
import { ViewAllProjects } from "./components/ViewAllProjects";
import { UseShopingContext } from "./context/ShopingCartContext";
import "./tailwind.css";

function App() {
  return (
    <ShopingProvider>
      <NavBar />
      <div className="mb-4">
        <Routes>
          <Route path="/category" element={<CategoryPage />}></Route>
        </Routes>
        <Routes>
          <Route path="/Store" element={<Store />}></Route>
        </Routes>
        <Routes>
          <Route path="/addCart" element={<ShopingCartItem />}></Route>
        </Routes>

        <Routes>
          <Route path="/" element={<ViewAllProjects />}></Route>
        </Routes>
      </div>
    </ShopingProvider>
  );
}

export default App;
