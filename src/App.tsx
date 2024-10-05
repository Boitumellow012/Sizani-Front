import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnBoarding from "./pages/OnBoarding";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AppLayout from "./context/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout children={undefined} />}>
          <Route path="/" element={<OnBoarding/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/sign-in" element={<SignIn/>} />

          {/* TODO: WRAP PROTECTED ROUTES WITH AUTH CONTEXT */}
          <Route path="/dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
