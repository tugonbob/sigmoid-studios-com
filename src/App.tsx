import { Route, Routes } from "react-router-dom";
import "./assets/styles.css";
import { HomePage } from "./pages";
// @ts-ignore
import { MathJaxContext } from "better-react-mathjax";

function App() {
  return (
    <MathJaxContext>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MathJaxContext>
  );
}

export default App;
