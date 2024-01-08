import IPostsProps from '../../interfaces/IProps/IPostsProps';
import Post from './Post/Post';


const PostsList: React.FunctionComponent<IPostsProps> = ({posts}) => {
    return (
        <div className='postsList'>
            {posts.map((post) => {
                return <Post
                    key={post.id}
                    post={post}
                />
            })}
        </div>
    );
};

export default PostsList;