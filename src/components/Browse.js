import Header from './Header'
import useNowPlayingMovies from '../hooks.js/useNowPlayingMovies'
import { useSelector } from 'react-redux';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  useNowPlayingMovies();
  return (                
    <div>
      <Header/> 
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
export default Browse
