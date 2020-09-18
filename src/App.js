import React, { useState, createContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from './components/navbar/Navbar';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Destination from './components/Destination/Destination';
import Hotels from './components/hotels/Hotels';
import Login from './components/login/Login';
import PrivateRoute from './components/login/PrivateRoute';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({
    signed: false,
    name: '',
    email: '',
    password: '',
    message: ''
  });

  return (
    <main>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <TopNav />
          <Switch>
            <Route exact path="/">
              <Home> </Home>
            </Route>  
            <Route path="/login">
              <Login> </Login>
            </Route>  
            <Route path="/destination/:placeName">
              <Destination> </Destination>
            </Route>
            <PrivateRoute path="/hotels/:placeName">
              <Hotels> </Hotels>
            </PrivateRoute>
          </Switch>
        </Router>
        
      </UserContext.Provider>
      
    </main>
    
  );
  
}

export default App