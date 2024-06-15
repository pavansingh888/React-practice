import TicketNum from "./TicketNum"
import "./Ticket.css"

export default function Ticket({ticket}){
    return (
        <div className="Ticket">
         <p>Ticket</p>   
         {ticket.map((num,idx)=>( //We get error: child in a array should have a unique key prop
            <TicketNum num={num} key={idx}/>
         ))}    
        </div>
    )
}