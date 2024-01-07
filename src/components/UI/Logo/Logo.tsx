import './Logo.css';
// import Logotype from '../../../assets/img/logo.png';
import { Link } from "react-router-dom";

const Logo: React.FunctionComponent = () => {
    return (
        <Link to={'/story_sparkle'} className={"Logo"}>
            <h4>LOGO</h4>
            {/* <img className="w-100" src={Logotype} alt="Posts" /> */}
        </Link>
    );
};

export default Logo;