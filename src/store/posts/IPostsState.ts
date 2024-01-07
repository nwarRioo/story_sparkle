import IPost from "../../interfaces/IPost";

export default interface IPostsState {
    posts: IPost[]
    loading: boolean
}