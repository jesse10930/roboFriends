import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		// on input box change, run searchChange
		<div className='pa2'>
			<input 
				className='tc pa3 ba b--green bg-lightest-blue'
				type='search' 
				placeholder='search robots' 
				onChange={searchChange}
				/>
		</div>
	);
}

export default SearchBox;