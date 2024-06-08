import { useState } from "react"

export function LudoBoard(){
    let [moves,setMoves]= useState({blue:0,red:0,yellow:0,green:0})
    let [arr,setArr]= useState(["no moves"])
    let updateBlue= ()=> {
        // moves.blue+=1
        // console.log(`moves.blue : ${moves.blue}`);
        // setMoves(moves) //won't work because object itself as such is not changed only the key value of object is changed so react won't detect any change.
        // setMoves({...moves})
        setMoves((prevMoves)=>{
            return {...prevMoves,blue:prevMoves.blue+1}
        })
        // console.log(`moves.blue : ${moves.blue}`); //show the last value, won't show the updated value
    }   
    let updateYellow= ()=> {
        // setMoves((prevMoves)=>{
        //     return {...prevMoves,yellow:prevMoves.yellow+1}
        // })

        setArr((preArr)=>{
           return [...arr," Yellow moves"]
        })


    }
    let updateRed= ()=> {
        setMoves((prevMoves)=>{
            return {...prevMoves,red:prevMoves.red+1}
        })
    }
    let updateGreen= ()=> {
        setMoves((prevMoves)=>{
            return {...prevMoves,green:prevMoves.green+1}
        })
    }

    return (
        <div id="div">
            <p>Games begins</p>
            <p>{arr}</p>
            <p>Blue move: {moves.blue}</p>
            <button style={{backgroundColor:'blue'}} onClick={updateBlue} >+1</button>
            <p>Red move: {moves.red}</p>
            <button style={{backgroundColor:'red'}} onClick={updateRed}>+1</button>
            <p>Yellow move: {moves.yellow}</p>
            <button style={{backgroundColor:'yellow', color:'black'}} onClick={updateYellow}>+1</button>
            <p>Green move: {moves.green}</p>
            <button style={{backgroundColor:'green'}} onClick={updateGreen}>+1</button>
        </div>
    )   
}