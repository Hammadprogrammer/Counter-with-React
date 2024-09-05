import {useState} from "react";
function  App() {
const [num, setnum] = useState(0)

const add=()=>{
  setnum(num+1)
}
const less=()=>{
setnum(num-1)
}
const reseat = ()=>{
  setnum(0)
} 
  return(
    <>
    <h1 className="h1">Counter App With React</h1>
    <h1>{num}</h1>
    <button onClick={add} className="btn">Add</button>
    <button onClick={less} className="btn">Less</button>
    <button onClick={reseat} className="btn">Resert</button>
    </>
  )
}
export default(App)