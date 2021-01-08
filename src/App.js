import React, {useState} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';


const App = () =>  {

  const [movies, setMovies] = useState([
    {
    "Title":"Harry Potter",
    "Rating":"10",
    },
    {
      "Title":"Star Wars",
      "Rating":"10",
    }

]);

  return (
		<div className='container-fluid movie-app'>
			<div className='row'>
				<MovieList movies={movies} />
			</div>
		</div>
	);
}

export default App;
