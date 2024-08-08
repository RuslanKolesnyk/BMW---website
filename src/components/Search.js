import React, { useState, useRef } from 'react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ onSearch }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const inputRef = useRef(null)

	const handleSearchChange = (e) => {
		setSearchTerm(e.target.value)
		onSearch(e.target.value)
	}
	const handleIconClick = () => {
		inputRef.current.focus()
	}

	return (
		<div className='search'>
			<div className='search__container'>
				<FaSearch className='search__icon' onClick={handleIconClick} />
				<input
					type='text'
					placeholder='Search by name'
					value={searchTerm}
					onChange={handleSearchChange}
					ref={inputRef}
				/>
			</div>
		</div>
	)
}
export default Search