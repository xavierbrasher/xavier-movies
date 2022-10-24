import { useEffect, useState } from "react";
import MoviePreview from "./components/MoviePreview";
import { useMovies } from "./lib/useMovies";
import { Movie_Props } from "./types/movie_types";

export default function App() {
    const [movies, setMovies] = useState<Movie_Props[]>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getMovies() {
            return await useMovies();
        }
        getMovies().then((value) => {
            setMovies(value);
            setLoading(false);
        });
    }, []);

    return (
        <>
            <h1 className="text-center text-3xl font-bold">Main page</h1>
            {loading ? (
                <h2 className="text-2xl text-center font-bold"> Loading... </h2>
            ) : (
                <>
                    {movies ? (
                        movies.map((value) => {
                            return <MoviePreview {...value} />;
                        })
                    ) : (
                        <h2 className="text-2xl text-center font-bold">
                            {" "}
                            Loading...{" "}
                        </h2>
                    )}
                </>
            )}
        </>
    );
}
