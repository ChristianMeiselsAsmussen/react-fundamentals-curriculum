import React from 'react';

class Main extends React.Component {
  // static propTypes = {
  //   name: React.PropTypes.string,
  // };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-component">
        <header>
          <h1>Hello Main.js</h1>
        </header>  
        <div className="content">
          <h2>Enter a City or State</h2>
          <form noValidate>
            <input type="text" placeholder="location"/>
            <button>Get Weather</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;