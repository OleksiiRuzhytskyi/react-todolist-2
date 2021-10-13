import React from "react";
import Task from "./Task";
import List from "./List";


class CustomInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				todos: [],
		}

		this.addTask = this.addTask.bind(this)
		this.removeTask = this.removeTask.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
	}

	addTask(inputValue) {  
		if (inputValue) {
			this.setState({
				todos: [...this.state.todos, {
					id: Math.random().toString(16).substr(1,9),
					inputValue: inputValue,
					complete: false,
				}] 
			 })			
		}		
		// console.log('Value:', inputValue)    
	}

	removeTask(id) {
		this.setState({		
			todos: this.state.todos
			.filter(item => item.id !== id)
			})
	}

	handleToggle(id) {
		console.log('before', this.state.todos)
		this.setState({
			todos: this.state.todos
			.map(
				item => item.id === id ? {...item, complete: !item.complete} : {...item}
				)
		})
		console.log('after', this.state.todos)
	}

	render() {
		console.log('render', this.state.todos)
		return (
			<>
				<h1>List Task: {this.state.todos.length}</h1>
				<Task 
					addTask={this.addTask} 
					/>

					<List 
						handleToggle={this.handleToggle}
						todos={this.state.todos}
						key={this.state.todos.id}
						removeTask={this.removeTask}
					/>
			</>	
		)
	}
}

export default CustomInput;