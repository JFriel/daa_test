import {Button} from "@mui/material";

function Home(props){

    return <div style={{display:'flex',flexDirection:'column'}}>
        Home
    <Button onClick={props.nextStep}>Begin</Button>
    </div>
}

export default Home;