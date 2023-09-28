import React, { useState, useEffect } from "react";
import "./CovidStatistics.css";

const CovidStatistics = () => {
  const [loading, setLoading] = useState(true);
  const [statistics, setStatistics] = useState(null);

  useEffect(() => {
    fetchStatistics();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch("https://covid19.mathdro.id/api");
      const data = await response.json();
      setStatistics(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching COVID-19 statistics:", error);
      setLoading(false); // Update loading state on error
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading"></div>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className="covid-container">
      <h2>COVID-19 Statistics</h2>
      {statistics ? (
        <>
          <p>Confirmed cases: {statistics.confirmed.value}</p>
          <p>Recovered cases: {statistics.recovered.value}</p>
          <p>Deaths: {statistics.deaths.value}</p>
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default CovidStatistics;
