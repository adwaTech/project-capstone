import { Container,InputLabel,Input, FormControl, Typography, Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import Header from '../header/Header';
import useStyle from './styles'

export default function Login() {
    const classes=useStyle();
    const [values,setValues]=useState({
        userName:'',
        password:''
    })
    const [errors,seterror]=useState({});
    const handleChange=e=>{
        const {name,value}=e.target
        
        setValues({...values,[name]:value})
    
    }
    const handleClick=(e)=>{
       
        let error=[]
        if(!values.userName.trim())
        {
            error.userName="username is empty";
        }
        if(!values.password.trim())
        {
            error.password="password is empty";
        }

        seterror(error)
    }
    return (
        <div>
            <Header/>
            <Container className={classes.loginpage}>
                <div className={classes.loginbox}>
                    <Typography className={classes.loginTitle}>Log In</Typography>
                    
                    <FormControl>
                        <InputLabel className={classes.formfill} htmlFor='use'>Username</InputLabel>
                        <Input className={classes.formfill} onChange={handleChange} name='userName' id='use' type='text'></Input>
                        {errors.userName && <Typography className={classes.errors}>{errors.userName}</Typography>}
                    </FormControl>
                    <FormControl>
                        <InputLabel className={classes.formfill} htmlFor='pas'>Password</InputLabel>
                        <Input className={classes.formfill} onChange={handleChange}name="password" id='pas' type='password'></Input>
                        {errors.password && <Typography className={classes.errors}>{errors.password}</Typography>}
                    </FormControl>
                    <Button onClick={handleClick} type="submit" color="primary" variant="contained"className={classes.submitbtn}>LOG IN</Button>
                    <Typography className={classes.forget} color='secondary'>Forget Password?</Typography>
                </div>
            </Container>
        </div>
    )
}
