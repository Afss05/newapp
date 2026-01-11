import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/", // your backend root
  }),
  endpoints: (builder) => ({
    login: builder.mutation<any, { username: string; password: string }>({
      query: (body) => ({
        url: "api/admin/login",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = apiSlice;
