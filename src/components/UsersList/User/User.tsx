import { FC, MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../store/store";
import { useDispatch } from "react-redux";
import { pickUser } from "../../../store/users/users.slice";
import IUserProps from "../../../interfaces/IProps/IUserProps";


const User: FC<IUserProps> = ({user}) => {
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        dispatch(pickUser(user));
        navigate(`/users/${user.id}/posts`);
    };

    return (
        <div onClick={clickHandler}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
        </div>
    )
}

export default User