import { TextField,Stack,Button } from '@mui/material';
import './App.css';
import { useState } from 'react';

function App() {
  const [interest,setinterest] = useState(0)
  const [Principle,setPrinciple] = useState(0)
  const [rate,setrate] = useState(0)
  const [year,setyear] = useState(0)
  const [isPrincipleValid,setisPrincipleValid] = useState(true)
  const [israteValid,setisrateValid] = useState(true)
  const [isyearValid,setyearValid] = useState(true)  
  const validateInput=(e)=>{
    // {key} = object
    const {name,value}= e.target
    // logic to check validation
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
  
  if(name==="Principle")
    {
      setPrinciple(value)
      setisPrincipleValid(true)

    }else if(name==="rate")
    { 
      setrate(value)
      setisrateValid(true)

    }
    else if(name==="year")
    { 
      setyear(value)
      setyearValid(true)

    }
    }else{
      if(name==="Principle")
      {
        setPrinciple(value)
        setisPrincipleValid(false)

    }else{
      if(name==="rate")
      {
        setrate(value)
        setisrateValid(false)

    }else{
      if(name==="year")
      {
        setyear(value)
        setyearValid(false)}}
}}
    
  
}
// Submit button
const handleCalculate=(e)=>{
  e.preventDefault()
  if(!Principle || !rate || !year){
    alert("Please fill the form Completely!!!")
  }
  else{
    setinterest(Principle*rate*year/100)
  }
}
// reset button
const handleReset=()=>{
  setinterest(0)
  setPrinciple(0)
  setrate(0)
  setyear(0)
  setisPrincipleValid(true)
  setisrateValid(true)
  setyearValid(true)
}


  return (
   <div style={{height:'100vh'}} className='d-flex justify-content-center align-items-center w-100 bg-dark'>
   <div style={{width:'600px'}} className='bg-light p-5 rounded'>
     <h3>Simple Interest App</h3>
     <p>Calculate Your Simple Interest Easily</p>
     <div style={{height:'150px'}} className='interest-card w-100 bg-warning mt-5 d-flex justify-content-center align-items-center flex-column text-light rounded shadow '>
      <h1>₹ {' '} {interest}</h1>
      <p className='fw-bolder'>Total Simple Interest</p>
     </div>
     <form className='mt-5' onSubmit={handleCalculate} >
          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic1" label="₹ Principle amount" variant="outlined" value={Principle || ""} name='Principle' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isPrincipleValid &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid User Input

            </div>
          }

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic2" label="Rate of Interest (p-a) %" variant="outlined" value={rate || ""} name='rate' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !israteValid &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid User Input

            </div>
          }

          <div className="mb-3">
          <TextField className='w-100' id="outlined-basic3" label="Time Period ( Yr )" variant="outlined" value={year || ""} name='year' onChange={(e)=>validateInput(e)}/>
          </div>
          {
            !isyearValid &&
            <div className="mb-3 text-danger fw-bolder">
              *Invalid User Input

            </div>
          }

          <Stack direction="row" spacing={2}>
          <Button type='submit' style={{height:"70px",width:"250px"}} variant="contained" disabled={isPrincipleValid && israteValid && isyearValid?false:true}>CALCULATE</Button>
          <Button onClick={handleReset} style={{height:"70px",width:"250px"}}  variant="outlined">RESET</Button>

          </Stack>

     </form>
    </div>
  
    </div>
  );
  }

export default App;