import React, { Component } from 'react';

class App extends Component {
  state = {         
    person: {
      fullName: 'Imed Tayeb',
      bio: 'very good and very nice',
      imgSrc: 'https://imgflip.com/s/meme/Cute-Cat.jpg', 
      profession: 'web Developer',
    },
    show: false,
    mountedTime: null,

  };
  componentDidMount() {
    this.setState({ mountedTime: new Date().toLocaleTimeString() });

    this.interval = setInterval(() => {
      this.setState({ mountedTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };
  
  render() {
    return (
<div className="App">
      <button onClick={this.toggleShow}>
        Toggle Profile
      </button>

      {this.state.show && (
        <div>
          <h2>{this.state.person.fullName}</h2>
          <p>{this.state.person.bio}</p>
          <img src={this.state.person.imgSrc} alt="Profile" />
          <p>Profession: {this.state.person.profession}</p>
          <p>Component mounted at: {this.state.mountedTime}</p>

        </div>
      )}
    </div>
  );
} 
}
export default App;
