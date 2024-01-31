import {apiSlice} from '../api/apiSlice';

const postApi = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getComments: builder.query({
      query: id => `wp-json/wp/v2/comments?post=${id}`,
      providesTags: ['Comments'],
    }),
    addComment: builder.mutation({
      query: ({body, token}) => ({
        url: 'wp-json/wp/v2/comments',
        method: 'POST',
        body,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: ['Comments'],
    }),
  }),
});

export const {
  useGetCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
} = postApi;
