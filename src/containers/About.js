import React, {Component, text} from 'react'

class About extends Component {
    render() {
        return (
            <div>
                <h2>About the Game</h2>
                <text>This is the classic Tic Tac Toe game that you can play against the computer.
                    <p>The instructions are simple: 
                    You start the game by clicking into the square you wish to place your mark and then wait for the computer to take its turn. <br/>Get three marks in a row vertically, horizontally, or diagonally and you win!</p>
                </text>
            </div>
        )
    }
}

export default About 