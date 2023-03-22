import React, { useState } from 'react'
import supabase from '../supabaseClient';

const Li = ({data}) => {
    const [liststyle,setliststyle]=useState("");

  const check=async()=>{
    setliststyle(liststyle=='styledlist'?'':'styledlist')


    const { error } = await supabase
  .from('Todo Data')
  .update({ completed: !liststyle==='styledlist' })
  .eq('todo',data)

  }
  return (
    <li onClick={check} className={liststyle}>
      {data}
    </li>
  )
}

export default Li
