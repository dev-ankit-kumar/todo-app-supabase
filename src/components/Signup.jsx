import React from 'react'
import { useState } from 'react'
import supabase from '../supabaseClient'
import Student from '../components/Student.png'

const Signup = ({setsignup}) => {

    const handleClick= async()=>{
        try{
            
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: pass,
             })

             if(error){
                throw new Error (error.message)
             }
             
        }
        catch(err){
            seterror("check your mail box");
        }
    }
    const togglePassword=()=>{
        if(passwordType==="password"){
            setPasswordType("text")
        }
        else{
            setPasswordType("password")
        
        } 
   }

    const[error,seterror]=useState("");
    const[email,setemail]=useState("");
    const[pass,setpass]=useState("");
    const [passwordType, setPasswordType] = useState("password");

  return (
    
    <div className='main-login'>
        
        <div className="boy">
            <img  src={Student} alt="" />
        </div>


      <div className="box">
        <h1>Signup</h1>
        <div className="email">
            <label htmlFor="mail">Email:</label>
            <input onChange={(e)=>{
                setemail(e.target.value)
            }} className='mail' type="email" value={email} placeholder='Enter Email' />
            
        </div>
        <div className="passwrd">
            <label htmlFor="password">password:</label>
            <input onChange={(e)=>{
                setpass(e.target.value)
            }} className='password' type={passwordType} value={pass}  placeholder='Enter password' /><button onClick={togglePassword}>i</button>
        </div>
        <button onClick={handleClick} className="submit">
            Submit
        </button>
        <div className="create">
            <p  onClick={()=>{
                setsignup(false)
            }}  className='account'>Login</p>
        </div>
        <p>{error}</p>

      </div>
    </div>
  )
}

export default Signup
