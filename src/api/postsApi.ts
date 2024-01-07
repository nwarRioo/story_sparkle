import { EStatuses } from "../enums/EStatuses";
import IPost from "../interfaces/IPost";
import IResponse from "../interfaces/IResponse";
import { instance } from "./instance";

class PostsApi {
    public getPostsByUserId = async (userId: string): Promise<IResponse<IPost[] | undefined>> => {
        try {
            const response = await instance.get(`/posts?userId=${userId}`);
            return {
                status: EStatuses.OK,
                result: response.data,
                message: ""
            }
        } catch (err: unknown) {
            const error = err as Error;
            const response: IResponse<undefined> = {
                status: EStatuses.NOT_OK,
                result: undefined,
                message: error.message
            };
            return response;
        };
    };
}

export const postsApi = new PostsApi()