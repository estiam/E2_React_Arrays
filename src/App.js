import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserBlock from './Components/UserBlock';

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const demoPeople = [
  {
    color: '#c0b112',
    firstName: 'Bruce',
    lastName: 'Banner'
  },
  {
    color: '#d42abe',
    firstName: 'Peter',
    lastName: 'Parker'
  },
  {
    color: '#47f394',
    firstName: 'Natasha',
    lastName: 'Roumanoff'
  },
  {
    color: '#db66ea',
    firstName: 'Carol',
    lastName: 'Danvers'
  },
  {
    color: '#14d990',
    firstName: 'Gwen',
    lastName: 'Stacey'
  }
];

const alphabet = [];

const App = () => {
  
  const [inputValue, setInputValue] = ('');
  const [people, setPeople] = useState(demoPeople);

  const handleAdd = () => {useState
    if(inputValue.split(' ')[1] == null){
      alert("Nom incorrect");
      return;
    }
    const newPerson = {
      color: getRandomColor(),
      firstName: inputValue.split(' ')[0],
      lastName: inputValue.split(' ')[1],
    }
    setPeople([...people, newPerson]);
    setInputValue('');
  }

  if(alphabet.length <= 0)
    for (let i = 65; i < 91; i++) {
      alphabet.push(String.fromCharCode(i));
    }

  return (
    <div>
      <div>
        <input
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
          type='text'
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div>
        {people.map((person, index) => (
          <UserBlock
            key={`person_${index}`}
            color={person.color}
            firstName={person.firstName}
            lastName={person.lastName}
          />
        ))}
        {alphabet.map((letter, index) => (
          <span key={`letter_${index}`}>{letter}</span>
        ))}
      </div>
    </div>
  );
}

export default App;
