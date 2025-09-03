import { useState } from 'react';

const Rating = () => {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);

	const stars = Array.from({ length: 5 }, (_, i) => i + 1);
	const feedbackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

	return (
		<div className='rating-container'>
			<h2>Rate Your Experience</h2>
			<div className='stars'>
				{stars.map((star) => (
					<span
						onClick={() => setRating(star)}
						onMouseEnter={() => setHover(star)}
						onMouseLeave={() => setHover(0)}
						key={star}
						className={`star ${star <= (hover || rating) ? 'active' : ''}`}
					>
						{'\u2605'}
					</span>
				))}
			</div>
			{rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}
		</div>
	);
};

// const styles: { container: CSSProperties; heading: CSSProperties } = {
// 	container: {
// 		fontFamily: 'Arial, sans-serif',
// 		padding: '16px',
// 	},
// 	heading: {
// 		textAlign: 'center',
// 		color: 'red',
// 	},
// };

export default Rating;
