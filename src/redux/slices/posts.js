import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../config/baseURL";
const initialState = {
  isLoading: true,
  posts: [],
  isError: false,
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPost: (state) => {
      state.isLoading = true;
    },
    getPostSuccess: (state, { payload }) => {
      state.posts = payload;
      state.isLoading = false;
      state.isError = false;
    },
    getPostFail: (state, { payload }) => {
      state.isError = true;
      state.error = payload;
    },
  },
});

export const postsSelector = (state) => state.posts;

export const { getPost, getPostSuccess, getPostFail } = postSlice.actions;

export default postSlice.reducer;

export function fetchPosts(page, limit) {
  return async (dispatch) => {
    dispatch(getPost());
    try {
      const response = await axios({
        url: `${BASE_URL}/posts?page=${page}&limit=${limit}`,
      });

      dispatch(getPostSuccess(response.data.data));
    } catch (error) {
      dispatch(getPostFail(error));
    }
  };
}
