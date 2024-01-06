import { useDispatch} from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId)=>{
    const dispatch= useDispatch();
    const getVideos= async ()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTION)
    const json=await data.json();
    const filterdData  = json.results.filter((video) => video.type==="Trailer")
    const trailer= filterdData.length ? filterdData[0] : json.results[0]
    dispatch(addTrailerVideo(trailer))
  }
  useEffect(()=>{
    getVideos()
  },[])


}
export default useMovieTrailer