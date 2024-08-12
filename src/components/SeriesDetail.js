import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { carData } from '../Data'

const SeriesDetail = ({ onCarClick }) => {
	const { seriesId } = useParams()

	const seriesMap = {
		'1-Series': 'BMW 1 Series',
		'2-Series': 'BMW 2 Series',
		'3-Series': 'BMW 3 Series',
		'4-Series': 'BMW 4 Series',
		'5-Series': 'BMW 5 Series'
	}

	const seriesName = seriesMap[seriesId]
	const series = carData.find(item => item.series === seriesName)

	useEffect(() => {
		const carItems = document.querySelectorAll('.car__item');
		// Adding empty event listeners to activate CSS hover on mobile devices
		carItems.forEach(item => {
			item.addEventListener('touchstart', () => { });
			item.addEventListener('touchend', () => { });
		});
	}, []);

	return (
		<div className='series__detail'>
			<h2 className='series__title'>{seriesName}</h2>
			{series ? (
				<div>
					<p className='series__description'>{series.description}</p>
					<div className='cars'>
						{series.cars.map(car => (
							<div key={car.id} className='car__item' onClick={() => onCarClick(car)}>
								<img src={car.image} alt={car.name} className='car__image' />
								<h3>{car.name}</h3>
								<p>{car.description}</p>
							</div>
						))}
					</div>
				</div>
			) : (
				<p>Series not found</p>
			)}
		</div>
	)
}

export default SeriesDetail