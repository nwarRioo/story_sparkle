import IPost from '../../interfaces/IPost';
import Post from './Post/Post';

interface IPostsProps {
    posts: IPost[]
}

const PostsList: React.FunctionComponent<IPostsProps> = ({posts}) => {
    return (
        <>
            {posts.map((post) => {
                return <Post
                    key={post.id}
                    post={post}
                />
            })}
        </>
    );
};

export default PostsList;