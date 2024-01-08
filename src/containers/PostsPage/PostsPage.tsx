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
        <div className="postsPage">
            <h2 className="postsPage__title">Посты пользователя <span className="postsPage__author">{pickedUser.name}</span></h2>
            {posts === undefined || !posts.length ?
                <p className="postsPage__no_data">Постов нет</p>
                :
                <PostsList posts={posts} />
            }
        </div>
    );
};

export default PostsPage;