import React from 'react';
import Header from './Header';
import Main from './Main';
import Grid from './Grid';
import LeftSide from './LeftSide';

import ImageArray from '../Images.json';

  //Global Variable
  let newImageArray = [...ImageArray];

class GameContainer extends React.Component {
    state = {
        score: 0,
        topScore: 0,
        clicked: false
    }
  

     addScore = (event) => {
        let currentTopScore = this.state.topScore;
        let newScore = this.state.score;
        newScore++;

        if (newScore >= currentTopScore) {
            currentTopScore = newScore;
        }
        //check if you you've already clicked on it.
        if (this.state.clicked === true) {
            console.log("You've already clicked on it!!!");
        }

        console.log(event.target);
 
        this.setState({
            score:  newScore,
            topScore: currentTopScore,
            clicked: true
        })
    }

     shuffle = (array) => {
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        const domArray = array.map((item) => {
            let url =process.env.PUBLIC_URL + item.image;
        
            return  <Grid image={url} wasClicked={this.addScore} key={item.id} dataClick={this.state.clicked} dataId={item.id}/>
        });    
        return domArray;
    }

    reset = () => {
        // reset the array
        newImageArray  = [...ImageArray];

        this.setState({
            score: 0
        })
    }

    render(){
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Main>
                    <LeftSide/>
                    <div className = "grid-container"> 
                        <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/> 
                        {this.shuffle(newImageArray)}
                    </div>
                </Main>
            </div>
        )
    }
}

export default GameContainer;

