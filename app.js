// Importing React and ReactDOM from respective packages/dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX (transpiled to react.createElement before it reaches JS engine by BABEL - PARCEL)
// JSX => transpiled by BABEL => react.createElement => reactElement(JS object) => HTMLElement(render)

// let reactIcon = `https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png`;

// const BoxComponent = () => {
//     return (
//         <span style={{backgroundColor: "skyblue", border: "2px solid black", textAlign: "center", padding:"5px 20px"}}>
//             React Functional Component {BoxEmojiComponent()}
//         </span>
//     );
// };

// const BoxEmojiComponent = () => <span>🚀</span>;

// let jsxHeading = (
//     <div>
//         <h1 className='head' tabIndex="1">
//             Namaste React (JSX) 🚀
//         </h1>
//         <img src={reactIcon} height={100} /><br />

//         <a href="./">LINK by JSX</a><br />

//         <strong>STRONG</strong><br />

//         <span>HTML Entities using JSX: &hearts; &copy;</span><br />

//         <label for="name">Enter your name: </label>
//         <input id="name" type="text" /><br /><br />

//         <table border="black" style={{ backgroundColor: "gold", width: "200px", textAlign: "center" }}>
//             <caption><strong>Multiplication Table of 2 (JSX)</strong></caption>
//             <thead>
//                 <tr>
//                     <th>Two</th>
//                     <th>Times</th>
//                     <th>Equals</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td rowSpan={10}>2</td>
//                     <td>1</td>
//                     <td>2</td>
//                 </tr>
//                 <tr>
//                     <td>2</td>
//                     <td>4</td>
//                 </tr>
//                 <tr>
//                     <td>3</td>
//                     <td>6</td>
//                 </tr>
//                 <tr>
//                     <td>4</td>
//                     <td>8</td>
//                 </tr>
//                 <tr>
//                     <td>5</td>
//                     <td>10</td>
//                 </tr>
//             </tbody>
//         </table><br /><br />

//         <BoxComponent />
//     </div>
// );

// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<BoxComponent/>);
// root.render(<BoxComponent></BoxComponent>);
// root.render(BoxComponent());

//------------------------ Assignment ------------------------//

// Using React.createElement
let reactCode = React.createElement("h1", {id: "head1"},[
    "Heading h1",
    React.createElement("h2", {id: "head2"},[
        "Heading h2",
        React.createElement("h3", {id: "head3"}, [
            "Heading h3"
        ])
    ])
]);
// Using JSX
let jsxCode = (<h1 id="head1">
    Heading h1
    <h2 id="head2">
        Heading h2
        <h3 id="head3">Heading h3</h3>
    </h2>
</h1>);

let JsxCodeComp =  () => (<h1 className="main" id="head1">
    Heading h1
    <h2 id="head2">
        Heading h2
        <h3 id="head3">
            Heading h3
            {jsxCode}
        </h3>
    </h2>
</h1>);

// root.render(reactCode);
// root.render(jsxCode);
root.render(<JsxCodeComp/>);

//------------------------ Assignment 2------------------------//

let HeaderComp = () => (
    <div id="search-bar">
        <span>Logo</span>
        <input type="text"></input>
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
    </div>
);

root.render(HeaderComp());