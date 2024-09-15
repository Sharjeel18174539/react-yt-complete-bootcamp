import AddTodo from "./components/AddTodo"
import Appname from "./components/Appname"
import AddTodolist from "./components/todolist"
import AddTodolist2 from "./components/todolist2"
function App() { 
  return <center class = 'todo-container' >
  <Appname></Appname>
  <AddTodo></AddTodo>
  <div className="item-container">
    <AddTodolist></AddTodolist>
    <AddTodolist2></AddTodolist2>
  </div>
  
  </center>
}

export default App
