import './App.css';
import { useState } from 'react';
import Card from './components/Card';
import List from './components/List';
function App() {
  const [user, setUser] = useState([]);
  return (
    <div className="App">
      <div className='search-bar-container'>

        <Card

          setUser={setUser}
        />
        {user && <List
          user={user} />}
      </div>
    </div>
  );
}

export default App;
