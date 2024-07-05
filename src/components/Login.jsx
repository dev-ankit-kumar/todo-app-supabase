import React from 'react'
import { useState } from 'react'
import supabase from '../supabaseClient'
import Student from '../components/Student.png'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";


const Login = ({getUser,setsignup}) => {

    const handleClick= async()=>{
        try{
            
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: pass,
              })
               getUser(); 
             if(error){
                throw new Error (error.message)
             }
             else{
                setLMsg('Login successfully')

             }
        }
        catch(err){
            seterror(err.message);
        }
    }

    const sign=()=>{
        setsignup(true)
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
    
    <div className='main-login flex items-center w-96 h-screen  m-auto'>
        {/* <div className="boy">
            <img  src={Student} alt="" />
        </div> */}

      <div className="box w-full p-4 border-solid border-2 border-blue-700 rounded-lg ">
        <h1 className='text-center text-3xl'>Login</h1>
        <div className="email flex flex-col ">
            <label htmlFor="mail">Email:</label>
            <input onChange={(e)=>{
                setemail(e.target.value)
            }} className='mail w-full bg-blue-100 rounded-md p-1' type="email" value={email} placeholder='Enter Email' />
            
        </div>
        <div className="passwrd flex flex-col">
            <label htmlFor="password" >password:</label>
            <div className="inp flex justify-between">
            <input onChange={(e)=>{
                setpass(e.target.value)
            }} className='password w-full bg-blue-100 rounded-md p-1' type={passwordType} value={pass} placeholder='Enter password'  /> 
            <button onClick={togglePassword}>{passwordType=="text" ? <MdOutlineRemoveRedEye />:<FaEyeSlash />}
            </button>
            </div>
        </div>
        <button onClick={handleClick} className="submit bg-red-500 rounded-lg mt-1 p-2">
            Submit
        </button>
        <div className="create">
            <p onClick={sign} className='account text-right underline text-blue-600 cursor-pointer'>Create an account</p>
        </div>
        <p>{error}</p>

      </div>
    </div>
  )
}

export default Login
