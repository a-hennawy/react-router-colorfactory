import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import ColorLanding from "./ColorLanding";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ColorLanding />
    </BrowserRouter>
  </StrictMode>
);
