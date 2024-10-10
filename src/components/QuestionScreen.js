import {Typography} from "@mui/material";


function QuestionScreen(props){
    var question = props.question;
    var showTitle = props.hideTitle?false:true;
    return <div style={{background:'#1976d2', borderRadius:8,height:100,justifyContent:'center', alignItems:'center', width:'80%', display:'flex',flexDirection:'column'}}>
        {showTitle && <Typography style={{color:'white', margin:8}} variant={"h5"}>Question:</Typography>}
        <Typography style={{color:'white', margin:8}}>{question}</Typography>
    </div>
}

export default QuestionScreen;