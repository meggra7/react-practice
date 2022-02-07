import React from 'react';

const listOne = [
  { name: 'Tyler' },
  { name: 'Karen' },
  { name: 'Richard' },
];

const listTwo = [
  { name: 'Amanda' },
  { name: 'Mckenzi' },
  { name: 'Ryan' },
];

function ContactList(props) {
  const people = props.contacts;

  return <ol>
    {people.map((person) => (
      <li key={person.name}>{person.name}</li>
    ))}
  </ol>
}

function App() {
  return (
    <div className="App">
      <ContactList contacts={listOne}/>
      <ContactList contacts={listTwo}/>
    </div>
  );
}

export default App;
