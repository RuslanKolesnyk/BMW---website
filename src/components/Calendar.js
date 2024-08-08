// ONLY JavaScript code for Calendar
import React, { useEffect } from 'react'

class Calendar {
	constructor(year, month, onDateSelect) {
		this.year = year
		this.month = month
		this.weeksInMonth = 6
		this.daysPerWeek = 7
		this.today = new Date()
		this.onDateSelect = onDateSelect
		this.monthNames = [
			'January', 'February', 'March', 'April', 'May', 'June',
			'July', 'August', 'September', 'October', 'November', 'December'
		]
		this.dayOfTheWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
	}

	getFirstDayOfMonth() {
		return (new Date(this.year, this.month, 1).getDay() + 6) % 7
	}

	getDaysInMonth() {
		return new Date(this.year, this.month + 1, 0).getDate()
	}

	generateCalendar() {
		const calendar = []
		const firstDay = this.getFirstDayOfMonth()
		const daysInMonth = this.getDaysInMonth()
		let dayNumber = 1

		for (let i = 0; i < this.weeksInMonth; i++) {
			const week = []
			for (let j = 0; j < this.daysPerWeek; j++) {
				if (i === 0 && j < firstDay) {
					week.push('')
				} else if (dayNumber > daysInMonth) {
					week.push('')
				} else {
					week.push(dayNumber)
					dayNumber++
				}
			}
			calendar.push(week)
		}
		return calendar
	}

	createDivElement(content, className) {
		const div = document.createElement('div')
		div.textContent = content
		if (className) {
			div.className = className
		}
		return div
	}

	handleDayClick(day) {
		const selectedDate = `${this.year} - ${this.monthNames[this.month]} - ${day}`
		this.onDateSelect(selectedDate)
	}

	isToday(day) {
		const currentDay = this.today.getDate()
		const currentMonth = this.today.getMonth()
		const currentYear = this.today.getFullYear()
		return day === currentDay && this.month === currentMonth && this.year === currentYear
	}

	changeMonth(monthChange) {
		this.month += monthChange
		if (this.month < 0) {
			this.month = 11
			this.year--
		} else if (this.month > 11) {
			this.month = 0
			this.year++
		}
		this.displayCalendar()
	}

	displayCalendar() {
		const calendar = this.generateCalendar()
		const container = document.createElement('div')
		container.className = 'calendar__container'

		const header = this.createDivElement(`${this.year} - ${this.monthNames[this.month]}`, 'calendar__header')
		container.append(header)

		const buttons = this.createDivElement('', 'calendar__buttons')

		const prevButton = document.createElement('button')
		prevButton.textContent = '<'
		prevButton.onclick = () => this.changeMonth(-1)
		buttons.append(prevButton)

		const nextButton = document.createElement('button')
		nextButton.textContent = '>'
		nextButton.onclick = () => this.changeMonth(1)
		buttons.append(nextButton)
		container.append(buttons)

		const weekDaysContainer = this.createDivElement('', 'calendar__week-days')

		this.dayOfTheWeek.forEach((day) => {
			const dayDiv = this.createDivElement(day)
			weekDaysContainer.append(dayDiv)
		})
		container.append(weekDaysContainer)

		const daysContainer = this.createDivElement('', 'calendar__days')

		calendar.forEach((week) => {
			week.forEach((day, dayIndex) => {
				const dayDiv = this.createDivElement(day, `calendar__day calendar__day-column-${dayIndex}`)
				if (this.isToday(day)) {
					dayDiv.classList.add('calendar__today')
				}
				if (day) {
					dayDiv.addEventListener('click', () => {
						this.handleDayClick(day)
					})
				}
				daysContainer.append(dayDiv)
			})
		})
		container.append(daysContainer)

		const calendarContainer = document.getElementById('calendar-container')
		calendarContainer.innerHTML = ''
		calendarContainer.append(container)
	}
}

const CalendarComponent = ({ onDateSelect }) => {
	useEffect(() => {
		const today = new Date()
		const month = today.getMonth()
		const year = today.getFullYear()

		const calendar = new Calendar(year, month, onDateSelect)
		calendar.displayCalendar()
	}, [onDateSelect])

	return <div id='calendar-container'></div>
}

export default CalendarComponent