import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		// initializing state
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	// on initial mount, get data from jsonplaceholder and store in robots state
	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	// set searchfield state when typing in search box 
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		// pass in state
		const { robots, searchfield } = this.state;
		// make user input lower case, and declare all robots that contain string
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		// check if any robots array has input, return values if so
		if (!robots.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<div className='tc'>
					<h1 className='f1'>RoboFriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots} />
					</Scroll>
				</div>	
			);
		}
	}
}

export default App;