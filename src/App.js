import { object } from 'prop-types';
import React, {useState} from 'react';
import './App.css';
import {yes, no} from './objects';

function App() {
  const [active, setActive] = useState(false)
  const [yesObj] = useState(yes)
  const [noObj] = useState(no)

  const statementMapper = {
    true: yesObj["yes-statement"],
    false: noObj["no-statement"]
  }

  const imageMapper = {
    true: yesObj["yes-image"],
    false: noObj["no-image"]
  }

  
  return <>
    <h1>{statementMapper[active.toString()]}</h1>
    <img onClick={() => setActive(!active)} src={imageMapper[active.toString()]} />
  </>;
}

export default App;