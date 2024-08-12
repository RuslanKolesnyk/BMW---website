import React, { useEffect } from 'react'

const SeriesList = ({ carData, onCarClick }) => {

	useEffect(() => {
		const carItems = document.querySelectorAll('.car__item');
		// Adding empty event listeners to activate CSS hover on mobile devices
		carItems.forEach(item => {
			item.addEventListener('touchstart', () => { });
			item.addEventListener('touchend', () => { });
		});
	}, []);

	return (
		<div className='series__list'>
			{carData.map((series) => (
				<div key={series.id} className='series__item'>
					<h3>{series.series}</h3>
					<p>{series.description}</p>
					<div className='cars'>
						{series.cars.map((car) => (
							<div key={car.id} className='car__item' onClick={() => onCarClick(car)}>
								<img src={car.image} alt={car.name} className='car__image' />
								<h3>{car.name}</h3>
								<p>{car.description}</p>
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
export default SeriesList