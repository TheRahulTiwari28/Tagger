import './App.css';
import {Routes, Route} from 'react-router-dom';
import SignIn from './components/logins/SignIn';
import SignUp from './components/logins/SignUp';
import Forgot from './components/logins/Forgot';
import { useState, useEffect } from 'react';
import Home from './components/routes/Home';
import User from './components/routes/User';
import DynamicForm from './components/routes/DynamicForm';
import UserMessage from './components/UserMesseges/UserMessage';

function App() {
  const [user, setLoginUser] = useState({})
  const userone = localStorage.getItem('userId');
  console.log(userone);

  useEffect(() => {
    setLoginUser(JSON.parse(localStorage.getItem("MyUser")))
  }, [])

  const updateUser = (user) => {
    localStorage.setItem("MyUser", JSON.stringify(user))
    setLoginUser(user)
  }
  return (
    <>
    <Routes>
      <Route path='/user' element={<User/>}></Route>
      <Route path='/user/:userId' element={<DynamicForm/>}></Route>
      <Route exact path='/' element={user && user._id ? <Home updateUser={updateUser}/> : <SignIn updateUser={updateUser}/>}></Route>
      <Route exact path='/messege' element={user && user._id ? <UserMessage updateUser={updateUser}/> : <SignIn updateUser={updateUser}/>}></Route>
      <Route exact path='/signin' element={<SignIn updateUser={updateUser}/>}></Route>
      <Route exact path='/signup' element={<SignUp/>}></Route>
      <Route exact path='/forgot' element={<Forgot/>}></Route>
    </Routes>
    </>
  );
}

export default App;
