import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>This is my first React component</p>
      <p>... and it is beautiful!</p>
    </article>
  );
}

export default function App() {
  return <HelloWorldArticle />;
}
