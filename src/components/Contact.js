import React, { useState } from 'react'

const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submitted, setSubmitted] = useState(false)
	const [submittedData, setSubmittedData] = useState(null)

	const handleSubmit = (e) => {
		e.preventDefault()
		const formData = { name, email, message }
		setSubmittedData(formData)
		setSubmitted(true)
		setName('')
		setEmail('')
		setMessage('')
	}

	return (
		<main className='contact'>
			<h1>Contact Us</h1>
			{submitted ? (
				<div className='submitted__message'>
					<h2>Thank you for your message!</h2>
					<p><strong>Name:</strong> {submittedData.name}</p>
					<p><strong>Email:</strong> {submittedData.email}</p>
					<p><strong>Message:</strong> {submittedData.message}</p>
					<button onClick={() => setSubmitted(false)}>Submit another response</button>
				</div>
			) : (
				<form onSubmit={handleSubmit} className='contact__form'>
					<div className='form__group'>
						<label htmlFor='name'>Name</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>
					</div>
					<div className='form__group'>
						<label htmlFor='email'>Email</label>
						<input
							type='email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className='form__group'>
						<label htmlFor='message'>Message</label>
						<textarea
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
					</div>
					<button type='submit'>Send Message</button>
				</form>
			)}
		</main>
	)
}

export default Contact