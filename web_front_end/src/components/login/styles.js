import { makeStyles } from "@material-ui/core";

export default makeStyles ((theme)=>({
    loginpage:{
        marginTop:'100px',
        marginBottom:'100px',
        textAlign:'center',
        color:'black',
        fontSize:'40px',
        zIndex:'900',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'center',
       

    },
    loginTitle:{
        fontSize:'40px',
        margin:'10px',
        fontFamily:'veranda',
        fontWeight:'bold',
    },
    loginbox:{
        maxWidth:'400px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItem:'center',
        alignSelf:'center',
        padding:'30px',
        borderRadius:'10px',
        boxShadow:'2px 2px 5px #3b1d07'
    },

    formfill:{
        fontSize:'25px',
        margin:'10px',
        marginTop:'5px',
        fontFamily:'veranda',
        textAlign:'center',
        
    },
    submitbtn:{
        padding:'10px',
        margin:'20px',
        marginTop:'20px',
    },
    forget:{
        margin:'5px',
        marginTop:'10px',
        maxWidth:'200px',
        '&:hover':{
            color:"blue",
            cursor:'pointer',
        },
        alignSelf:'right',
    },
    errors:{
        color:'red',
    }
}))