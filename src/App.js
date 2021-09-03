import logo from './logo.svg';
import './App.css';
import RestrictedPage from './components/RestrictedPage';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  function Logout(){
    setIsLoggedIn(false)
  }
  function Login(){
    setIsLoggedIn(true)
  }

  return (
    <div className="App">
      <div className="App-header">
        <RestrictedPage isLoggedIn={isLoggedIn} user={'Maria'} Login={Login} Logout={Logout}>
        </RestrictedPage>
      </div>
    </div>
  );
}

export default App;
