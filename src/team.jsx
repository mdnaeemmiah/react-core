import { useState } from "react"

export default function Team(){
    const[team,setTeam]=useState(11);

    const handleAdd = () =>{
        const newTeam =team +1;
        setTeam(newTeam);
    }
    const handleRemove = ()=>{
      setTeam(team-1)
    }


const  TeamStyle = {
    border: '3px solid purple',
    margin:'15px',
    padding: '30px',
    borderRadius: '16px '
}

    return(
        <div style={TeamStyle}>
            <h3>players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={}>Remove</button>
        </div>
    )
}