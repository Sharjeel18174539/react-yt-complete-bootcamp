function Random(){
    let myNumber=Math.random()*100;

    return <h1>random number is : {Math.round(myNumber)}</h1>

}
export default Random;