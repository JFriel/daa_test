import hiclogo from './hic_logo.png';
import './App.css';
import stepsFile from './steps.json';
import {useEffect, useState} from "react";
import Step from "./components/Step";
import EndStep from "./components/EndStep";
import {Typography} from "@mui/material";
import Home from "./components/Home";
function App() {

  const loadData = () => JSON.parse(JSON.stringify(stepsFile));
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([])
  const [showHome, setShowHome] = useState(true)
  useEffect(() => {
    setSteps(loadData()['steps']);
  }, []);

  if(steps.length == 0){
    return "Loading..."
  }


  const nextStep = ()=> setCurrentStep(currentStep+1);
  const previousStep = ()=> {
    currentStep >0 && setCurrentStep(currentStep-1);
  }

  // if(currentStep >= steps.length){
  //   return <div className="App">
  //     <EndStep previousStep={previousStep}/>
  //   </div>
  // }

  const getContent = () =>{
    if(showHome) return <Home nextStep={()=>{setShowHome(false)}}/>
    if(currentStep >= steps.length) return  <EndStep previousStep={previousStep}/>
    return <Step currentStep={steps[currentStep]} nextStep={nextStep} previousStep={previousStep} stepIndex={currentStep} totalSteps={steps.length}/>
  }

  return (
    <div className="App">
      <div style={{height:'60px', width:'100%',top:0,left:0, backgroundColor:'#1976d2', display:"flex", flexDirection:'row'}}>
        <img src={hiclogo} alt={"Health Informatics Centre"} style={{height:'40px', width:'100px', marginTop:'auto',marginBottom:'auto', marginLeft:'20px', cursor:'pointer'}} onClick={()=> window.open("https://www.dundee.ac.uk/hic", "_blank")}/>
        <Typography variant={'h4'} style={{color:'white', marginLeft:'20px',marginTop:'auto',marginBottom:'auto'}}>HIC Governance</Typography>
      </div>
      {getContent()}
    </div>
  );
}

export default App;
