// Importing React and ReactDOM from respective packages/dependencies
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import Body from './components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Error from "./components/Error";
import Contact from "./components/Contact"
import Restaurant from './components/Restaurant';
import Login from "./components/Login";

const App = () => {
    return (
        <div id='app'>
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurant />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);