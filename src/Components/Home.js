import React, { useState } from "react";
import Movie from './Movie';
import { useEffect } from "react";
let API_key = "&api_key=21b4050b743f110e14a16d168e267fd5";
let base_url = "https://api.themoviedb.org/3";
let url_address = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
let arr = ["Popular", "Theatre", "Kids", "Drama", "Comedie"];

const Home = () => {
    const [movieData, setMovie] = useState([]);
    const [url, setUrl] = useState(url_address);
    const [search, setSearch] = useState();

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => {
            setMovie(data.results);
            //console.log(data);
        });
    }, [url])
    const getMovieType= (movieType) => {
        if (movieType == "Popular") {
            url_address = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;
        }
        if (movieType == "Theatre") {
            url_address = base_url + "/discover/movie?primary_release_date.gte=2018-09-15&primary_release_date.lte=2023-10-22" + API_key;
        }
        if (movieType == "Kids") {
            url_address = base_url + "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc" + API_key;
        }
        if (movieType == "Drama") {
            url_address = base_url + "/discover/movie?with_genres=18&primary_release_year=2023" + API_key;
        }
        if (movieType == "Comedie") {
            url_address = base_url + "/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc" + API_key;
        }
        setUrl(url_address);

    }
    const searchMovie = (evt) => {
        if (evt.key == "Enter") {
            console.log("Enter");
            url_address = base_url + "/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query=" + search;
            setUrl(url_address);
            setSearch(" ");
        }
    }

    return (
        <>
            <div className="header">
                <nav>
                    <ul className="menu-list">
                        {
                            arr.map((value, pos) => {
                                return (
                                    <li><a href="#" key={pos} name={value} onClick={(e) => { getMovieType(e.target.name) }}>{value}</a></li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Enter Movie Name" className="inputText" onChange={(e) => { setSearch(e.target.value) }}
                            value={search} onKeyPress={searchMovie}></input>
                        <button disabled><i class="fa fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length == 0) ? <p className="notfound">Not Found</p> : movieData.map((res, pos) => {
                        return (
                            <Movie info={res} key={pos} />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;
