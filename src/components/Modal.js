import React from 'react'
import { useNavigate } from 'react-router-dom'

const Modal = ({ car, onClose }) => {
	const navigate = useNavigate()

	if (!car) return null

	const handleTestDriveClick = () => {
		navigate('/test-drive', { state: { car } })
		onClose()
	}
	return (
		<div className='modal'>
			<div className='modal__content'>
				<span className='close' onClick={onClose}>&times;</span>
				<h2>{car.name}</h2>
				<img src={car.image} alt={car.name} className='car__image' />
				<p>{car.description}</p>
				<button onClick={handleTestDriveClick}>Schedule a test drive</button>
			</div>
		</div>
	)
}
export default Modal