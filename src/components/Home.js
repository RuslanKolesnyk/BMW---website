import React, { useState } from 'react'
import SeriesList from './SeriesList'
import Search from './Search'
import { carData } from '../Data'

const Home = ({ onCarClick }) => {
	const [filteredCars, setFilteredCars] = useState(carData)

	const handleSearch = (searchTerm) => {
		let filtered = carData.map((series) => ({
			...series,
			cars: series.cars.filter((car) =>
				car.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
			),
		})).filter((series) => series.cars.length > 0)
		setFilteredCars(filtered)
	}

	return (
		<main>
			<Search onSearch={handleSearch} />
			<SeriesList carData={filteredCars} onCarClick={onCarClick} />
		</main>
	)
}

export default Home