import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import BuildingPage from "./pages/BuildingPage";
import ElectricalPage from "./pages/ElectricalPage";
import SecurityPage from "./pages/SecurityPage";
import PlumbingPage from "./pages/PlumbingPage";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/building" element={<BuildingPage />} />
          <Route path="/electrical" element={<ElectricalPage />} />
          <Route path="/plumbing" element={<PlumbingPage />} />
          <Route path="/security" element={<SecurityPage />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
