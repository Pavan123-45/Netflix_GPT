import Header from './Header'
import useNowPlayingMovies from '../hooks.js/useNowPlayingMovies'
// import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks.js/usePopularMovies';
import useTopRatedMovies from '../hooks.js/useTopRatedMovies';
import useUpComingMovies from '../hooks.js/useUpComingMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (                
    <div>
       <Header/> { showGptSearch?<GptSearch/> :<><MainContainer/><SecondaryContainer/></> }
    </div>
  )
}
export default Browse
