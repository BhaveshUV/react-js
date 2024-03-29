// Importing React and ReactDOM from respective packages/dependencies
import React, { lazy, Suspense, useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from "./components/Header";
import Body from './components/Body';
import { createBrowserRouter, createHashRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from './components/About';
const About = lazy(() => import('./components/About'));
import Error from "./components/Error";
import Contact from "./components/Contact"
import Restaurant from './components/Restaurant';
import Login from "./components/Login";
let Grocery = lazy(() => import("./components/Grocery"));
import Loading from "./components/Loading";
import UserContext from "../utils/UserContext";
import appStore from '../utils/appStore/appStore';
import { Provider } from "react-redux";
import Cart from "../src/components/Cart";

const App = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const data = {
            username: "Bhavesh"
        }

        setUser(data.username);
    }, []);

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ username: user, setUser }}>
                <div id='app' className='flex flex-col gap-8 min-h-[100vh]'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    );
}

const appRouter = createHashRouter([
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
                element: <Suspense fallback={<Loading />}>
                    <About />
                </Suspense>,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<Loading />}><Grocery /></Suspense>,
            },
            {
                path: "/restaurants/:resId",
                element: <Restaurant />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);