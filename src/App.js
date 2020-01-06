import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import Car from './components/Car';
import SpeedSign from './components/SpeedSign';
import Portal from './components/Portal';

import NavSign from './components/NavSign';


import uuid from 'uuid';
import axios from 'axios';

import logo from './components/svg/401.svg';

import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';


import './App.css';

class App extends Component {
	state = {
		todos: []
	};

	componentDidMount() {
		axios
			.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
			.then((res) => this.setState({ todos: res.data }));
	}

	// Toggle Complete
	markComplete = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		});
	};

	// Delete Todo
	delTodo = (id) => {
		axios
			.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
			.then((res) =>
				this.setState({
					todos: [...this.state.todos.filter((todo) => todo.id !== id)]
				})
			);
	};

	// Add Todo
	addTodo = (title) => {
		axios
			.post('https://jsonplaceholder.typicode.com/todos', {
				title,
				completed: false
			})
			.then((res) => {
				res.data.id = uuid.v4();
				this.setState({ todos: [...this.state.todos, res.data] });
			});
	};

	render() {
		return (
			<Router>
				<div className='App'>
					<div className='container'>
						<SideNav
							onSelect={(selected) => {
								// Add your code here
							}}
						>
							<SideNav.Toggle />
							<SideNav.Nav defaultSelected="home">
								<NavItem eventKey="home">
									<NavIcon>
										<img src={logo}/>
									</NavIcon>
									<NavText>
										Home
									</NavText>
								</NavItem>
								<NavItem eventKey="charts">
									<NavIcon>
										<i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
									</NavIcon>
									<NavText>
										Charts
									</NavText>
									<NavItem eventKey="charts/linechart">
										<NavText>
											Line Chart
										</NavText>
									</NavItem>
									<NavItem eventKey="charts/barchart">
										<NavText>
											Bar Chart
										</NavText>
									</NavItem>
								</NavItem>
							</SideNav.Nav>
						</SideNav>



						<Portal />


						<Route
							exact
							path='/'
							render={(props) => (
								<React.Fragment>
									<NavSign />

								</React.Fragment>
							)}
						/>
						<Route path='/about' component={About} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
