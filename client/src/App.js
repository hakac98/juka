import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/ui/Layout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Home />}></Route>
            <Route path="/korpa" element={<Cart />}></Route>
            <Route path="/prijava" element={<SignIn />}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
