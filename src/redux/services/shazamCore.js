import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': '22fb187c8dmshc113255b748227ap1d6ff0jsn01412e1107b1',
//     'X-RapidAPI-Host': 'shazam-api7.p.rapidapi.com',
//   },
// };

// fetch('https://shazam-api7.p.rapidapi.com/charts/get-top-songs-in-world', options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://genius-song-lyrics1.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        '22fb187c8dmshc113255b748227ap1d6ff0jsn01412e1107b1',
        // 'X-RapidAPI-Host',
        // 'genius-song-lyrics1.p.rapidapi.com',
      );
      return headers;
    },

  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'chart/albums/' }),
  }),
});
export const {
  useGetTopChartsQuery,
} = shazamCoreApi;

