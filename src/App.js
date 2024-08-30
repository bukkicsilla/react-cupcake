import Cupcakes from "./Cupcakes";
import CupcakeShow from "./CupcakeShow";
import axios from "axios";
import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import NewCupcakeForm from "./NewCupcakeForm";
import UpdateCupcakeForm from "./UpdateCupcakeForm";

const BASE_URL = "http://localhost:5000/api/cupcakes";

function App({ cupcakesDefault }) {
  const [cupcakes, setCupcakes] = useState([]);
  useEffect(() => {
    async function getCupcakes() {
      try {
        const res = await axios.get(BASE_URL);
        setCupcakes(res.data.cupcakes);
      } catch (e) {
        console.log("Error", e);
      }
    }
    getCupcakes();
  }, [cupcakes]);
  async function addCupcake(data = {}) {
    const res = await axios.post(BASE_URL, data);
  }
  async function updateCupcake(data = {}) {
    const res = await axios.patch(`${BASE_URL}/${data.id}`, data);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/cupcakes" element={<Cupcakes cupcakes={cupcakes} />} />
          <Route
            path="/addcupcake"
            element={<NewCupcakeForm addCupcake={addCupcake} />}
          />
          <Route path="/cupcakes/:id" element={<CupcakeShow />} />
          <Route
            path="/cupcakes/:id/update"
            element={<UpdateCupcakeForm updateCupcake={updateCupcake} />}
          />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
App.defaultProps = {
  cupcakesDefault: [
    {
      id: 1,
      flavor: "Chocolate",
      size: "Large",
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1590080874810-8180c3eb1016?q=80&w=2996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      flavor: "Rose",
      size: "Medium",
      rating: 5.0,
      image:
        "https://plus.unsplash.com/premium_photo-1702834003813-84c30abd6f6d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      flavor: "Fig",
      size: "Small",
      rating: 7.0,
      image:
        "https://images.unsplash.com/photo-1636981543340-fe453a341a85?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};
export default App;
