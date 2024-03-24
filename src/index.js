import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { alwaysRedirectHttpsInProduction } from "./util/https";


alwaysRedirectHttpsInProduction();
const root = createRoot(document.getElementById("root"));


root.render(<App />);