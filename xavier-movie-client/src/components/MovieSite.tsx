import { Movie_Props } from "../types/movie_types";
import { useMovie } from "../lib/useMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface props {
    movieId: number;
}

export default function MovieSite() {
    let [loading, setLoading] = useState(true);
    let [movie, setMovie] = useState<Movie_Props>();
    let params: any = useParams();
    let id: number = parseInt(params.userID);

    const Loaded = () => {
        return movie ? (
            <>
                <h1 className="text-4xl font-bold mb-3">{movie.movie_name}</h1>
                <img src={movie.movie_img_url} />
                <p>{movie.movie_description}</p>
                <p>👍 = {movie.movie_statistics.likes}</p>
                <p>👎 = {movie.movie_statistics.dislikes}</p>
            </>
        ) : (
            <>
                <h1>Error on Loading Content</h1>
            </>
        );
    };

    useEffect(() => {
        async function getMovie() {
            console.log(id);
            return await useMovie(id);
        }
        getMovie()
            .then((value) => {
                setMovie(value);
                setLoading(false);
            })
            .catch((err) => {
                // redirect to 404
            });
    }, []);

    return <>{loading ? <h1 className="text-4xl">Loading</h1> : <Loaded />}</>;
}
