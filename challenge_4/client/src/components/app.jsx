import React from 'react';
import Board from './board.jsx';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // toggle user turn
      player: 1,
      // all square ids set into player array. check for wins after each iteration
      play1: [],
      play2: [],
      // pick column 1
      1: [0,0,0,0,0,0],
      2: [0,0,0,0,0,0],
      3: [0,0,0,0,0,0],
      4: [0,0,0,0,0,0],
      5: [0,0,0,0,0,0],
      6: [0,0,0,0,0,0],
      7: [0,0,0,0,0,0]

    };
    this.MouseOver = this.MouseOver.bind(this);
    this.MouseOut = this.MouseOut.bind(this);
    this.MouseClick = this.MouseClick.bind(this);
  }


  // drop peice hover handlers
  MouseOver(event) {
    if (this.state.player === 1) {
      event.target.style.background = 'url("play1p.png")';
      event.target.style.backgroundSize = 'contain';
    } else {
      event.target.style.background = 'url("play2p.png")';
      event.target.style.backgroundSize = 'contain';
    }
  }
  MouseOut(event) {
    event.target.style.background = "";
  }

  // drop piece hover handler
  MouseClick(event) {
    var col = event.target.getAttribute("data-col");
    var stack = this.state[col];

    // var index = 5;

    var index = stack.lastIndexOf(0)
    if(index === -1) {
      console.log('This column is filled')
    } else {
      var row = index + 1;
      stack[index] = this.state.player
      this.setState({ [col]: stack })
      var square = `${col}${row}`;
      var element = document.getElementById(`sq` + square);
      if (this.state.player === 1) {
        element.style.backgroundColor = 'red';
      element.style.zIndex = -99;
      } else {
        element.style.backgroundColor = 'yellow';
      element.style.zIndex = -99;
      }

      this.state.player === 1 ? this.state.player = 2 : this.state.player = 1;

      // if(this.state.player === 1) {
      //   this.state.player = 2
      // } else {
      //   this.state.player = 1
      // }
    }
  }


  render() {
    return (
      <div>
        <h1>Connect Four</h1>
        <Board MouseOver={this.MouseOver} MouseOut={this.MouseOut} MouseClick={this.MouseClick} Play1={this.state.play1} Play2={this.state.play2} />
      </div>
    );
  }
}

export default App;
