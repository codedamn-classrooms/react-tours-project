import React, { useState } from 'react'

const Tour = (props) => {
	const { id, image, info, price, name, removeTour } = props

	const [readMore, setReadMore] = useState(true)

	return (
		<article className="single-tour">
			<img src={image} alt={name} />
			<footer>
				<div className="tour-info">
					<h4>{name}</h4>
					<h4 className="tour-price">${price}</h4>
				</div>
				{/* make modifications here */}
				<p>
<<<<<<< HEAD
					{info}
					<button>read more</button>
				</p>
=======
					{readMore ? `${info.substring(0, 200)}...` : info}{' '}
					<button onClick={() => setReadMore((state) => !state)}>
						{readMore ? 'read more' : 'show less'}
					</button>
				</p>
				{/* add click listener to this button passing id */}
>>>>>>> a7890fb214488320845a71dfdb83b3ad264097a4
				<button className="delete-btn">Not Interested</button>
			</footer>
		</article>
	)
}

export default Tour
