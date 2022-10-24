export interface ratings {
    likes: number;
    dislikes: number;
    stars: number;
}

export interface Movie_Props {
    movie_name: string;
    movie_img_url: string;
    movie_description: string;
    movie_statistics: ratings;
    youtube_trailer_code: string;
    movie_id: number;
}
