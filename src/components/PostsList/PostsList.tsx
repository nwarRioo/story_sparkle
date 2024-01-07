import IPostsProps from '../../interfaces/IProps/IPostsProps';
import Post from './Post/Post';


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