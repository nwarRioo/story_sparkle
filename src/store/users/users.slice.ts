import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../createAppAsyncThunc';
import { usersApi } from '../../api/usersApi';
import IUser from '../../interfaces/IUser';
import IUsersState from './IUsersState';

const namespace = 'users';

export const getUsers = createAppAsyncThunk(
    `${namespace}/getUsers`,
    async () => {
        return usersApi.getUsers()
    }
);

export const usersSlice = createSlice({
    name: namespace,
    initialState: {
        users: [] as IUser[],
        pickedUser: {},
        showError: false,
        errorMessage: '',
        loading: false
    } as IUsersState,
    reducers: {
        clearErrors(state) {
            state.errorMessage = '';
            state.showError = false;
            state.pickedUser = {} as IUser
        },

        pickUser(state, action) {
            state.pickedUser = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.rejected, (state) => {
                state.showError = true;
                state.errorMessage = 'Connection error';
            })
            .addCase(getUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                if (action.payload.status === 0) {
                    state.showError = true;
                    state.errorMessage = action.payload.message;
                } else {
                    const result = action.payload.result
                    state.users = result as IUser[];
                }
            })
    }
});

export const {
    clearErrors,
    pickUser
} = usersSlice.actions;