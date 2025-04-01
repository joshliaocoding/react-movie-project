import './App.css'
import MovieCard from './components/MovieCard'

function App() {

  return (
    <>
      {movieNum === 1 && <MovieCard movie={{title: "The last of us", release_data: "2024"}}/>}
    </>
  )
}


export default App
