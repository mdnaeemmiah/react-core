import { useEffect, useState } from 'react'
import './friend.css'
import Bondo from './bondo';


export default function Friends(){
    const [friend,setFriends] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users');
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return(
        <div className='box'>
            <h3>Friends: {Friends.length}</h3>
            {
                Friends.map(friend => <Bondo ></Bondo>)
            }
        </div>
    )
}