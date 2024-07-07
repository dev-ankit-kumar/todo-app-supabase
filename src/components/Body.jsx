import React, { useEffect } from "react";
import { useState } from "react";
import supabase from "../supabaseClient";
import Li from "./Li";
const Body = ({ getUser, user }) => {
  const handleClick = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('Todo Data')
        .insert({ todo: todo, creatorId: user.id })
        .select();



      setdataList((prev) => {
        console.log([...prev, data[0].todo])
        return [...prev, data[0].todo];
      })
      if (error) {
        throw new Error(error.message);
      }
    }
    catch (err) {
      setError(err.message);
    }
    settodo("");
    setLoading(false)
  }
  const [error, setError] = useState("");
  const [dataList, setdataList] = useState([]);
  const [todo, settodo] = useState("");
  const [liststyle,setliststyle]=useState("");
  const [loading, setLoading] = useState(false);


  const check=()=>{
    setliststyle('styledlist')
  }


  const Logout_user = async () => {
    const { error } = await supabase.auth.signOut()
    getUser()

  }
 
  let todoKadata=[];
  const getData=async () => {
    const { data, error } = await supabase
      .from('Todo Data')
      .select().eq('creatorId', user.id)

    console.log(data);
    todoKadata=data.map((data,index)=>{
      return data.todo;
    })

    console.log(todoKadata);
    setdataList(todoKadata);
  }

  useEffect(()=>{
    getData();
  },[])

  

  return (
    <div>
      {loading &&
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
}
      <div className="profile">
        <p className="user" >{user.email}
        </p>
        <div className="logout">
          <h2 onClick={Logout_user}>Logout</h2>
        </div>
      </div>

      <div className="todo-box">
        <div className="inp">
          <input className="w-full border-solid border-2 border-black p-2 m-2"
            onChange={(e) => {
              settodo(e.target.value);
            }}
            type="text"
            value={todo}



          />
          <button onClick={handleClick} className="btn">Enter</button>
          {/* <span>{todo}</span> */}
        </div>
        <p>{error}</p>
       <div className="">
       {dataList.map((data, index) => {
          return <div className="bg-blue-200 mb-2 p-2"><Li  setdataList={setdataList} key={index} data={data}  >
            
          </Li></div>
        })}
       </div>
      </div>
    </div>
  );
};

export default Body;
