import Header from './Header'
import useNowPlayingMovies from '../hooks.js/useNowPlayingMovies'
// import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks.js/usePopularMovies';
import useTopRatedMovies from '../hooks.js/useTopRatedMovies';
import useUpComingMovies from '../hooks.js/useUpComingMovies';
const Browse = () => {
  // const movies = useSelector(store => store.movies?.nowPlayingMovies)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (                
    <div>
      <Header/> 
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse
