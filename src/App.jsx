import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Drew's Pizza Shop - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese and stuff" image={"/public/pizzas/pepperoni.webp"}/>
      <Pizza name="Hawaiian" description="ham & pineappl" image={"/public/pizzas/hawaiian.webp"}/>
      <Pizza name="Supreme" description="sausage, onions, and bellpeppers" image={"/public/pizzas/pepperoni.webp"}/>
    </div>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
