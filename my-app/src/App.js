import {useState} from 'react'


const orders =[100,200,300]
function App() {
  

const [counter,setCounter] = useState(()=>{
  const total = orders.reduce((total,cur) =>total+cur)

  return total
})
//const [counter,setCounter] = useState(1)

const handleIncrease =() =>{
  //truyền thẳng :
  setCounter(counter+1)

  // setCounter(preState =>preState+1) (sử dụng callback)
  // setCounter(preState =>preState+1)
  // setCounter(preState =>preState+1)
  // setCounter(preState =>preState+1)
}

  return (
    <div className="App" style={{padding: 20 }}>
      <h1>{counter}</h1>
      <button onClick={handleIncrease}> Increase</button>
    </div>
  );
}

export default App;
