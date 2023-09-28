import React from "react";
import QuoteList from "./components/QuoteList";
import CovidStatistics from "./components/CovidStatistics";
import RandomUsers from "./components/RandomUsers";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Data Fetcher App</h1>
      <QuoteList />
      <CovidStatistics />
      <RandomUsers />
    </div>
  );
};

export default App;
