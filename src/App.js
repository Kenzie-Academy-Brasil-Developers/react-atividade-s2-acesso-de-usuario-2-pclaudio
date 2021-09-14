import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { members as membersDB } from './db/membersDB';
import Home from './components/Home';
import Customer from './pages/Customer';
import Company from './pages/Company';
import { useState } from 'react';

function App() {
  const [ members, setMembers ] = useState(membersDB);

  const addMember = (name, type) => {
    const member = {
      id: (members.length + 1).toString(),
      name: name,
      type: type,
    };

    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <Home members={ members } addMember={ addMember } />
            </Route>

            <Route exact path='/customer/:id'>
              <Customer members={ members } />
            </Route>

            <Route exact path='/company/:id'>
              <Company members={ members } />
            </Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;