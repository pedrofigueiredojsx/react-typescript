import React from 'react'
import Input from './Input'

function App() {
  const [data, setData] = React.useState('')

  return (
    <>
      <div>
        <p>Inicio da Viagem: {data}</p>
        <Input id='email' label='email' type='email' />
        <Input id='nome' label='nome' />
        <Input
          value={data}
          onChange={(event) => setData(event.currentTarget.value)}
          id='inicio'
          label='Inicio da Viagem'
          type='date'
        />
        <Input id='horario' label='Horário' type='time' />
      </div>
    </>
  )
}

export default App
