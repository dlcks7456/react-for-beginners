import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail(){
    const [loading, setLoading] = useState(true);
    const [movie, setMoive] = useState([]);
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMoive(json);
        setLoading(false);
    }
    useEffect( () => {
        getMovie();
    },[])
    return (
        <div>
            {loading ? <h1>Loading...</h1> : (
                <div>
                    <h1>Detail</h1>
                    <div>Title : {movie.data.movie.title}</div>
                    <div>year : {movie.data.movie.year}</div>
                    <div>
                        genres
                        <ul>
                            {movie.data.movie.genres.map(
                                (g) => ( <li key={g}>{g}</li> )
                            )}
                        </ul>
                    </div>
                </div>

            )}
        </div>
        );
}

export default Detail;