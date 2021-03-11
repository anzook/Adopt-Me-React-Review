import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Moose" animal="dog" breed="Irishdoodle" />
      <Pet name="Muffin" animal="dog" breed="Mixed" />
      <Pet name="Maddie" animal="horse" breed="Quarterhorse" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
