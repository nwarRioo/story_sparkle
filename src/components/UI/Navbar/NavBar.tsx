import { FunctionComponent, ReactElement } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../Logo/Logo";
import { logout } from "../../../store/auth/auth.slice";
import { AppDispatch, AppState } from "../../../store/store";

const Navbar: FunctionComponent = (): ReactElement => {
    const { username, isAuth } = useSelector((state: AppState) => state.auth, shallowEqual);
    const dispatch: AppDispatch = useDispatch();
    const location = useLocation()
    
    const logoutHandler = () => {
        dispatch(logout());
        location.state = null
    };

    return (
        <header className="header">
            <div className="header__main_row">
                <div className="header__main_row__left">
                    <Logo />
                    <NavLink to={'/story_sparkle/users'} className="header__link">Авторы</NavLink>
                </div>
                <nav className="header__main_row__right">
                    {isAuth ?
                        <>
                            <span className="username">
                                {username}
                            </span>
                            <button onClick={logoutHandler} className="header__link pink">Выйти</button>
                        </>
                        :
                        <>
                            <NavLink to={'/story_sparkle/login'} className="header__link pink">Войти</NavLink>
                        </>
                    }
                </nav>
            </div>
        </header>
    );
};

export default Navbar;