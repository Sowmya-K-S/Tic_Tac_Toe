import "./grid.css";
import IsWinner from "../../helpers/checkWinner";
import { useState} from "react";
import Card from "../card/Card";

function Grid({noOfCards}) {
    const [board, setBoard] = useState(Array(noOfCards).fill(""))
    const [turn, setTurn] = useState(true)
    const[winner,setWinner] = useState(null)
    function play(index)
    {
      if(turn == true)
      {
        board[index] = 'O'
      }
      else
      {
        board[index] = 'X'
      }

      let win = IsWinner(board, turn ? 'O':'X')
      if(win)
      {
        setWinner(win)
      }
      setBoard([...board])
      setTurn(!turn)
    }
    function reset()
    {
      setBoard(Array(noOfCards).fill(""))
      setTurn(true)
      setWinner(null)
    }

  return (
    <div className="grid-wrapper"> 
    //it is a javascript expression
    {
      winner && (
        <>
        <h1 className="turn_display">Winner is {winner}</h1>
        <button onClick={()=>reset()}>Reset</button>
        </>
        
      )
    }
      <h1 className="turn_display">Current Turn : {(turn)?'O':'X'} </h1>
      <div className="grid">
        {board.map((ele,indx)=><Card key={indx} onPlay={play} gameEnd = {winner ? true : false} index={indx} player={ele} />)}
    </div>
    </div>
    
  )
}
export default Grid;