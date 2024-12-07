//import { Dispatch, useState } from 'react'
import { useMemo } from 'react'
import './App.css'
import QRContainer from './components/qrContainer'

function App() {
  
  const ui = useMemo(() => {
    return (
      <>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <QRContainer cellWidth={40} cellHeight={40} cellAmountWidth={5} cellAmountHeight={6}/>
          <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        </div> 
      </>
    )
  }, [])

  return (
    <>
    {ui}
    </>
  )
}

export default App
