import { LOGO_URL } from "../../utils/constant";

export let Header = () => {
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
            </ul>
        </div>
    );
}

export default Header;