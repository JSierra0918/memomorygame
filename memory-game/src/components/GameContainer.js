import React from 'react';
import Header from './Header';
import Main from './Main';
import Grid from './Grid';


class GameContainer extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        clicked: false
    }


     addScore = () => {
        let currentTopScore = this.state.topScore;

        console.log("clicked!");

        if (this.state.score >= currentTopScore) {
            currentTopScore = this.state.score;
        }

        this.setState({
            score:  this.state.score + 1,
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
                        <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/> 
                        {this.renderElements()} 
                        {/* <img src={process.env.PUBLIC_URL + "/assets/ace.jpeg"} alt=""/> */}
                </Main>
            </div>
        )
    }
}

export default GameContainer;

