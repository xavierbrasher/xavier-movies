import { Movie_Props, ratings } from "../types/movie_types";

const test_data: Movie_Props = {
    movie_id: 5,
    movie_name: "The Simpsons Movie",
    movie_img_url:
        "https://upload.wikimedia.org/wikipedia/en/a/a0/Simpsons_final_poster.png",
    movie_description:
        "A movie where the simpson travel to different countries and experence a life. He takes a hike. He Lives a life. CROSS IT",
    movie_statistics: {
        dislikes: 5,
        likes: 100,
        stars: 3,
    } as ratings,
    youtube_trailer_code: "XPG0MqIcby8",
};

export function useMovies() {
    //TODO: get rid of test data and get it form server
    let test_multiple_data: Movie_Props[] = [];
    for (let i = 0; i < 5; i++) {
        test_multiple_data[i] = test_data;
    }

    return test_multiple_data;
}

export function useMovie(id: number) {
    return test_data;
}
