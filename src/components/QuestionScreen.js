import {Typography} from "@mui/material";


function QuestionScreen(props){
    var question = props.question;
    return <div style={{display:'flex', background:'#1976d2', borderRadius:8,height:100,justifyContent:'center', alignItems:'center', width:'80%'}}>
        <Typography style={{color:'white', margin:8}}>{question}</Typography>
    </div>
}

export default QuestionScreen;