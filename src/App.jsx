import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dex from "./pages/Dex";

const App = () => {
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          {" "}
        </Route>
        <Route path="/dex" element={<Dex />}></Route>
      </Routes>
      <Home />
      <Dex />
    </BrowserRouter>
  </>;
};

export default App;
