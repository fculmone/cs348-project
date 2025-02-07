import React from 'react';
import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [searchUsername, setSearchUsername] = useState('')

  function getAllData() {
    axios.get('http://127.0.0.1:8080/user')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }

  function getDataByUsername() {
    axios.get('http://127.0.0.1:8080/user/' + searchUsername)
      .then(response => {
        setData([response.data])
        if (response.data === '') {
          setData([])
        }
      })
      .catch(error => {
        console.error(error);
      })
  }

  function addUser() {
    let userToPost = {
      email: email,
      password_hash: password,
      username: username
    }

    axios.post('http://127.0.0.1:8080/user', userToPost)
    .then(response => {
      alert("User " + username + " created succesfully")
    })
    .catch(error => {
      console.error('Error creating user:', error.response ? error.response.data : error.message);
      alert("Error adding user")
    });
    
    setUsername('')
    setPassword('')
    setEmail('')
  }

  function clearText() {
    setData([])
  }

  function clearData() {
    if (window.confirm("Are you sure you want to delete the database?")) {
      axios.delete('http://127.0.0.1:8080/user')
      .then(response => {
        alert("Database cleared succesfully")
      })
      .catch(error => {
        console.error('Error deleting database:', error.response ? error.response.data : error.message);
        alert("Error deleting database")
      });
    }
    
  }

  return (
    <div className="App">
      <header className="App-header">
      <button 
        type="button" 
        className="text-gray-900 bg-white border border-gray-300 
        focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6"
        onClick={getAllData}
      >
          Preview Database
      </button>
      <button 
        type="button" 
        className="text-gray-900 bg-white border border-gray-300 
        focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6"
        onClick={clearText}
      >
          Clear Text
      </button>
      <button 
        type="button" 
        className="focus:outline-none text-white bg-red-700 
        hover:bg-red-800 focus:ring-4 focus:ring-red-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        onClick={clearData}
      >
        Clear Database
      </button>
      <label className='text-center text-[20px]'>
        Search by Username: 
        <input 
          className='text-black ml-3'
          value={searchUsername}
          onChange={e => setSearchUsername(e.target.value)}
        />
        <button  
        type="button" 
          className=" bg-white text-black ml-3  p-1 rounded-lg hover:bg-gray-200"    
          onClick={() => getDataByUsername()}
        >
          Search
        </button>
      </label>
      <div className="text-[16px] flex flex-col">
        <p className=" underline font-bold text-xl mt-4 mb-2">Add a User</p>
        <label className='mb-3'>
        Username:
          <input
            className='ml-2 text-black'
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </label>
        <label className='mb-3'>
        Email:
          <input
            className='ml-2 text-black'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </label>
        <label className='mb-3'>
        Password:
          <input
            className='ml-2 text-black'
            value={password}
            onChange={e => setPassword(e.target.value)}
            min="0"
          />
        </label>
        <div className='flex justify-center mt-2'>
          <button 
            type="button" 
            className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-1/2"
            onClick={addUser}
            disabled={username === '' || email === '' || password === ''}
          >
              Add
          </button>
        </div>
        
      </div>
      
        <div>
          {data.map((user, i) => (
            <p key={i}>
              {user.username}: Email={user.email}, Password={user.password_hash}
            </p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
