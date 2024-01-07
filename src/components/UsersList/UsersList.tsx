import { FC } from "react";
import IUser from "../../interfaces/IUser";
import styles from "./UsersList.module.css";
import User from "./User/User";

interface IUsersListProps {
    users: IUser[]
}

const UsersList: FC<IUsersListProps> = ({users}) => {

    return (
        <div className={styles.usersList}>
            {users.map(user => {
                return <User user={user} key={user.id}/>
            })}
        </div>
    )
}

export default UsersList