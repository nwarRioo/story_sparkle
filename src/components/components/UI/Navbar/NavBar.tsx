import { FunctionComponent, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import './NavBar.css';

const NavBar: FunctionComponent = (): ReactElement => {
    

    return (
        <header className={"NavBar-background"}>
            <div className="NavBar-container">
                <div className={"NavBar-logo"}>
                    <Logo />
                </div>
                <nav className="NavBar-links-row">
                        <>
                            
                            <NavLink className="NavBar-link" to={'/login'}>Войти</NavLink>
                        </>
                </nav>
            </div>
        </header>
    );
};

export default NavBar;