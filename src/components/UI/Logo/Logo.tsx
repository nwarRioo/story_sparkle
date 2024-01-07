import { Link } from "react-router-dom";

const Logo: React.FunctionComponent = () => {
    return (
        <Link to={'/'} className="logo_link">
            StorySparkle
        </Link>
    );
};

export default Logo;