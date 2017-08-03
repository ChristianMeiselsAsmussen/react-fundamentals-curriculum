import React from 'react';
import Button from './ui/Button';
import { Link } from 'react-router-dom';

class Detail extends React.Component {

	constructor(props) {
		super(props);
	}

	goHome = (event) => {
		event.preventDefault();
		this.props.history.push({
			pathname: '/' 
		});
	}

  render() {
    return (
      <Button onButtonClick={this.goHome}>Go Home</Button>
    );
  }
}
export default Detail