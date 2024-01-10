import { useDispatch, useSelector } from "react-redux";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";

const useNowPlayingMovies =()=>{
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store => store.movies.nowPlayingMovies))
    const getNowPlayingMovies= async ()=>{
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION)
      const json = await data.json();
      dispatch(addnowPlayingMovies(json.results))
    }
    useEffect(()=>{
      !nowPlayingMovies && getNowPlayingMovies();
    },[nowPlayingMovies])
}

export default useNowPlayingMovies;