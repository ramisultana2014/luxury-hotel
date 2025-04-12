import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.tsx";
import { StyleSheetManager } from "styled-components";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StyleSheetManager shouldForwardProp={() => true}>
      <Provider store={store}>
        <App />
      </Provider>
    </StyleSheetManager>
  </StrictMode>
);
