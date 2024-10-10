const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", {}, [
    React.createElement("h2", { id: "heading" }, "this is an another heading"),
    React.createElement("h2", { id: "headin" }, "this is an another heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
