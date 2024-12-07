//import { Dispatch, useState } from 'react'
import './App.css'
import QRContainer from './components/qrContainer'

function App() {
  //const [count, setCount]: [number, Dispatch<number>] = useState(0)
  const cellWidth: number[] = [0,1,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1]

  return (
    <>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <QRContainer containerWidth={600} containerHeight={'auto'} cellList={cellWidth} cellWidth={100} cellHeight={100}/>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
      
    </>
  )
}

export default App
