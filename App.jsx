import React from 'react';

class App extends React.Component{
	render(){
		return(
			<div>
				<h1>{this.props.headerProp}</h1>
				<h2>{this.props.contentProp}</h2>
				{/* load default props*/}
				<p>{this.props.name}</p>
				<p>{this.props.address}</p>
			</div>
		);
	}
}
App.defaultProps = {
	'name' : 'Ipan Taupik Rahman',
	'address' : 'cimahi'
};
export default App;