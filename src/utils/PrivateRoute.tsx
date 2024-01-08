import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AppState } from '../store/store';

const PrivateRoute: React.FunctionComponent = (): React.ReactElement => {

    const { isAuth } = useSelector((state: AppState) => state.auth, shallowEqual);
    const location = useLocation();

    return (
        isAuth
            ?
            <Outlet />
            :
            <Navigate to='/story_sparkle/login' replace state={{ from: location }} />
    )
};

export default PrivateRoute;