import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{/* map through robots array, return card comp for each entry */}
			{robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={robots[i].id} 
							name={robots[i].name} 
							email={robots[i].email}
							/>
					);
				})}
		</div>
	);
}

export default CardList;