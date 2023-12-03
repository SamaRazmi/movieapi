import React from "react";

const Movie=(movie)=>{
    console.log(movie.info);
    let imgsrc="https://image.tmdb.org/t/p/w500";
    return(
        <>
           <div className="movie-css">
                <img src={imgsrc+movie.info.poster_path} className="cover"></img>
                <div className="movie-bottom">
                    <div className="details">
                        <h4 className="title">{movie.info.title}</h4>
                        <p className="rank">{movie.info.vote_average}</p>
                    </div>
                    <div className="outline">
                      <h1>Overview</h1>
                      {movie.info.overview}
                    </div>
                </div>
           </div>
        </>
    )
}

export default Movie;
