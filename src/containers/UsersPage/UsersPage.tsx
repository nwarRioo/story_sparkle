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
        <div className="PostsPage-container">
            <div className="PostsPage-background PostsPage-flex-row">
                <div className="PostsPage-column">
                    <h2 className="PostsPage-title">Авторы</h2>
                    {showError ? <p className='PostsPage-error-text'>{errorMessage}</p> : null}
                    {users === undefined || !users.length ?
                        <p className='PostsPage-error-text'>Авторов нет</p>
                        :
                        <UsersList users={users} />
                    }
                </div>
            </div>
        </div>
    );
};

export default UsersPage;