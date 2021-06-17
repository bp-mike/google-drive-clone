import { useState } from 'react';
import './App.css';
import Header from './components/header/index'
import Sidebar from './components/sidebar/index'
import FilesView from './components/filesView/FilesView';
import SideIcons from './components/sideIcons/index'
import GDriveLogo from './img/Google_Drive_icon.svg.png'
import { auth, provider} from './firebase'

function App() {

  const [user, setUser] = useState()

  const handleLogin = () =>{
    if(!user){
      auth.signInWithPopup(provider).then((result) =>{
        setUser(result.user)
      })
    }
  }
  return (
    <div className="app">
      {
        user ? (
          <>
            <Header userPhoto={user.photoURL}/>
            <div className='app__main'>
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div> 
          </>
        ):(
          <div className='app__login'>
            <img src={GDriveLogo} width='100' alt='google Drive' />
            <button onClick={handleLogin}>Log into Google Drive</button>
          </div>
        )
      }
           
    </div>
  );
}

export default App;
