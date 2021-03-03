import React, {useEffect, useState} from 'react';
import { Hint } from 'react-autocomplete-hint';
import {toast} from 'react-toastify'

import api from '../../Services/api'

import {Formulario} from './styles'

function Autocomplete() {
  const [hintData, setHintData] = useState([])
  const [text, setText] = useState('')

  const getData = async () => {
      try {
        const res = await api.get(`/user/users?page=${1}`)
        var hintArray = []
        res.data.map(a => hintArray.push(a.name))
        setHintData(hintArray)
      } catch (error) {
            let erro = JSON.parse(error.request.response)
            console.log(error)
            toast.error(erro.error)
      }
  }

  useEffect(()=> {
    getData()
  })

  return (
    <div className="App">
      <h5>Try typing these words</h5>
      <code>{`[${hintData.toString()}]`}</code>
      <br/>
      <br/>
      <br/>

        <Formulario >
            <Hint options={hintData} allowTabFill>
                <input value={text} className='input-with-hint' placeholder="Informe o nome do paciente" onChange={e => setText(e.target.value)}/>
            </Hint>
            <button type="button">Atualizar lista</button>
        </Formulario>
    </div>
  );
}

export default Autocomplete;