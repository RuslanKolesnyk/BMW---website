import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/bmw-logo.png'
import { FaBars, FaTimes, FaHome, FaCar, FaPhone, FaCalendarAlt } from 'react-icons/fa'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
		if (isOpen) setIsDropdownOpen(false)
	}

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen)
	}

	return (
		<header className='header'>
			<div className='logo__container'>
				<Link to='/' className='logo__link'>
					<img src={logo} alt='BMW Logo' className='logo' />
					<span className='site__title'>BMW Cars</span>
				</Link>
				<div className='menu__icon' onClick={toggleMenu}>
					{isOpen ? <FaTimes /> : <FaBars />}
				</div>
			</div>
			<nav className={`nav ${isOpen ? 'open' : ''}`}>
				<ul className='nav__list'>
					<li className='nav__item'>
						<Link to='/' onClick={toggleMenu}>
							<FaHome className='nav__icon' /> Home
						</Link>
					</li>
					<li className={`nav__item ${isDropdownOpen ? 'open' : ''}`}>
						<span onClick={toggleDropdown}>
							<span className='dropdown__arrow'> <FaCar className='nav__icon' /> Models &#9662;</span>
						</span>
						<ul className='dropdown__menu'>
							<li><Link to='/models/1-Series' onClick={toggleMenu}>1 Series</Link></li>
							<li><Link to='/models/2-Series' onClick={toggleMenu}>2 Series</Link></li>
							<li><Link to='/models/3-Series' onClick={toggleMenu}>3 Series</Link></li>
							<li><Link to='/models/4-Series' onClick={toggleMenu}>4 Series</Link></li>
							<li><Link to='/models/5-Series' onClick={toggleMenu}>5 Series</Link></li>
						</ul>
					</li>
					<li className='nav__item'>
						<Link to='/contact' onClick={toggleMenu}>
							<FaPhone className='nav__icon' /> Contact
						</Link>
					</li>
					<li className='nav__item'>
						<Link to='/test-drive' onClick={toggleMenu}>
							<FaCalendarAlt className='nav__icon' /> Test Drive
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default Header