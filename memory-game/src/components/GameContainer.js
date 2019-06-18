import React from 'react';
import Header from './Header';
import Main from './Main';
import Grid from './Grid';


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
                <Main>
                    <h3>HELLO There!</h3>
                    <ul>
                        <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} />
                        {/* <img src={process.env.PUBLIC_URL + "/assets/ace.jpeg"} alt=""/> */}
                    </ul>
                </Main>
            </div>
        )
    }
}

export default GameContainer;

