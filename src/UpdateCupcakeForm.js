import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const BASE_URL = "http://localhost:5000/api/cupcakes";

const UpdateCupcakeForm = ({ updateCupcake }) => {
  const [formData, setFormData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function showCupcake() {
      try {
        const res = await axios.get(`${BASE_URL}/${id}`);
        setFormData(res.data.cupcake);
      } catch (e) {
        console.log("Error", e);
      }
    }
    showCupcake();
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateCupcake({ ...formData, id: id });
    navigate(`/cupcakes/${id}`);
  };
  return (
    <div>
      <h2>Update cupcake: {id} </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="flavor">Flavor:</label>
          <input
            type="text"
            name="flavor"
            id="flavor"
            placeholder="Flavor"
            value={formData.flavor}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="size">Size:</label>
          <input
            type="text"
            name="size"
            id="size"
            placeholder="Size"
            value={formData.size}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            name="rating"
            id="rating"
            step="0.01"
            min="1"
            max="10"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    </div>
  );
};
export default UpdateCupcakeForm;
