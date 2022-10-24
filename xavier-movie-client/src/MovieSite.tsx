import { Movie_Props } from "./types/movie_types";
import { useMovie } from "./lib/useMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface props {
    movieId: number;
}

interface youtubeTrailerProps {
    youtube_trailer_code: string;
}
interface ratingProps {
    stars: number;
}

function Ratings({ stars }: ratingProps) {
    let arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(i);
    }
    return (
        <>
            <div className="rating cursor-default">
                {arr.map((value, index) => {
                    if (index + 1 > stars) {
                        return (
                            <input
                                type="radio"
                                name="rating-1"
                                className="mask mask-star cursor-default "
                                disabled
                            />
                        );
                    } else {
                        return (
                            <input
                                type="radio"
                                name="rating-1"
                                className="mask mask-star cursor-default"
                                disabled
                                checked
                            />
                        );
                    }
                })}
            </div>
        </>
    );
}
function YoutubeTrailer({ youtube_trailer_code }: youtubeTrailerProps) {
    return (
        <>
            <iframe
                height={315}
                width={560}
                src={`https://www.youtube.com/embed/${youtube_trailer_code}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </>
    );
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
                <img className="mb-3" src={movie.movie_img_url} />
                <Ratings stars={movie.movie_statistics.stars} />
                <p>{movie.movie_description}</p>
                <p>👍 = {movie.movie_statistics.likes}</p>
                <p>👎 = {movie.movie_statistics.dislikes}</p>
                <YoutubeTrailer
                    youtube_trailer_code={movie.youtube_trailer_code}
                />
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
