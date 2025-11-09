import React from 'react'
import useFetch from './useFetch'

type Produto = {
  id: string
  nome: string
  preco: number
  quantidade: number
  descricao: string
  internacional: boolean
}

function App() {
  // const produtos = useFetch<Produto[]>('https://data.origamid.dev/produtos/')
  // const produto = useFetch<Produto>('https://data.origamid.dev/produtos/')

  return (
    <>
      <div>React</div>
    </>
  )
}

export default App
