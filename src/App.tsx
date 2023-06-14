import { Route, Routes } from "react-router-dom";
import "./assets/styles.css";
import { Navbar } from "./components/customComponents/navbar/navbar";
import {
  LinearRegressionPage,
  StanfordCs229Page,
} from "./components/projectComponents/aiml";
import {
  AskGptPage,
  JoshgaocomPage,
} from "./components/projectComponents/appdev";
import {
  PortfolioTrackerPage,
  RealEstateDealFinderPage,
  RedditLaughsPage,
} from "./components/projectComponents/other";
import { HomePage } from "./pages";
// @ts-ignore
import { MathJaxContext } from "better-react-mathjax";

function App() {
  return (
    <MathJaxContext>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </MathJaxContext>
  );
}

export default App;
