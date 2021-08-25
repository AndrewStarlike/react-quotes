import QuoteList from "../components/quotes/QuoteList";

const QUOTES = [
  { id: '1', author: "Andrew", text: "Learning React is fun!" },
  { id: '2', author: "Stan", text: "I am a good learner" },
];

const Quotes = () => {
  return <QuoteList quotes={QUOTES} />;
};

export default Quotes;
