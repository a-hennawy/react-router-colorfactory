import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ createColor }) => {
  const initData = { colorName: "", colorValue: "" };
  const [formData, setFormData] = useState(initData);
  const navigate = useNavigate();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(`Submitted ${formData.colorName}, ${formData.colorValue}`);
    createColor({ ...formData });
    navigate("/colors");
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({ ...fData, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="colorName">Color name</label>
      <input
        type="text"
        placeholder="Color name"
        name="colorName"
        value={formData.colorName}
        onChange={handleChange}
      />

      <label htmlFor="colorValue">Color name</label>
      <input
        type="color"
        placeholder="Color Value"
        name="colorValue"
        value={formData.colorValue}
        onChange={handleChange}
      />
      <button>Submit new color</button>
    </form>
  );
};

export default NewColorForm;
