import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { CategoryProvider } from "./context/category";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryProvider>
      <App />
    </CategoryProvider>
  </React.StrictMode>
);
