import { FunctionComponent, ReactElement, useEffect } from "react";
import { AppDispatch, AppState } from "../../store/store";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
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
        <div>
            <h2>Посты пользователя: {pickedUser.name}</h2>
            {posts === undefined || !posts.length ?
                <p>No posts</p>
                :
                <PostsList posts={posts} />
            }
        </div>
    );
};

export default PostsPage;