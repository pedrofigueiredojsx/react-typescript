import React from 'react'
import { useData } from '../Context/DataContext'
import VendaItem from '../Components/VendaItem'

const Vendas = () => {
  const { data } = useData()

  if (data === null) return null
  return (
    <div className='vendas'>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </div>
  )
}

export default Vendas
