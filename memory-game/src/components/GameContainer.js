import React from 'react';
import Header from './Header';
import Main from './Main';
import Grid from './Grid';
import ImageArray from '../Images.json';


class GameContainer extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        clicked: false
    }


     addScore = () => {
        let currentTopScore = this.state.topScore;
        let newScore = this.state.score;
        newScore++;

        if (newScore >= currentTopScore) {
            currentTopScore = newScore;
        }

        this.setState({
            score:  newScore,
            topScore: currentTopScore
        })
    }

    //create a random Grid element
    renderElements = () => {
        return <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/> 
    }

    render(){
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Main>
                    <h3>HELLO There!</h3>
                    <div className = "grid-container"> 
                        <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/> 
                        {this.renderElements()} 
                    </div>
                </Main>
            </div>
        )
    }
}

export default GameContainer;

