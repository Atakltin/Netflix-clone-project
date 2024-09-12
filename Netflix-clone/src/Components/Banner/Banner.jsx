import React, { useEffect, useState } from 'react';
import './Banner.css'
import instance from '../../Utils/Axios';
//import axios from '../../Utils/Axios';
import requests from '../../Utils/Request';
const Banner = () => {
    let [movie, setMovie] = useState([]);
    useEffect(() => {
        async function fetchData() {
        const request = await instance.get(requests.fetchNetflixOriginals);
            console.log(request);
            setMovie(
                request?.data.results[
                Math.floor(Math.random() * request.data.results.length)
                ]
            );
            return request;
        }
        fetchData();
    }, []); 
    
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }
    return (
        <div>
            <div className="banner"
                style={{
                    backgroundSize: "cover",
                    backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center-center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {movie?.title || movie?.name || movie?.original_name}
                    </h1>
                    <div className="banner__buttons">
                        <button
                            onClick={() => handleClick(movie)}
                            className="banner__button play"
                        >
                            Play
                        </button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
                <div className="banner--fadeBottom" />
            </div>
        </div>
    )
}

export default Banner;
