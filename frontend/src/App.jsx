import { Routes, Route } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import UserDashboard from "../components/UserDashboard";
import CoachDashboard from "../components/CoachDashboard";
import MainPage from "../components/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/user-dashboard" element={<UserDashboard />} />
      <Route path="/coach-dashboard" element={<CoachDashboard />} />
    </Routes>
  );
};

export default App;
