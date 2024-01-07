import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import eye from "../../assets/img/eye.svg";
import eyeClosed from '../../assets/img/eye-closed.svg';
import { clearError, login, setError } from '../../store/auth/auth.slice';
import DarkButton from '../../components/UI/DarkButton/DarkButton';

const LoginPage: React.FunctionComponent = (): React.ReactElement => {

    const { isAuth, errorMessage } = useSelector((state: AppState) => state.auth, shallowEqual);
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();
    const [passwordFieldErrorMessage, setPasswordFieldErrorMessage] = useState<string>('');
    const [usernameFieldErrorMessage, setUsernameFieldErrorMessage] = useState<string>('');
    const [passwordStatus, setPasswordStatus] = useState(false)
    const [userValues, setUserValues] = useState({
        username: '',
        password: ''
    });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(clearError());
        setUsernameFieldErrorMessage('');
        setPasswordFieldErrorMessage('');
        setUserValues(prevState => {
            return { ...prevState, [e.target.name]: e.target.value }
        });
    };

    const submitHandler = async (e: React.FormEvent) => {
        e.preventDefault();
        if (userValues.username.trim() === '') {
            setUsernameFieldErrorMessage('Введите имя пользователя')
            return;
        }
        if (userValues.password.trim() === '') {
            setPasswordFieldErrorMessage('Пароль невведен')
            return;
        }
        if (userValues.username === 'user' && userValues.password === 'password') {
            dispatch(login(userValues.username));
        } else {
            dispatch(setError('Неверное имя пользователя или пароль.'));
        }
    };

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    const changePasswordStatus = () => {
        setPasswordStatus(!passwordStatus)
    }

    return (
        <div>
            <div>
                <div>
                    <h3>Login:</h3>
                    {errorMessage ? <p>{errorMessage}</p> : null}
                    <div>
                        <form onSubmit={submitHandler}>
                            <div>
                                <label htmlFor='username'>Username:</label>
                                <p >{usernameFieldErrorMessage}</p>
                                <input
                                    type="text"
                                    onChange={inputHandler}
                                    name={'username'}
                                    value={userValues.username}
                                />
                                <label htmlFor='password'>Password:</label>
                                <p>{passwordFieldErrorMessage}</p>
                                <label >
                                    <input
                                        type={passwordStatus ? 'text' : 'password'}
                                        onChange={inputHandler}
                                        name={'password'}
                                        value={userValues.password}
                                    />
                                    <img src={passwordStatus ? eyeClosed : eye} alt="eye" onClick={changePasswordStatus}/>
                                </label>
                                <div>
                                    <DarkButton
                                        label={'Войти'}
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;