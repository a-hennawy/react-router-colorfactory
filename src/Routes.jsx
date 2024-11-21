import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import NewColorPage from "./NewColorPage";
import ColorDetail from "./ColorDetail";

import useColors from "./hooks/useColors";

const RouteList = () => {
  const { colors, addColor, colorListLinks } = useColors();
  console.log(colors);
  console.log(colorListLinks);
  return (
    <Routes>
      <Route
        index
        path="/colors"
        element={<Home colorList={colorListLinks} />}
      />
      <Route
        path="/colors/new"
        element={<NewColorPage createColor={addColor} />}
      />
      <Route path="/colors/:color" element={<ColorDetail />} />
    </Routes>
  );
};

export default RouteList;
