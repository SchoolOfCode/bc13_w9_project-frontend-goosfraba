import { useEffect, useState } from "react";

/**
 * Importing { useEffect, useState } from React
 * This function brings a random quote from a chosen API ("https://type.fit/api/quotes")
 * The setAuthor and the setQuotes are updates with the response of the API
 * Two useStates are used; one for Author and one for Quotes 
 * @returns the random quote and the author
 */



function QuoteGenerator() {
  const [quotes, setQuotes] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    async function getRandomQuote() {
      let random = Math.floor(Math.random() * 1646) + 1;
      const response = await fetch('https://type.fit/api/quotes', {
        headers: { accept: 'application/json' },
      });
      const data = await response.json();
      if (data[random].author !== null) {
        setAuthor(data[random].author);
      }
      setQuotes(data[random].text);
    }
    getRandomQuote();
  }, []);

  return (
    <div className="quote">
      <h2>{quotes}</h2>
      <h3>{author}</h3>
    </div>
  );
}

export default QuoteGenerator;