import React, { useEffect, useState } from "react";

//create your first component

const Counter = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		let intervalId = setInterval(() => {
			setCount(count => count + 1)
		},1000);
		return () => {
			clearInterval(intervalId)
		}
	},[count])

	return (
		<div className="counter-container">
			<div className="counter-container-element">
				<i className="bi bi-clock"></i>
			</div>
			<div className="counter-container-element"><p>{(Math.floor(count/100000))%10}</p></div>
			<div className="counter-container-element"><p>{(Math.floor(count/10000))%10}</p></div>
			<div className="counter-container-element"><p>{(Math.floor(count/1000))%10}</p></div>
			<div className="counter-container-element"><p>{(Math.floor(count/100))%10}</p></div>
			<div className="counter-container-element"><p>{(Math.floor(count/10))%10}</p></div>
			<div className="counter-container-element"><p>{count%10}</p></div>
		</div>
	)

}

const Home = () => {
	
	return (
	
		<Counter/>
	);
};

export default Home;
