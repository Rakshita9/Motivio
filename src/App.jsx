import { useState } from "react";
import quotes from "./data/quotes";
import QuoteCard from "./components/QuoteCard";

function App() {
  const [index, setIndex] = useState(0);

  const nextQuote = () => {
    setIndex((prev) => (prev + 1) % quotes.length);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Daily Motivation</h1>

      <QuoteCard
        text={quotes[index].text}
        image={quotes[index].image}
      />

      <button
        onClick={nextQuote}
        style={{ marginTop: "20px", padding: "10px 20px" }}
      >
        Next Quote
      </button>
    </div>
  );
}

export default App;
