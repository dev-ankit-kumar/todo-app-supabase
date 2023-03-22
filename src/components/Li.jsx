import React, { useState } from 'react'
import supabase from '../supabaseClient';

const Li = ({data,setdataList,settodo}) => {
    const [liststyle,setliststyle]=useState("");

  const check=async()=>{
    setliststyle(liststyle=='styledlist'?'':'styledlist')
 
   

    const { error } = await supabase
  .from('Todo Data')
  .update({ completed: !liststyle==='styledlist' })
  .eq('todo',data)

  }
  const cleartodo= async()=>{
    setdataList(prev => prev.filter((item)=>item!==data))



    try {
      await supabase.from('Todo Data').delete().eq('todo', data);
      settodo(todo.filter((todo) => todo.id != todo_id));
    } catch (error) {
      console.log('error', error);
    }
  };
  

  return (
    <li  style={{'position':'relative'}} onClick={check} className={liststyle}>
      {data}
      <button onClick={cleartodo} style={{'position':'absolute','right':'0'}}>delete</button>
    </li>
    
  )
}

export default Li
