import React from 'react';
import ReactDom from 'react-dom'
import '../style/Dice.css'


class Dice extends React.Component {
    
    state = {dice1: 6, dice2: 6}
    
    rollDie() {
        return  Math.floor(Math.random() * 6) + 1;   // returns a random number from 1-6
    }

    handleClick() {
        var d1 = this.rollDie()
        var d2 = this.rollDie()
        this.setState({dice1: d1, dice2: d2})
        this.props.handleClick(d1 + d2);
    }
    
    render() {
        return (
            <div className="ui center aligned container" id="dice">
                <img id="dice1" alt="" src={"assets/" + this.state.dice1 + ".png"}/> 
                <img id="dice2" alt="" src={"assets/" + this.state.dice2 + ".png"}/> 
                <button id="diceButton" className="massive ui inverted button" onClick={this.handleClick.bind(this)}>Roll!</button>
            </div>
        );
    }
}


export default Dice;