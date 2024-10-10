import {Typography} from "@mui/material";


function RequirementsScreen(props){
    var requirements = props.requirements;
    return <div style={{ background:'#ff7961', borderRadius:8,height:100,justifyContent:'center', alignItems:'center', width:'80%', display:'flex',flexDirection:'column'}}>
        <Typography style={{color:'white', margin:8}} variant={"h5"}>Required Authorisations:</Typography>

        <Typography style={{color:'white', margin:8}}>{requirements}</Typography>
    </div>
}

export default RequirementsScreen;