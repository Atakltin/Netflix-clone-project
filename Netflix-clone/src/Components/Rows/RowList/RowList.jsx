import React from 'react'
import SingleRow from '../SingleRow/SingleRow';
import requests from '../../../Utils/Request';
const RowList = () => {
    return (
        <>
            <SingleRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
            <SingleRow title="Trending now" fetchUrl={requests.fetchTrending} />
            <SingleRow title="Top Rated Movies" fetchUrl={requests.fetchTopRatedMovies} />
            <SingleRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <SingleRow title="Commedy Movies" fetchUrl={requests.fetchComedyMovies} />
            <SingleRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <SingleRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
            <SingleRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <SingleRow title="Tv Show" fetchUrl={requests.fetchTvShow}/>
        </>
    )
}

export default RowList;
