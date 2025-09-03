import { useState } from 'react';
import Rating from './components/Rating';

// const Counter = () => {
// 	const [count, setCount] = useState(() => {
// 		console.log('Init count state');
// 		return 0;
// 	});

// 	const increment = () => {
// 		setCount((prevState) => {
// 			console.log(prevState);
// 			return prevState + 1;
// 		});
// 	};

// 	return (
// 		<>
// 			<h2>Count: {count}</h2>
// 			<button onClick={increment}>Increment</button>
// 		</>
// 	);
// };

const App = () => {
	return (
		<div>
			{/* <Counter /> */}
			<Rating heading='How do you feel about React?' color='gold' feedbackMessages={['Hate it', 'Deslike it', 'Meh', 'Like it', 'Love it']}/>
		</div>
	);
};

export default App;
