import { LOGO_URL } from "../../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

export let Header = () => {
    const [logBtn, setLogBtn] = useState("Login");

    const status = useOnlineStatus();

    let { username } = useContext(UserContext);

    let cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return (
        <div className='flex justify-between items-center box-content h-28 px-8 py-2'>
            <div className="h-28 rounded-lg">
                <img src={LOGO_URL} className="basis-28 min-w-28 h-full rounded-lg" />
            </div>
            <div style={{ position: "absolute", top: 0, left: "50%", color: "white", transform: "translateX(-50%)" }}>
                Online Status: {status ? "✅" : "🔴"}
            </div>
            <ul className='text-white list-none flex gap-4 text-2xl px-4'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li className="text-lime-500"><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/cart">🛒{cartItems.length}</Link></li>
                <li>
                    {/* Way 1 */}
                    {logBtn === "Login" ? <Link to="/login"><button className="bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Logout")}>{logBtn}</button></Link> : <Link to="/"><button className="bg-yellow-400 rounded-md px-4" onClick={() => setLogBtn("Login")}>{logBtn}</button></Link>}

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
                <li>{username}</li>
            </ul>
        </div>
    );
}

export default Header;