import { FC } from "react";
import User from "./User/User";
import IUsersListProps from "../../interfaces/IProps/IUserListProps";


const UsersList: FC<IUsersListProps> = ({users}) => {
    return (
        <div className="usersList">
            {users.map(user => {
                return <User user={user} key={user.id}/>
            })}
        </div>
    )
}

export default UsersList