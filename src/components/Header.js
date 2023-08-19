import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header (){
    return (
        <>
            <header className="header">
                <Link className="titulo_link" to="/">
                    <h1 className="titulo" >Market Commerce</h1>
                </Link>
                <NavBar/>
            </header>
        </>
    )
}      

export default Header;