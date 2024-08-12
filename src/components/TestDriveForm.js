import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import CalendarComponent from './Calendar'
import { carData } from '../Data'

const TestDriveForm = () => {
	const location = useLocation()
	const initialCar = location.state?.car || {}
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [selectedDate, setSelectedDate] = useState('')
	const [selectedCar, setSelectedCar] = useState(initialCar.name || '')
	const [selectedCarImage, setSelectedCarImage] = useState(initialCar.image || '')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = {
			name,
			email,
			selectedDate,
			selectedCar,
		}
		console.log('Form submitted', formData)

		setName('')
		setEmail('')
		setSelectedDate('')
		setSelectedCar('')
		setMessage(`Thank you for your request! We will contact you soon. You selected date: ${selectedDate}. Your car: ${selectedCar}`)
	}

	const handleDateSelect = (date) => {
		setSelectedDate(date)
		setMessage(`You selected: ${date}`)
	}

	const handleCarChange = (e) => {
		const carName = e.target.value
		setSelectedCar(carName)
		const carImage = carData
			.flatMap((series) => series.cars)
			.find((car) => car.name === carName)?.image
		setSelectedCarImage(carImage)
	}

	return (
		<div className='test-drive__form'>
			<h2>Schedule a test drive</h2>
			<form onSubmit={handleSubmit}>
				<div className='form__group'>
					<label htmlFor='name'>Name</label>
					<input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} required />
				</div>
				<div className='form__group'>
					<label htmlFor='email'>Email</label>
					<input type='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} required />
				</div>
				<div className='form__group'>
					<label htmlFor='car'>Select a car</label>
					<select id='car' value={selectedCar} onChange={handleCarChange} required>
						<option value=''>Select a car</option>
						{carData.map((series) =>
							series.cars.map((car) => (
								<option key={car.id} value={car.name}>
									{car.name}
								</option>
							))
						)}
					</select>
				</div>
				<CalendarComponent onDateSelect={handleDateSelect} />
				<button type='submit'>Submit request</button>
			</form>
			{message && (
				<div id='message' className='message'>
					<p>{message}</p>
				</div>
			)}
			{selectedCarImage && (
				<div className='image__container'>
					<img src={selectedCarImage} alt={selectedCar} className='selected-car__image' />
				</div>
			)}
		</div>
	)
}

export default TestDriveForm