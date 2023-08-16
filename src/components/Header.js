import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Header (){
    return (
        <>
            <header className="header">
                <Link to="/">
                    <h1 className="titulo" >Funkweb</h1>
                </Link>

                <NavBar/>
            </header>
        </>
    )
}      

export default Header;