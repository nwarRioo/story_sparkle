import { Outlet } from "react-router-dom";
import NavBar from "../UI/Navbar/NavBar";

const Layout: React.FunctionComponent = (): React.ReactElement => {
    return (
        <>
            <NavBar />
            <main>
                <Outlet />
            </main>
        </>
    )
};

export default Layout;