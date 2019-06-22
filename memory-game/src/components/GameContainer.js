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
        clicked: []
    }
  

     addScore = (imgID) => {
        let currentTopScore = this.state.topScore;
        let newScore = this.state.score;
        let clickedImage = this.state.clicked;
        //increment score
        newScore++;
        //check if it's highest score
        if (newScore >= currentTopScore) {
            currentTopScore = newScore;
        }
        //check if you you've already clicked on it.
        if (clickedImage.includes(imgID)) {
            alert("You've already clicked on " + imgID);
        }else {
            clickedImage.push(imgID);
        }
 
        this.setState({
            score:  newScore,
            topScore: currentTopScore
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
        
            return  <Grid image={url} onClick={this.addScore} key={item.id} dataClick={this.state.clicked} dataId={item.id}/>
        });    
        return domArray;
    }

    reset = () => {
        // reset the array
        newImageArray  = [...ImageArray];

        this.setState({
            score: 0,
            clicked: []
        })
    }

    render(){
        return (
            <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Main>
                    <LeftSide/>
                    <div className = "grid-container"> 
                        {/* <Grid image={process.env.PUBLIC_URL + "/assets/ace.jpeg"} wasClicked={this.addScore}/>  */}
                        {this.shuffle(newImageArray)}
                    </div>
                </Main>
            </div>
        )
    }
}

export default GameContainer;

