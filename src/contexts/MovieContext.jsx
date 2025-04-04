import { createContext, useState, useEffect, useContext } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites");

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, []);

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prevFavorites => [...prevFavorites, movie]);
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prevFavorites => prevFavorites.filter(movie => movie.id !== movieId));
    }

    

    return <MovieContext.Provider>
        {children}
    </MovieContext.Provider>
}