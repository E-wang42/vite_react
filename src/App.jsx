import "./Styling/App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import data from "./data/data.js";

function App() {
  const card = data.map((content) => {
    return <Card key={content.id} {...content} />;
  });

  return (
    <main>
      <Navbar />
      <section className="section--card">{card}</section>
    </main>
  );
}

export default App;
