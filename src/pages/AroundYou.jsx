import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountyQuery } from '../redux/services/shazamCore';

const CountryTracks = () => {
	const [country, setCountry] = React.useState('');
	const [loading, setLoading] = React.useState(true);
	const { activeSong, isPlaying } = useSelector(state => state.player);
	const { data, isError, isFetching } = useGetSongsByCountyQuery(country, { skip: !country.length });

	if (isFetching && loading) return <Loader title="Loading songs around you" />;
	if (isError) return <Error />;

	React.useEffect(() => {
		axios
			.get(`https://geo.ipify.org/api/v2/country?apiKey=at_fRwsv9VDsgOr7BFAwLbhVQpnwMD9w`)
			.then(resp => setCountry(resp?.data.location.country))
			.catch(err => console.log(err))
			.finally(() => setLoading(false));
	}, [country]);

	return (
		<div className="flex flex-col">
			<h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Around you
      <span className='font-black'> {country}</span>
      </h2>
			<div className="flex flex-wrap sm:justify-start justify-center">
				{data?.map((song, i) => (
					<SongCard key={song.key} song={song} isPlaying={isPlaying} data={data} i={i} />
				))}
			</div>
		</div>
	);
};

export default CountryTracks;
