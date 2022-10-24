interface ratingProps {
    stars: number;
}

export default function Ratings({ stars }: ratingProps) {
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
                                className="mask mask-star cursor-default opacity-30"
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
