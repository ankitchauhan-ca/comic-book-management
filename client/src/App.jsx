import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import UserProfile from "./pages/UserProfile";

const App = () => {
  const [auth, setAuth] = useState(null); // Save token and user info here

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn setAuth={setAuth} />} />
        <Route
          path="/profile"
          element={
            auth ? (
              <UserProfile token={auth.token} />
            ) : (
              <SignIn setAuth={setAuth} />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
