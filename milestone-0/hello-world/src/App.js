import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [id, setId] = useState(0)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')

  function getAllData() {
    axios.get('http://127.0.0.1:8080/people')
      .then(response => {
        setData(response.data)
      })
      .catch(error => {
        console.error(error);
      })
  }

  function getDataById() {
    axios.get('http://127.0.0.1:8080/people/' + id)
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

  function addPerson() {
    let personToPost = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }

    axios.post('http://127.0.0.1:8080/people', personToPost)
    .then(response => {
      alert("Person with id: " + response.data.id + " created succesfully")
    })
    .catch(error => {
      console.error('Error creating person:', error.response ? error.response.data : error.message);
      alert("Error adding person")
    });
    
    setFirstName('')
    setLastName('')
    setAge('')
  }

  function clearText() {
    setData([])
  }

  function clearData() {
    if (window.confirm("Are you sure you want to delete the database?")) {
      axios.delete('http://127.0.0.1:8080/people')
      .then(response => {
        alert("Database cleared succesfully")
      })
      .catch(error => {
        console.error('Error creating person:', error.response ? error.response.data : error.message);
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
        Search by id: 
        <input 
          className='text-black ml-3'
          value={id}
          onChange={e => setId(e.target.value)}
          type="number"
        />
        <button  
        type="button" 
          className=" bg-white text-black ml-3  p-1 rounded-lg hover:bg-gray-200"    
          onClick={() => getDataById()}
        >
          Search
        </button>
      </label>
      <div className="text-[16px] flex flex-col">
        <p className=" underline font-bold text-xl mt-4 mb-2">Add a Person</p>
        <label className='mb-3'>
        First name:
          <input
            className='ml-2 text-black'
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </label>
        <label className='mb-3'>
        Last name:
          <input
            className='ml-2 text-black'
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </label>
        <label className='mb-3'>
        Age:
          <input
            className='ml-[54px] text-black'
            value={age}
            type="number"
            onChange={e => setAge(Math.abs(e.target.value))}
            min="0"
          />
        </label>
        <div className='flex justify-center mt-2'>
          <button 
            type="button" 
            className="text-gray-900 bg-white border border-gray-300 
            focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 
            font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-1/2"
            onClick={addPerson}
            disabled={firstName === '' || lastName === '' || age === ''}
          >
              Add
          </button>
        </div>
        
      </div>
      
        <div>
          {data.map(person => (
            <p key={person.id}>
              {person.first_name} {person.last_name}: age={person.age}, id={person.id}
            </p>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
