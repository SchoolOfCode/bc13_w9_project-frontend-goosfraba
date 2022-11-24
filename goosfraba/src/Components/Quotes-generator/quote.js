import { useEffect, useState } from "react";

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
      if(data[random].author !== null) {
        setAuthor(data[random].author);
      }
      setQuotes(data[random].text);
    }
    getRandomQuote();
  }, []);

  return (
    <div>
      <h2>{quotes}</h2>
      <h3>{author}</h3>
    </div>
  );
}

export default QuoteGenerator;