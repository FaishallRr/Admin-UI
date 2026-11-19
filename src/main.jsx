import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";

import PageLogin from "./latihan/pages/PageLogin";
import PageRegister from "./latihan/pages/PageRegister";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PageRegister />
  </StrictMode>,
);
