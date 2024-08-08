import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import SeriesDetail from './components/SeriesDetail';
import Modal from './components/Modal';
import TestDriveForm from './components/TestDriveForm';

function App() {
	const [selectedCar, setSelectedCar] = useState(null);

	const handleCarClick = (car) => {
		setSelectedCar(car);
	};
	const handleCloseModal = () => {
		setSelectedCar(null);
	};
	return (
		<Router basename="/BMW---website">
			<div className='app'>
				<Header />
				<Routes>
					<Route path='/' element={<Home onCarClick={handleCarClick} />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/models/:seriesId' element={<SeriesDetail onCarClick={handleCarClick} />} />
					<Route path='/test-drive' element={<TestDriveForm />} />
				</Routes>
				<Footer />
				{selectedCar && <Modal car={selectedCar} onClose={handleCloseModal} />}
			</div>
		</Router>
	);
}

export default App;