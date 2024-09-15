import './App.css'
import AddTodo from './components/AddTodo'
import Appname from './components/Appname'
import TodoItem from './components/TodoItem'
import AddTodolist from './components/todolist'
import AddTodolist2 from './components/todolist2'
function App() {
  return (
    <>
      <center className='todo-container'>
        <Appname></Appname>
        <AddTodo></AddTodo>
        <div className='item-container'>
          <TodoItem TodoName="Milk" TodoDate="07-09-2024"></TodoItem>
          <TodoItem TodoName="Go To College" TodoDate="07-09-2024"></TodoItem>
          <TodoItem TodoName="Homework" TodoDate="07-09-2024"></TodoItem>
        </div>
      </center>
    </>
  )
}

export default App
