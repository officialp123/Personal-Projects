import React, { useState, useEffect } from "react";
import "./QuoteList.css";

const QuoteList = () => {
  const [loading, setLoading] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    try {
      const response = await fetch("https://quotable.io/quotes?page=1");
      const data = await response.json();
      setQuotes(data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching quotes:", error);
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
    <div className="quote-container">
      <h2>Quotes</h2>
      <ul>
        {quotes.map((quote) => (
          <li key={quote._id}>{quote.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuoteList;
