import { FunctionComponent, ReactElement } from "react";
import './Post.css';
import IPost from "../../../interfaces/IPost";

interface IPostProps {
    post: IPost
}

const Post: FunctionComponent<IPostProps> = ({post}): ReactElement => {
    

    return (
        <div className="Post-card">
            <div className="Post-card-row">
                <div className="Post-description-box">
                    <p className='Post-title'>{post.title}</p>
                    <p className='Post-count'>{post.body}</p>
                </div>
            </div>

        </div>
    );
};

export default Post;