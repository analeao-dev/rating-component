interface StarProps {
    star: number;
    rating: number;
    hover: number;
    color: string;
    ratingClick: (value: number) => void;
    hovering: (value: number) => void;
};

const Star = ({ star, hover, rating, color, ratingClick, hovering }: StarProps) => {
    return (
        <span onClick={() => ratingClick(star)} onMouseEnter={() => hovering(star)} onMouseLeave={() => hovering(0)} className='star' style={{ color: star <= (hover || rating) ? color : '#ccc' }}>{'\u2605'}</span>
    )
}

export default Star;