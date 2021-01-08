import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';


const App = () =>  {

  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const url = 'http://www.omdbapi.com/?s=harry potter&apikey=dc007d29';
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      setMovies(resJson.Search);
    }
  };

  useEffect(() => {
		getMovies();
	}, []);

  
  return (
		<div className='container-fluid'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
}

export default App;
