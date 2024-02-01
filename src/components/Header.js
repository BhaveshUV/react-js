import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

export let Header = () => {
    const [logBtn, setLogBtn] = useState("Login");
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} />
            </div>
            <ul className='nav-items'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li>Cart</li>
                <li>
                    {/* Way 1 */}
                    {logBtn === "Login" ? <Link to="/login"><button onClick={() => setLogBtn("Logout")}>{logBtn}</button></Link> : <Link to="/"><button onClick={() => setLogBtn("Login")}>{logBtn}</button></Link>}

                    {/* Way 2 */}
                    {/* <Link to="/login"><button onClick={() => {
                        let logOut = () => {
                            setLogBtn("Login");
                            window.location.href = "/";
                        }
                        (logBtn === "Login") ? setLogBtn("Logout") : logOut();
                    }}>{logBtn}</button></Link> */}
                </li>
                {/* <button>Login</button> */}
            </ul>
        </div>
    );
}

export default Header;