import React from 'react';



class List extends React.Component {
    render() {		
			return(		
				<div className="listItems" key={this.props.todos.id} >
				{this.props.todos
					.map(item => 
						<>
						<div className="flex"
						key ={item.id} 
						>
						<div
							className={item.complete ? 'item-strike' : 'item-text'}
							onClick={() => this.props.handleToggle(item.id)} 
							style={							{
								cursor: 'pointer',
								padding: '5px',	
							}}	
								key ={item.id} 
								>
								{item.inputValue}													
						</div>

							<div style={{paddingRight: '10px'}}
									onClick={() => this.props.removeTask(item.id)}
									>
									X
							</div>
							</div>

						</>
						)
					}				
				</div>
			)  
	}
}


export default List