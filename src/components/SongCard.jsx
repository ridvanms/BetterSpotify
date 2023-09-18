import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import PlayPause from './PlayPause';

const SongCard = ({ song, isPlaying, i, activeSong, data }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 background-blur-sm
    animate-slideup rounded-lg cursor-pointer"
    >
      <div className="relative w-full h-56 group">
        <div className={`absolute text-white inset-0 justify-center items-center 
        bg-black bg-opacity-50 group-hover:flex
        ${activeSong?.title === song.name ? 'flex bg-black bg-opacity-70' : 'hidden'}`}
        >
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
            data={data}
          />

        </div>
        <Link to={`${song.url}`}>
          <img alt="song_image" src={song?.cover_art_thumbnail_url} />
        </Link>
      </div>
      <div className="mt-4 flex flex-col text-white">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={song.url}>
            {song.name}
          </Link>
        </p>
        <p>
          <Link to={`${song.artist.url}`}>
            {song.artist.name}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
