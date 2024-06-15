import { useState } from "react"
import { genTicket,sum } from "./helper"
import Ticket from "./Ticket"

export default function LotteryGame({n=3,winningSum=15}) {
    let [ticket,setTicket] = useState(genTicket(n))
    let isWinning = sum(ticket) === winningSum;
    function buyTicket(){
        setTicket(genTicket(n))
    }
    return (
    <>
    <h1>Lottery Game!</h1>
    <Ticket ticket={ticket}/>
    <button onClick={buyTicket}>Buy New ticket</button>
    <h3>{isWinning && "Congratulations, You won!"}</h3>
    </>
    )
}