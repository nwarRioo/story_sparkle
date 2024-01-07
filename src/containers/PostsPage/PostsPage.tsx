import { FunctionComponent, ReactElement, useEffect } from "react";
import { AppDispatch, AppState } from "../../store/store";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import './PostsPage.css';
import { clearPosts, getPostsByUserId } from "../../store/posts/posts.slice";
import PostsList from "../../components/PostsList/PostsList";

const PostsPage: FunctionComponent = (): ReactElement => {

    const dispatch: AppDispatch = useDispatch();    
    const { posts } = useSelector((state: AppState) => state.posts, shallowEqual);
    const { users, pickedUser } = useSelector((state: AppState) => state.users, shallowEqual);
    useEffect(() => {
        dispatch(getPostsByUserId(pickedUser.id));
    }, [users]);

    useEffect(() => {
        dispatch(clearPosts())
    }, [users]);

    return (
        <div className="PostsPage-container">
            <div className="PostsPage-background PostsPage-flex-row">
                <div className="PostsPage-column">
                    <h2 className="PostsPage-title">Посты пользователя: {pickedUser.name}</h2>
                    {/* {showError ? <p className='PostsPage-error-text'>{errorMessage}</p> : null} */}
                    {posts === undefined || !posts.length ?
                        <p className='PostsPage-error-text'>No posts</p>
                        :
                        <PostsList posts={posts} />
                    }
                </div>
            </div>
        </div>
    );
};

export default PostsPage;