import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./components/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout";
import Dashboard from "./dashboard/Dashboard";
import HomeContent from "./dashboard/HomeContent";
import UserPage from "./components/UserPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<LoginPage />} />
          <Route
            index
            path="/users/:index"
            element={<Dashboard element={<UserPage />} />} />
          <Route
            index
            path="/dash"
            element={<Dashboard element={<HomeContent />} />} />
          <Route path="*" element={<MainLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
