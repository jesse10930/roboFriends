import React from 'react';

const Scroll = (props) => {
	return (
		// scroll box for user cards
		<div style={{ overflowY: 'scroll', border: '5px solid black', height: '800px'}}>
			{props.children}
		</div>
	);
};

export default Scroll;