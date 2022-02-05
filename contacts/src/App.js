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

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts;

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
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
