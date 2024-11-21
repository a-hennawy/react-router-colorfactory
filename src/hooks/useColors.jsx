import { useState } from "react";
import { Link } from "react-router-dom";
const useColors = () => {
  const [colors, setColors] = useState([]);

  const addColor = (colorObj) => {
    setColors((colors) => [...colors, colorObj]);
  };
  console.log("useColors: colors==>", colors);
  colors.length > 0
    ? console.log("colors is populated:", colors)
    : console.log("colors failed to populate");
  const colorListLinks =
    colors.length > 0 ? (
      colors.map((color) => (
        <Link key={color.colorName} to={`/colors/${color.colorName}`}>
          {color.colorName}
        </Link>
      ))
    ) : (
      <p>No colors added yet!</p>
    );
  return { colors, addColor, colorListLinks };
};

export default useColors;
