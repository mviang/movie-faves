import React from 'react';

const MovieList = (props) => {
	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
                    <div> {movie.Title} </div> 
                    <img alt={movie.Title} src={movie.Poster}></img>
				</div>
			))}
		</>
	);
};

export default MovieList;