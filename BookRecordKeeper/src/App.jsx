import React, {useState} from 'react'

const App = () => {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPage, setCurrentPage] = useState('login');


  return (
    <div className='App'>
      <header>
        <h1>Book Tracker</h1>
      </header>

      
    </div>
  )
}

export default App;
