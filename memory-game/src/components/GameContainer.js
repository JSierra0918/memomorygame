import React from 'react';
import Header from './Header';
import Main from './Main';
import Grid from './Grid';
import ImageArray from '../Images.json';

  //Global Variable
  let newImageArray = [];

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
            topScore: currentTopScore,
            clicked: this.state.clicked = true
        })
    }

    //create a random Grid element
    renderElements = () => {
         newImageArray = [...ImageArray];

        for (let i = 0; i < ImageArray.length; i++) {
            let randomNum = Math.floor(Math.random()*ImageArray.length);

            const element =ImageArray[randomNum];
            let url =process.env.PUBLIC_URL + element.image;

            //This for loop is only running once.
            console.log(url);
        return  <Grid image={url} wasClicked={this.addScore} key={element.id}/> 
        }
        // return <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/> 
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

