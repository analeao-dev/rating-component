import { useState } from 'react';
import Star from './Star';
import Modal from './Modal';
import Button from './Button';

interface RatingProps {
	heading: string;
	color: string;
	feedbackMessages: string[];
}

const Rating = ({ heading, color, feedbackMessages }: RatingProps) => {
	const [rating, setRating] = useState<number>(0);
	const [hover, setHover] = useState<number>(0);
	const [submitted, setSubmitted] = useState(false);

	const stars = Array.from({ length: 5 }, (_, i) => i + 1);

	const handleSubmit = () => {
		if (rating > 0) {
			setSubmitted(true);
		}
	};

	const closeModal = () => {
		setSubmitted(false);
		setRating(0);
		setHover(0);
	}

	return (
		<div className='rating-container'>
			<h2>{heading}</h2>
			<div className='stars'>
				{stars.map((star) => (
					<Star key={star} star={star} hover={hover} rating={rating} color={color} ratingClick={setRating} hovering={setHover} />
				))}
			</div>

			{rating > 0 && <p className='feedback'>{feedbackMessages[rating - 1]}</p>}

			<Button className='submit-btn' onClick={handleSubmit} disabled={rating === 0}>Submit</Button>

			<Modal rating={rating} isOpen={submitted} onClose={closeModal} />
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
