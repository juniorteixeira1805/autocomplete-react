import React, {useEffect, useState} from 'react';
import { Hint } from 'react-autocomplete-hint';

import api from '../../Services/api'

import {Formulario} from './styles'

function Autocomplete() {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  const getData = async () => {
      try {
        const res = await api.get("users")
        var hintArray = []
        res.data.map(a => hintArray.push(a.name))
        setHintData(hintArray)
      } catch (error) {
            console.log(error)
      }
  }

  useEffect(()=> {
    getData()
  })

  return (
    <div className="App">
      <h5>Digite alguma palavra listada</h5>
      <code>{`[${hintData.toString()}]`}</code>
      <br/>
      <br/>
      <br/>

        <Formulario >
            <Hint options={hintData} allowTabFill>
                <input value={text} className='input-with-hint' placeholder="Informe o nome do paciente" onChange={e => setText(e.target.value)}/>
            </Hint>
        </Formulario>
    </div>
  );
}

export default Autocomplete;