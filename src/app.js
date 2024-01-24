// Importing React and ReactDOM from respective packages/dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import Body from './components/Body';

const App = () => {
    return (
        <div id='app'>
            <Header />
            <Body />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App());