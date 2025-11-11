import React from 'react'
import './Style.css'
import Resumo from './Pages/Resumo'
import Header from './Components/Header'
import Sidenav from './Components/Sidenav'
import { DataContextProvider } from './Context/DataContext'

function App() {
  return (
    <>
      <DataContextProvider>
        <div>
          <Sidenav />
          <main>
            <Header />
            <Resumo />
          </main>
        </div>
      </DataContextProvider>
    </>
  )
}

export default App
