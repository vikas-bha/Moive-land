import React, {useEffect, useState} from "react";
// 97455caf
import './App.css';
import MovieCard from "./MovieCard";
import SearchIcon from './search.svg';
const API_URL = 'http://www.omdbapi.com?apikey=97455caf'
const App = () =>{
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);

    const searchMovies = async (title) =>{
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();
            setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('Spiderman');
    }, []);
    return(
        <div className="app"> 
            <h1>MovieLnad</h1>
            <div className="search">
                <input type="text" placeholder="search"
                value={searchTerm}
                 onChange={(e)=> setSearchTerm(e.target.value)}
                 />
                 <img 
                 src ={SearchIcon}
                 alt ="search" 
                 onClick={()=>searchMovies(searchTerm)}/>
            </div>

            {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
        </div>
    );
}

export default App;