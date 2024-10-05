import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoarding/>} />
        <Route path="/sign-up" element={<SignUp/>} />
        <Route path="/sign-in" element={<SignIn/>} />
        
        
        {/* TODO: WRAP PROTECTED ROUTES WITH AUTH CONTEXT */}
        <Route path="/dashboard" element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
