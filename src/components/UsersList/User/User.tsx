import { FC, MouseEvent } from "react";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import IUser from "../../../interfaces/IUser";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { pickUser } from "../../../store/users/users.slice";

interface IUserProps {
    user: IUser
}

const User: FC<IUserProps> = ({user}) => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(pickUser(user));
        navigate(`/story_sparkle/users/${user.id}/posts`);
    };

    return (
        <div className={styles.user} onClick={clickHandler}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
        </div>
    )
}

export default User