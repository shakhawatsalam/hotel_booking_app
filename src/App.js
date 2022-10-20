import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import List from "./pages/list/List";
import Home from "./pages/home/Home";
import Hotels from "./pages/hotel/Hotels";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotels/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
