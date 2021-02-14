import React from 'react';
import ReactDom from 'react-dom'
import '../style/Rolled.css'



class Rolled extends React.Component {
 
    render () {
        return (
            <div id="rolledHistory">
                <h1> Roll History </h1>
                <ul id="rolled">
                    {this.props.rolled.map(number=> (<li>{number}</li>))} 
                </ul>
            </div> 
        );
    }
}


export default Rolled;