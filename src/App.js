import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MovieList from './components/MovieList';
import SearchBar from './components/SearchBar';



const App = () =>  {

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const getMovies = async (searchQuery) => {
    const url = `http://www.omdbapi.com/?s=${searchQuery}&apikey=dc007d29`;
    const res = await fetch(url);
    const resJson = await res.json();

    if (resJson.Search) {
      setMovies(resJson.Search);

    }
  };

  useEffect(() => {
		getMovies(searchQuery);
	}, [searchQuery]);

  
  return (
		<div className='container-fluid'>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

			<div className='row'>
				<MovieList movies={movies} />

			</div>
		</div>
	);
}

export default App;
