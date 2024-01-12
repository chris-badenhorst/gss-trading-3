import HomePage from "./pages/HomePage";
import BuildingPage from "./pages/BuildingPage";
import ElectricalPage from "./pages/ElectricalPage";
import SecurityPage from "./pages/SecurityPage";
import PlumbingPage from "./pages/PlumbingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import UserLoginPage from "./pages/UserLoginPage";
import UserRegisterPage from "./pages/UserRegisterPage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import OrderPage from "./pages/OrderPage";
import CartPage from "./pages/CartPage";
import ContactPage from "./pages/ContactPage";
import UserProfilePage from "./pages/UserProfilePage";
import AdminPage from "./pages/AdminPage";
import ProductDetailView from "./pages/ProductDetailView";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <div className="App">
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/building" element={<BuildingPage />} />
          <Route path="/electrical" element={<ElectricalPage />} />
          <Route path="/plumbing" element={<PlumbingPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<UserLoginPage />} />
          <Route path="/register" element={<UserRegisterPage />} />
          <Route path="/detail" element={<ServiceDetailPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/p-detail" element={<ProductDetailView />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
