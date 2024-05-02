
import Friends from '../Friend';
import './App.css'
import Counter from './count';
import Team from './team';
import Users from './user';
import Friends from '../Friend';

function App() {
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2= ()=>{
    alert('buttn');
  }

  const addToFive =(num) => {
    alert(num+5);
  }

  return (
    <>
      <h1> React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
    <Counter></Counter>

      <button onClick={handleClick}> Click Me</button>
      <button onClick={handleClick2}> Click Me 2</button>
      <button onClick={()=>{alert('third clicked')}}>Thrid</button>
      <button onClick={()=> addToFive(3)}> Four</button>
    </>
  )
}

export default App
