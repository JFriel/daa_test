import React, {useEffect, useState} from 'react';
import {Button, Typography, Grid} from "@mui/material";
import QuestionScreen from "./QuestionScreen";
import RequirementsScreen from "./RequirementsScreen";
function Step(props){
    const step = props.currentStep;
    const question = step['question'];
    const requirements = step.requirements;
    const nextStepText = step.next;
    const extraStepText = step.extra;
 const stepIndex = props.stepIndex;
 const totalSteps = props.totalSteps;

    const onYes = ()=>{
        props.nextStep();
    }

    const onNo = ()=>{
        if(showQuestion){
            setShowQuestion(false);
        }else{
            var element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(requirements));
            element.setAttribute('download', "requirements.txt");

            element.style.display = 'none';
            document.body.appendChild(element);

            element.click();

            document.body.removeChild(element);
        }
    }

    const [showQuestion, setShowQuestion] = useState(true);

    useEffect(() => {
        setShowQuestion(true);
    }, [step]);

    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <Button variant={"contained"} onClick={props.previousStep} style={{margin: 8, textTransform: 'none'}}
                    disabled={stepIndex === 0}><Typography>Back</Typography></Button>
            <Typography style={{
                display: 'flex',
                color: 'lightGrey',
                border: '1px solid lightGrey',
                borderRadius: 8,
                paddingLeft: 4,
                paddingRight: 4,
                height: '50%',
                marginTop: 'auto',
                marginBottom: 'auto'
            }}>Step {stepIndex + 1}/{totalSteps}</Typography>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <QuestionScreen question={question} /></div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop:'20px'}}>{showQuestion ?
            null : <RequirementsScreen requirements={requirements}/>}</div>

        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            {(nextStepText == null && showQuestion)? null : <Button variant={"contained"} onClick={onYes} style={{
                margin: 8,
                textTransform: 'none',
                backgroundColor:  showQuestion && nextStepText ==="Yes"?"rgb(1 209 124)": showQuestion &&nextStepText === "No"?"rgb(255 98 100)":null
            }}><Typography>{showQuestion ? nextStepText : "Next Step"}</Typography></Button>}
            <Button variant={"contained"} onClick={onNo} style={{
                margin: 8,
                textTransform: 'none',
                backgroundColor: showQuestion && extraStepText ==="Yes"?"rgb(1 209 124)": showQuestion &&extraStepText === "No"?"rgb(255 98 100)":null
            }}><Typography>{showQuestion ? extraStepText : "Download Requirements"}</Typography></Button></div>

    </div>
}


export default Step;