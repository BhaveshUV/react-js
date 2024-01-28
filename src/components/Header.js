import { LOGO_URL } from "../../utils/constant";
import { useState } from "react";

export let Header = () => {
    const [logBtn, setLogBtn] = useState("Login");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={LOGO_URL} />
            </div>
            <ul className='nav-items'>
                <li style={{ color: "#ebdb34" }}>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
                <li><button onClick={() => {
                    (logBtn === "Login") ? setLogBtn("Logout") : setLogBtn("Login");
                }}>{logBtn}</button></li>
                {/* <button>Login</button> */}
            </ul>
        </div>
    );
}

export default Header;