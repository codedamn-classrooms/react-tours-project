import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'

const url = 'https://course-api.com/react-tours-project'

function App() {
	const [tours, setTours] = useState([])
	const [loading, setLoading] = useState(true)

	function removeTour(tourID) {
		// add logic to update state for tour removal
	}

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
		return (
			<main>
				<Loading />
			</main>
		)
	}

	return (
		<main>
<<<<<<< HEAD
			{/* send tours here */}
			<Tours tours={[]} />
=======
			<Tours tours={tours} removeTour={removeTour} />
>>>>>>> a7890fb214488320845a71dfdb83b3ad264097a4
		</main>
	)
}

export default App
