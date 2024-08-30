import { useParams, Link } from "react-router-dom";
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
        setCupcake(res.data.cupcake);
      } catch (e) {
        console.log("Error", e);
      }
    }
    showCupcake();
  }, [cupcake]);

  async function deleteCupcake() {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      console.log("Deleted cupcake with id", id);
    } catch (e) {
      console.log("Error");
    }
  }

  return (
    <div className="CupcakeShow">
      <h2>Cupcake Details {id}</h2>
      <h3>
        {cupcake.flavor}, {cupcake.size}, {cupcake.rating}
        <Link to={"/cupcakes"}>
          <span
            onClick={deleteCupcake}
            style={{ color: "red", cursor: "pointer", marginLeft: "10px" }}
          >
            X
          </span>
        </Link>
      </h3>
      <img id="CupcakeShow-img" src={cupcake.image} alt={cupcake.flavor} />
      <Link to={`/cupcakes/${cupcake.id}/update`}>Update Cupcake</Link>
    </div>
  );
};
export default CupcakeShow;
