import {apiSlice} from '../api/apiSlice';

const userApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getToken: builder.mutation({
      query: body => ({
        url: 'wp-json/app/v1/auth',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      }),
    }),
    getUserInfo: builder.mutation({
      query: token => ({
        url: 'wp-json/wp/v2/users/me',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {useGetTokenMutation, useGetUserInfoMutation} = userApi;
