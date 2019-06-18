import React from 'react';
import Header from './Header';

class GameContainer extends React.Component {
    state = {
        score : 0,
        topScore: 0,
        clicked: false
    }

    render(){
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
            </div>
        )
    }
}

export default GameContainer;

