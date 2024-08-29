import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
const BASE_URL = "http://localhost:5000/api/cupcakes";
const CupcakeShow = () => {
  const { id } = useParams();
  const [cupcake, setCupcake] = useState({});
  useEffect(() => {
    async function showCupcake() {
      try {
        const res = await axios.get(`${BASE_URL}/${id}`);
        console.log(res.data.cupcake);
        setCupcake(res.data.cupcake);
      } catch (e) {
        console.log("Error", e);
      }
    }
    showCupcake();
  }, []);
  return (
    <div className="CupcakeShow">
      <h2>Cupcake Details</h2>
      <h3>
        {cupcake.flavor}, {cupcake.size}, {cupcake.rating}
      </h3>
      <img id="CupcakeShow-img" src={cupcake.image} alt={cupcake.flavor} />
    </div>
  );
};
export default CupcakeShow;
