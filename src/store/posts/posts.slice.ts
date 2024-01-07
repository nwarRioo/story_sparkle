import { createSlice } from '@reduxjs/toolkit';
import { createAppAsyncThunk } from '../createAppAsyncThunc';
import { postsApi } from '../../api/postsApi';
import IPostsState from './IPostsState';
import IPost from '../../interfaces/IPost';

const namespace = 'posts';

export const getPostsByUserId = createAppAsyncThunk(
    `${namespace}/getPostsByUserId`,
    async (userId: string) => {
        return postsApi.getPostsByUserId(userId)
    }
);

export const postsSlice = createSlice({
    name: namespace,
    initialState: {
        posts: [] as IPost[],
        loading: false
    } as IPostsState,
    reducers: {
        clearPosts(state) {
            state.posts = [];
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPostsByUserId.rejected, () => {
                // state.showError = true;
                // state.errorMessage = 'Connection error';
            })
            .addCase(getPostsByUserId.pending, (state) => {
                state.loading = true
            })
            .addCase(getPostsByUserId.fulfilled, (state, action) => {
                if (action.payload.status === 0) {
                    // state.showError = true;
                    // state.errorMessage = action.payload.message;
                } else {
                    const result = action.payload.result
                    state.posts = result as IPost[];
                }
            })
    }
});

export const {
    clearPosts
} = postsSlice.actions;