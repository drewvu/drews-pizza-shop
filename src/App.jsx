import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Drew's Pizza Shop - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese and stuff"/>
      <Pizza name="Hawaiian" description="ham & pineappl"/>
      <Pizza name="Supreme" description="sausage, onions, and bellpeppers"/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
