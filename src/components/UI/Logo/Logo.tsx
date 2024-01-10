import { Link } from "react-router-dom";

const Logo: React.FunctionComponent = () => {
    return (
        <Link to={'/story_sparkle'} className="logo_link">
            StorySparkle
        </Link>
    );
};

export default Logo;