import HomePage from "./pages/Home/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BusSchedulesResults from "./pages/Bus-Schedules-Results/BusSchedulesResults";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Faq from "./pages/Faq/Faq"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/bus-schedules-results"
          element={<BusSchedulesResults />}
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
