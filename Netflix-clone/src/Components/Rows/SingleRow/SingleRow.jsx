import React, { useState, useEffect} from 'react'
import axios from '../../../Utils/Axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
import "./singleRow.css"
const SingleRow = ({title, fetchUrl, isLargeRow}) => {
    let [movies, setMovies] = useState([]);
    let [trailerUrl, setTrailerUrl] = useState("");
    let base_Url = "https://image.tmdb.org/t/p/original"; 

    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(fetchUrl);
            console.log(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("")
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name)
                .then((url) => {
                    console.log(url);
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get('v'));
                }).catch(error => console.log(error))
        }
    };

    return (
        <div className="row">
        <h2>{title}</h2>
        <div className="row__posters">
            {movies?.map((singleMovie, index) => (
            <img
                key={index}
                onClick={() => handleClick(singleMovie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                src={`${base_Url}${isLargeRow? singleMovie?.poster_path: singleMovie?.backdrop_path}`}
                alt={singleMovie.name}
            />
            ) )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default SingleRow;
