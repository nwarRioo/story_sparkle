import { FunctionComponent, ReactElement, useEffect } from "react";
import { AppDispatch, AppState } from "../../store/store";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import UsersList from "../../components/UsersList/UsersList";
import { getUsers } from "../../store/users/users.slice";

const UsersPage: FunctionComponent = (): ReactElement => {
    const dispatch: AppDispatch = useDispatch();    
    const { users, showError, errorMessage } = useSelector((state: AppState) => state.users, shallowEqual);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <div className="usersPage">
            <h2 className="usersPage__title">Авторы постов:</h2>
            {showError ? <p>{errorMessage}</p> : null}
            {users === undefined || !users.length ?
                <p className="usersPage__no_data">Авторов нет</p>
                :
                <UsersList users={users} />
            }
        </div>
    );
};

export default UsersPage;