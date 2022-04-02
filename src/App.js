import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./page/HomePage";
import Footer from "./component/Footer/Footer";

import TopNav from "./component/TopNav/TopNav";
import HeaderNav from "./component/Navbar/HeaderNav";

import ShopPage from "./page/ShopPage";

import { Routes, Route, Link } from "react-router-dom";
import ErrorPage from "./component/ErrorPage/ErrorPage";
import { WishListProvider } from "./Contexts/wishListContext";

function App() {
  return (
    <WishListProvider>
      {/* Header section */}
      <TopNav />
      <HeaderNav />
      {/* Main Section */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {/* Footer Section */}
      <Footer />
    </WishListProvider>
  );
}

export default App;
