import "./styles.css";

function Article() {
  return (
    <article>
      <h2 className="article__title">Article</h2>
      <label htmlFor="input"></label>
      <input id="input"></input>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/React_(JavaScript_library)"
      >
        React
      </a>
    </article>
  );
}

export default function App() {
  return <Article />;
}
