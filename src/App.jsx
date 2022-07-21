import "./App.css";
import data from "./data/data";
import Card from "./components/card";

function App() {
  return (
    <div>
      <Card question={data.q1} answer={data.a1} />
      <Card question={data.q2} answer={data.a2} />
      <Card question={data.q3} answer={data.a3} />
      <Card question={data.q4} answer={data.a4} />
    </div>
  );
}

export default App;
