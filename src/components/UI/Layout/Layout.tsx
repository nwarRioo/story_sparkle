import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import backgroundImage from '../../../assets/img/homepage.png';


const Layout: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="app-container">
            <img src={backgroundImage} alt="background" className="layout__background" />
            <Navbar />
            <main className="container">
                <Outlet />
            </main>
        </div>
    )
};

export default Layout;