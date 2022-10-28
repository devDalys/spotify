import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
		prepareHeaders: headers => {
			headers.set('X-RapidAPI-Key', 'f927d541afmsh70353b988d0c498p1ba690jsn2ddaf17ac057');

			return headers;
		}
	}),
	endpoints: builder => ({
		getTopCharts: builder.query({
			query: () => '/charts/world',
		})
	})
});

export const { useGetTopChartsQuery } = shazamCoreApi;
