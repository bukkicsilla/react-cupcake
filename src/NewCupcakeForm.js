import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCupcakeForm = ({ addCupcake }) => {
  const INITIAL_STATE = { flavor: "", size: "", rating: 5.0, image: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);
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
    addCupcake({ ...formData });
    navigate("/cupcakes");
  };
  return (
    <div>
      <h2>Add a cupcake</h2>
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
export default NewCupcakeForm;
