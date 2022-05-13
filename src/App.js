import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/settings/account" element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
