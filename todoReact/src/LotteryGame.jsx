import { useState } from "react"
import { genTicket,sum } from "./helper"
import Ticket from "./Ticket"
import Button from "./Buttton"

export default function LotteryGame({n=3,winCondition}) {
    let [ticket,setTicket] = useState(genTicket(n))
    let isWinning = winCondition(ticket)
    function buyTicket(){
        setTicket(genTicket(n))
    }
    return (
    <>
    <h1>Lottery Game!</h1> 
    <Ticket ticket={ticket}/>
    <Button action={buyTicket}/>
    <h3>{isWinning && "Congratulations, You won!"}</h3>
    </>
    )
}