import {apiSlice} from '../api/apiSlice';

const postApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query({
      query: id => 'wp-json/wp/v2/posts',
    }),
  }),
});

export const {useGetPostsQuery} = postApi;
