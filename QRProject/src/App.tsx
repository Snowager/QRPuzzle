//import { Dispatch, useState } from 'react'
import { useMemo } from 'react'
import './App.css'
import QRContainer from './components/qrContainer'

function App() {
  
  const ui = useMemo(() => {
    return (
      <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <QRContainer cellWidth={20} cellHeight={20} cellAmountWidth={29} cellAmountHeight={29}/>
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
