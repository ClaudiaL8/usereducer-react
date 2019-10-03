import React, { useReducer } from 'react';
import './App.css';

const ADD_USER = 'ADD_USER'
const appReducer = (state, action) => {
  switch (action.type) {
    case ADD_USER: {
      return{
        users: [...state.users, action.payload]
      };
    }
  }
};

function App() {

  const initialState = {
    users: [
      { name: 'alan', age: 30 },
      { name: 'messi', age: 31 },
    ]
  };

  const [state, dispatch] = useReducer(
    appReducer,
    initialState
  );

  const addUsers = () => {
    const name = document.getElementById('form-name-input').value;
    const age = document.getElementById('form-age-input').value;
    const newUser = { name, age };
    dispatch({
      type: ADD_USER,
      payload: newUser
    })
  }
  
  return (
    <div className="App">
      {state.users.map(user => (<div>{`${user.name} ${user.age}`}</div>))}
      <div className="form">
        <div className="form-name">
          <label>name:</label>
          <input id="form-name-input" />
        </div>
        <div className="form-age">
          <label>age:</label>
          <input id="form-age-input" />
        </div>
        <button onClick={() => addUsers()}>Add usser</button>
      </div>
    </div>
  );
}

export default App;
