import React from 'react';
import ReactDom from 'react-dom'
import '../style/Dice.css'


class Dice extends React.Component {
    state = {dice1: "assets/6.png", dice2: "assets/6.png"}
    
    rollDie() {
        return  Math.floor(Math.random() * 6) + 1;   // returns a random number from 1-6
    }

    handleClick() {
        this.setState({dice1: "assets/" + this.rollDie() + ".png", dice2: "assets/" + this.rollDie() + ".png"})
        console.log(this.state);

    }
    
    render() {
        return (
            <div className="ui center aligned container" id="dice">
                <img id="dice1" alt="" src={this.state.dice1}/> 
                <img id="dice2" alt="" src={this.state.dice2}/> 
                <button className="massive ui inverted button" onClick={this.handleClick.bind(this)}>Roll!</button>
            </div>
        );
    }
}


export default Dice;