import React from 'react';

class Task extends React.Component {
    constructor(props) {
			super(props);
			this.state = {
				inputValue: '',
			}

			this.handleSubmit = this.handleSubmit.bind(this)
			this.handleChange = this.handleChange.bind(this)
			this.handleKeyDown = this.handleKeyDown.bind(this)
			this.addTask = this.addTask.bind(this)
		}

		handleSubmit(e) {
			e.preventDefault() 
			this.props.addTask()
		}

		handleChange(e){
			this.setState({
				inputValue: e.target.value
			})
		}

		handleKeyDown(e){
				if (e.key === 'Enter' && this.state.inputValue.length) {
				this.props.addTask(this.state.inputValue)
				this.setState({
					inputValue: ''
				})
			}		
		}

		addTask(){
			if (this.state.inputValue.length) {
				this.props.addTask(this.state.inputValue)
				this.setState({
					inputValue: ''
				})
			}
		}

	render() {		
	 		return (
			<>
				<form onSubmit={this.handleSubmit}>
					<input 
						type="text"
						value={this.state.inputValue}
						placeholder="Enter your task"
						onChange={this.handleChange}
						onKeyDown={this.handleKeyDown}
						/>
						<input type="button" value="Добавить " onClick={this.addTask} />
					</form>
				</>
		)
	}
}

export default Task

