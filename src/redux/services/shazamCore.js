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
			query: () => '/charts/world'
		}),
		getSongsByGenre: builder.query({
			query: genre => `/charts/genre-world?genre_code=${genre}`
		}),
		getSongDetails: builder.query({
			query: songid => `/tracks/details?track_id=${songid}`
		}),
		getSongRelated: builder.query({
			query: songid => `/tracks/related?track_id=${songid}`
		}),
		getArtistDetais: builder.query({
			query: artistid => `/artists/details?artist_id=${artistid}`
		}),
		getSongsByCounty: builder.query({
			query: country => `/charts/country?country_code=${country}`
		})
	})
});

export const {
	useGetTopChartsQuery,
	useGetSongsByGenreQuery,
	useGetSongDetailsQuery,
	useGetSongRelatedQuery,
	useGetArtistDetaisQuery,
	useGetSongsByCountyQuery
} = shazamCoreApi;
