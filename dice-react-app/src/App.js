import React from 'react';
import ReactDOM from 'react-dom';
import Dice from './components/Dice';
import Rolled from'./components/Rolled';


class App extends React.Component {
    constructor() {
        super();
    
        this.state = {rolled: []};
    
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(rolledValue) {
        let rollHistory = [...this.state.rolled];
        rollHistory.push(rolledValue);
        if (rollHistory.length > 10) {
            rollHistory = rollHistory.slice(-10)
        }
        this.setState({rolled: rollHistory});
    }

    render () {
        return (
            <div class="ui stackable three column grid">
                <div class="row">
                    <div class="column">
                        <Dice handleClick={this.handleClick} />
                    </div>
                    <div class="column">
                        <Rolled rolled={this.state.rolled}/>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;