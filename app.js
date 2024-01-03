const root = ReactDOM.createRoot(document.getElementById("root"));

let htmlCode = React.createElement("div", {}, [
    React.createElement("h1", {id: "head"}, "LEARNING REACT"),
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "child1 A"),
        React.createElement("h2", {}, "child1 B")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "child2 A"),
        React.createElement("h2", {}, "child2 B")
    ])
]);
// let heading = React.createElement("h1", { id: "head" }, "REACT");
// root.render(heading);
console.log(htmlCode);
console.log('%cThis is a CSS styled text', 'color: blue; font-size: 18px; text-shadow: 1px 1px 0px black');
console.error("Error");
console.warn("Warning");
console.info("Info");
console.log("info");
root.render(htmlCode);