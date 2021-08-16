import React from 'react'
import Tour from './Tour'

const Tours = (props) => {
	// take out tours from props
<<<<<<< HEAD
=======
	const { tours, removeTour } = props
>>>>>>> a7890fb214488320845a71dfdb83b3ad264097a4

	return (
		<section>
			<div className="title">
				<h2>All Tours</h2>
				<div className="underline"></div>
			</div>
			<div>
<<<<<<< HEAD
				{/* map over tours and display UI */}
				{/* read instructions how UI should look */}
=======
				{tours.map((tour) => {
					return <Tour key={tour.id} removeTour={removeTour} {...tour} />
				})}
>>>>>>> a7890fb214488320845a71dfdb83b3ad264097a4
			</div>
		</section>
	)
}

export default Tours
