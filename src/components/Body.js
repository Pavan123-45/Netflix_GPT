
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import GptSearchMovies from './GptSearchMovies'

const Body = () => {
    const appRouter= createBrowserRouter( [
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element: <Browse/>
        },
        {
            path:"/searchmovie",
            element: <GptSearchMovies/>
        },
        // {
        //     path :"/"
        // }
    ] )
  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
