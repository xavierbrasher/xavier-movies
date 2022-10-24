import { Link } from "react-router-dom";
import { Movie_Props } from "../types/movie_types";
import Ratings from "./Ratings";

export default function MoviePreview(movie: Movie_Props) {
    return (
        <>
            <div className="card lg:card-side bg-base-200 shadow-xl my-4">
                <figure>
                    <img
                        className="h-fit w-fit"
                        src={movie.movie_img_url}
                        alt={movie.movie_name}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{movie.movie_name}</h2>
                    <Ratings stars={movie.movie_statistics.stars} />
                    <p>{movie.movie_description}</p>
                    <div className="card-actions justify-end">
                        <Link
                            to={`/movies/${movie.movie_id}`}
                            className="btn btn-primary"
                        >
                            Details
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
