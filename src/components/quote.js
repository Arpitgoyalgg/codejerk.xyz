import { useState, useEffect } from "react";

export default function Quote() {

    // fetch data from API
    const [quote, setQuote] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(res => res.json())
            .then(data => {
                setQuote(data);
                setLoading(false);
            })
            .catch(() => setError(true));
    }, []);


  return (
    <div className="text-center p-16 border-2 border-rose-600 rounded-lg">
      <h1 className="text-4xl">{quote.content}</h1>
      <p className="text-pink-600 mt-5">- {quote.author}</p>
    </div>
  )
}
