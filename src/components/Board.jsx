import React from 'react';
import { useState, useRef } from 'react';
import animation from 'js-confetti'

function Board() {

    const[result,setResult] = useState('')
    const[player, setPlayer] = useState('O')
    const[game, setGame] = useState(true)
    const[click, setClick] = useState(0)

    const  anime = new animation()

    const cell = useRef([]);
    const Ind = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const disableClick = (index) => {
        cell.current[index].style.pointerEvents='none'
    }

    const checkWinner = () => {
        const values = []
        for(let i=1; i<=9; i++){
            values[i] = cell.current[i].innerHTML
        }
        if(player==values[1]&&player==values[2]&&player==values[3]){
            setResult(player)
            cell.current[1].className='winner'
            cell.current[2].className='winner'
            cell.current[3].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[4]&&player==values[5]&&player==values[6]){
            setResult(player)
            cell.current[4].className='winner'
            cell.current[5].className='winner'
            cell.current[6].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[7]&&player==values[8]&&player==values[9]){
            setResult(player)
            cell.current[7].className='winner'
            cell.current[8].className='winner'
            cell.current[9].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[1]&&player==values[4]&&player==values[7]){
            setResult(player)
            cell.current[1].className='winner'
            cell.current[4].className='winner'
            cell.current[7].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[2]&&player==values[5]&&player==values[8]){
            setResult(player)
            cell.current[2].className='winner'
            cell.current[5].className='winner'
            cell.current[8].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[3]&&player==values[6]&&player==values[9]){
            setResult(player)
            cell.current[3].className='winner'
            cell.current[6].className='winner'
            cell.current[9].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[1]&&player==values[5]&&player==values[9]){
            setResult(player)
            cell.current[1].className='winner'
            cell.current[5].className='winner'
            cell.current[9].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(player==values[3]&&player==values[5]&&player==values[7]){
            setResult(player)
            cell.current[3].className='winner'
            cell.current[5].className='winner'
            cell.current[7].className='winner'
            setTimeout(() => {
                anime.addConfetti(
                    {
                        // emojis: ['🎊', '🎉'],
                        emojiSize: 50,
                        confettiNumber: 200,
                        confettiRadius: 6,
                    }
                )
            },500)
            setGame(false)
        }
        else if(click>=8){
            setResult('Game Drawn')
        }
    }

    const clickHandler = (index) => {
        if(game) {   
            cell.current[index].innerHTML = player
            setClick(click+1)
            disableClick(index)
            checkWinner()
            if(player=='O'){
                setPlayer('X')
            }
            else{
                setPlayer('O')
            }
        }
    }


	return (
		<>
			<div id='container'>
				<div id='board'>
                {
                Ind.map((ind) => (
                        <div
                            key={ind}
                            className="cell"
                            id={`cell${ind}`}
                            ref={(c) => (cell.current[ind] = c)}
                            onClick={() => clickHandler(ind)}
                        ></div>
                    ))
                }
                </div>

                <p id='result'>Winner Is : {result} </p>

                <button id='btn' onClick={()=>{window.location="/"}}>Restart</button>

			</div>
		</>
	);
}

export default Board;
