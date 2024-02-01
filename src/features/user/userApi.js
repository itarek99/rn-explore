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
    getOrUpdateUser: builder.mutation({
      query: ({body = {}, token}) => ({
        url: 'wp-json/wp/v2/users/me',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body,
      }),
    }),
    registerUser: builder.mutation({
      query: body => ({
        url: 'wp-json/app/v1/users',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetTokenMutation,
  useGetOrUpdateUserMutation,
  useRegisterUserMutation,
} = userApi;
