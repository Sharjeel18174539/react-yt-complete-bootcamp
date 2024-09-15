import './App.css'
import ErrorMessage from './components/ErrorMessage'
import FoodItems from './components/FoodItems'

function App() {
  let foodItem=["mutton", "Butter Chicken", "Paneer", "Aloo Parathe", "Rice", "Ghee"]

  //let foodItem=[]
  //1st method
  // if(foodItem.length===0){
  //   return <h1>I am still hungary but there is no food</h1>
  // }


  // we want healthy food heading every time  so we go through another method
  //2nd method
  //let emptyMessage=foodItem.length===0 ? <h3>I am still hungary but there is no food</h3>: null;
  return <>
    <h1>Healthy Food</h1>     
    <ErrorMessage items={foodItem}></ErrorMessage>
    <FoodItems items={foodItem}></FoodItems>    
                  
  
  </>
    
}

export default App
