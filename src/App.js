const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Drew's Pizza Shop"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: " delecious Pepperoni",
    }),
    React.createElement(Pizza, {
      name: "Americano Pizza",
      description: "French fries and hot dogs",
    }),
    React.createElement(Pizza, {
      name: "The Hawaiian",
      description: "pineapple and ham",
    }),
    React.createElement(Pizza, {
      name: "Chicken Pizza?",
      description: " chicken nuggies on your pizza",
    }),
    React.createElement(Pizza, {
      name: "baked potato",
      description: "lots of potatoes there",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
