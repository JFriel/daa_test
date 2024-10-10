import QuestionScreen from "./QuestionScreen";
import {Button, Typography} from "@mui/material";
import RequirementsScreen from "./RequirementsScreen";
import React from "react";


function EndStep(props){
    return <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{display: 'flex', flexDirection: 'row'}}><Button variant={"contained"} onClick={props.previousStep} style={{margin:8}}><Typography>Back</Typography></Button></div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}><QuestionScreen question={"Data Made Available"} hideTitle={true}/></div>

    </div>
}


export default EndStep;