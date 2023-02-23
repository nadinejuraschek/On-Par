import "./css/style.css";
import "./css/font.css";

import { App } from "./App";
import { createRoot } from "react-dom/client";

const container = document.getElementById( "root" );
const root = createRoot( container );

root.render( <App /> );
