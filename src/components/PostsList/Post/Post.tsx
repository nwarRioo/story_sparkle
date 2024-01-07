import { FunctionComponent, ReactElement } from "react";
import IPostProps from "../../../interfaces/IProps/IPostProps";


const Post: FunctionComponent<IPostProps> = ({post}): ReactElement => {
    return (
        <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;