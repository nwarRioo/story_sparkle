import { EStatuses } from "../enums/EStatuses";
import IResponse from "../interfaces/IResponse";
import IUser from "../interfaces/IUser";
import { instance } from "./instance";

class UsersApi {
    
    public getUsers = async (): Promise<IResponse<IUser[] | undefined>> => {
        try {
            const response = await instance.get('/users');
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

export const usersApi = new UsersApi()