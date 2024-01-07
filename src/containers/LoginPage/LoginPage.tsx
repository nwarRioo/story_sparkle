import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store/store'
import eye from '../../assets/img/eye.svg';
import eyeClosed from '../../assets/img/eye-closed.svg';
import './LoginPage.css';
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
    }, [isAuth, navigate]);

    const changePasswordStatus = () => {
        setPasswordStatus(!passwordStatus)
    }

    return (
        <div className="LoginPage-container">
            <div className="LoginPage-background LoginPage-flex-row">
                <div className="LoginPage-column">
                    <h3 className="LoginPage-subtitle">Login:</h3>
                    {errorMessage ? <p className='LoginPage-error-text'>{errorMessage}</p> : null}
                    <div className="LoginPage-form-column">
                        <form onSubmit={submitHandler}>
                            <div className="LoginPage-form-box">
                                <label className="LoginPage-label" htmlFor='username'>Username:</label>
                                <p className='LoginPage-error-text'>{usernameFieldErrorMessage}</p>
                                <input className={'LoginPage-input LoginPage-input-password-name'}
                                    type="text"
                                    onChange={inputHandler}
                                    name={'username'}
                                    value={userValues.username}
                                />
                                <label className="LoginPage-label" htmlFor='password'>Password:</label>
                                <p className='LoginPage-error-text'>{passwordFieldErrorMessage}</p>
                                <label className='LoginPage-label-password LoginPage-input'>
                                    <input className={'LoginPage-input-password LoginPage-input-password-name'}
                                        type={passwordStatus ? 'text' : 'password'}
                                        onChange={inputHandler}
                                        name={'password'}
                                        value={userValues.password}
                                    />
                                    <img src={passwordStatus ? eyeClosed : eye} alt="eye" className='LoginPage-input-eye' onClick={changePasswordStatus}/>
                                </label>
                                <div className="LoginPage-btn-row">
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