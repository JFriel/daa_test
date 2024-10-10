import {Typography} from "@mui/material";


function RequirementsScreen(props){
    var requirements = props.requirements;
    return <div style={{display:'flex', background:'#ff7961', borderRadius:8,height:100,justifyContent:'center', alignItems:'center', width:'80%'}}>
        <Typography style={{color:'white', margin:8}}>{requirements}</Typography>
    </div>
}

export default RequirementsScreen;