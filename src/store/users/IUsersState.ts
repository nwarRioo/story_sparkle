import IUser from "../../interfaces/IUser";

export default interface IUsersState {
    users: IUser[]
    pickedUser: IUser
    showError: boolean
    errorMessage: string
    loading: boolean
}