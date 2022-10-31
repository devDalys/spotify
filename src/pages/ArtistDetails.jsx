import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';
import { useGetArtistDetaisQuery } from '../redux/services/shazamCore';

const ArtistDetails = () => {
	const { id: artistId } = useParams();
	const { isPlaying, activeSong } = useSelector(state => state.player);
	const { data: artistData, isFetching: isFetchingArtistsDetails, error } = useGetArtistDetaisQuery(artistId);

	if (isFetchingArtistsDetails) return <Loader title={'Loading artist details...'} />;
	if (error) return <Error />;

	return (
		<div className="flex flex-col">
			<DetailsHeader artistId={artistId} artistsData={artistData} />

			<RelatedSongs
				data={Object.values(artistData?.songs)}
        artistId={artistId}
				isPlaying={isPlaying}
				activeSong={activeSong}
			/>
		</div>
	);
};

export default ArtistDetails;
