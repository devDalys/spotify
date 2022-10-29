import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
	isPlaying && activeSong?.title === song.title ? (
		<FaPauseCircle size={35} className="text-gray-300 w-full h-full p-[42%]" onClick={handlePause} />
	) : (
		<FaPlayCircle size={35} className="text-gray-300 w-full h-full p-[42%]" onClick={handlePlay} />
	);

export default PlayPause;
