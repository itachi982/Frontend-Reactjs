import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// let state={
//   count:0
// }

function App() {
  const [count, setCount] = useState(0); //defining the initial state.

  function myfunc(){
    setCount(count+1);
  }
 

  return (

    //component

    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count*100} setCount={setCount}></CustomButton>
      <CustomButton count={count+3} setCount={setCount}></CustomButton>
    </div>

  )
}

function CustomButton(props){

    function onClickhandler(){
      props.setCount(props.count+1)
    }

    return <button onClick={onClickhandler}>Counter {props.count} </button>

}


export default App
