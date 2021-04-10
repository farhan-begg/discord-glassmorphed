import React, {useEffect} from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import {selectUser} from './features/userSlice'
import {useDispatch, useSelector} from 'react-redux'
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)

  useEffect(() => {
    // everytime user logs in get the user
    auth.onAuthStateChanged((authUser) => {
      console.log("user is", authUser)
      // if user is logged in
      if (authUser){
        // dispatch allows to insert in redux(data layer)
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }

    });

  }, [dispatch])


  return (
    <div className="app">
      {user ? (
        <>
            <Sidebar/>
            <Chat />
        </>

      ): (
        <Login />

      
      )}
    
    </div>
  );
}

export default App;
