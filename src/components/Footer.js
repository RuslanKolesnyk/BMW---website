import React from 'react'
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
	const currentYear = new Date().getFullYear()
	return (
		<footer className='footer'>
			<div className='footer__container'>
				<div className='footer__section'>
					<h3>Contact Us</h3>
					<p><FaEnvelope /> Email: info@bmwcars.com</p>
					<p><FaPhone /> Phone: +123 456 7890</p>
				</div>
				<div className='footer__section'>
					<h3>Follow Us</h3>
					<div className='social__icons'>
						<a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
						<a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
						<a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
					</div>
				</div>
				<div className='footer__section'>
					<h3>About Us</h3>
					<p>BMW Cars is a leading manufacturer of luxury vehicles. We are committed to providing the best driving experience with our range of premium cars.</p>
				</div>
			</div>
			<p>&copy; {currentYear} BMW Cars. All rights reserved.</p>
		</footer>
	)
}

export default Footer