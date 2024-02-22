import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/CreateTodo';
import { Todo } from './Components/Todo';



// let state={
//   count:0
// }

function App() {

  const [todos,setTodos]=useState([]);
  
    return(

      <div>
        <CreateTodo/>
        <Todo todos={todos}></Todo>
      </div>
      

    );
}


export default App
