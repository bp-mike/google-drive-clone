import { useState } from 'react';
import './App.css';
import Header from './components/header/index'
import Sidebar from './components/sidebar/index'


function App() {

  // const [user, setUser] = useState({
  //   displayName: 'bp',
  //   email:'bp@mail.com',
  //   emailVerified: true,
  //   phoneNumber:null,
  //   photoURL:'https://the6.googleusercontent.com/'
  // })
  return (
    <div className="App">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
