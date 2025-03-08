import React from "react";
import './index.css'
import Header from "./components/Header";
import Scores from "./components/Scores";
import { HTML_RESULTS } from "./data.js";

function App() {
  return (
    <>
      <Header title="Students results" batchName="Fake Batch Name" />

      <main className="scores-container">
        <Scores courseName="HTML" courseResults={HTML_RESULTS}></Scores>
      </main>
    </>
  );
}

export default App;
