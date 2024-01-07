import { FunctionComponent, ReactElement } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import './NavBar.css';
import { logout } from "../../../store/auth/auth.slice";
import { AppDispatch, AppState } from "../../../store/store";

const NavBar: FunctionComponent = (): ReactElement => {
    const { username, isAuth } = useSelector((state: AppState) => state.auth, shallowEqual);
    const dispatch: AppDispatch = useDispatch();
    const location = useLocation()
    
    const logoutHandler = () => {
        dispatch(logout());
        location.state = null
    };

    return (
        <header className={"NavBar-background"}>
            <div className="NavBar-container">
                <div className={"NavBar-logo"}>
                    <Logo />
                </div>
                <nav className="NavBar-links-row">
                    {isAuth ?
                        <>
                            
                            <NavLink className="NavBar-link" to={'/'}>Авторы</NavLink>
                            <span className="NavBar-username">
                                {username}
                            </span>
                            <button className="NavBar-link" onClick={logoutHandler}>Выйти</button>
                        </>
                        :
                        <>
                            
                            <NavLink className="NavBar-link" to={'/login'}>Войти</NavLink>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
};

export default NavBar;