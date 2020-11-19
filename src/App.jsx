import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

	async function fetchTours() {
		// set loading to true here
		setLoading(true)

		const data = await fetch(url)
		const jsonData = await data.json()
		setTours(jsonData)

		setLoading(false)
		// set loading to false here
	}

	useEffect(() => {
		fetchTours()
	}, [])

	if (loading) {
		return <Loading />
	}

	return tours.map((tour) => {
		return <h2>{tour.name}</h2>
	})
}

export default App
