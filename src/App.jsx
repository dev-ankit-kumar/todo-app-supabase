import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import supabase from './supabaseClient'
import Body from './components/Body'
import Signup from './components/Signup'
import Login from './components/Login'
import Navbar from './components/Navbar'



function App() {

  const [count, setCount] = useState(0)
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(false);
  const [signup,setsignup]=useState(false)
  const getUser = async () => {
    setLoading(true)
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user);
    setLoading(false)
  }


  useEffect(() => {
    getUser();
  }, [])



  return (
    <div className="App">
      {/* <Navbar /> */}

      {user ? <Body  getUser={getUser} user={user}/> : !signup ?<Login getUser={getUser} setsignup={setsignup}/>:<Signup setsignup={setsignup}/>
      }
      
    </div>
  )
}

export default App
