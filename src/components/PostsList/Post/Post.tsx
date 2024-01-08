import { FunctionComponent, ReactElement } from "react";
import IPostProps from "../../../interfaces/IProps/IPostProps";


const Post: FunctionComponent<IPostProps> = ({post}): ReactElement => {
    return (
        <div className="post">
            <p className="post__title"><span className="post__span">Заголовок:</span> {post.title}</p>
            <p className="post__text"><span className="post__span">Содержание:</span> {post.body}</p>
        </div>
    );
};

export default Post;