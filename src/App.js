import logo from './logo.svg';
import './App.css';
import stepsFile from './steps.json';
import {useEffect, useState} from "react";
import Step from "./components/Step";
import EndStep from "./components/EndStep";
function App() {

  const loadData = () => JSON.parse(JSON.stringify(stepsFile));
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([])
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

  if(currentStep >= steps.length){
    return <div className="App">
      <EndStep previousStep={previousStep}/>
    </div>
  }


console.log(steps.length,currentStep,steps[currentStep]);
  return (
    <div className="App">
      <Step currentStep={steps[currentStep]} nextStep={nextStep} previousStep={previousStep} stepIndex={currentStep} totalSteps={steps.length}/>
    </div>
  );
}

export default App;
