import { useContext } from "react";
import { GlobalContext } from ".";


function Navbar() {
    const contextObj = useContext(GlobalContext);
    console.log(contextObj);

    const { finalValue } = useContext(GlobalContext);

    return (
        <nav style={{ display: "flex", gap: "20px" }}>
            <ul style={{ display: "flex", gap: "20px", flex: "1" }}>
                <li>Home</li>
                <li>About Us</li>
                <li>Users List</li>
            </ul>
            <p>{finalValue} is User name</p>
        </nav>

    );
}
export default Navbar;