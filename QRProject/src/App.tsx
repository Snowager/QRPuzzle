//import { Dispatch, useState } from 'react'
import { useMemo } from 'react'
import './App.css'
import QRContainer from './components/qrContainer'
import QR from './assets/qr-code1.png'

function App() {

  let QRid = 0;

  function incrementId() {
    QRid += 1;
    return QRid
  }
  
  const ui = useMemo(() => {
    return (
      <div>
        <img src={QR} style={{position: 'absolute', left:"40%", right:0}}></img>
          <div style={{position:'absolute', left:"40%"}}>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:3, cellAmountWidth:4, containerLeft:600, containerTop:350}} solution={[1,0,0,1,1,1,1,1,1,0,0,1]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:8, cellAmountWidth:11, containerLeft:450, containerTop:24}}solution={[0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0]} hiddenDivHandling={<div style={{width: 220, height: 220, position: 'absolute', backgroundColor: 'white'}}></div>}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:10, cellAmountWidth:6, containerLeft:0, containerTop:382}} solution={[0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:5, cellAmountWidth:3, containerLeft:570, containerTop:654}} solution={[0,1,0,0,1,0,0,0,0,1,1,0,1,1,0]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:5, cellAmountWidth:3, containerLeft:300, containerTop:260}} solution={[0,0,0,0,1,1,0,0,1,0,1,0,0,1,0]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:5, cellAmountWidth:5, containerLeft:716, containerTop:742}} solution={[1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:15, cellAmountWidth:8, containerLeft:1100, containerTop:242}} solution={[0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:6, cellAmountWidth:5, containerLeft:418, containerTop:712}} solution={[0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,1]}/>
            <QRContainer id={incrementId()} containerOptions={{cellWidth:30, cellHeight:30, cellAmountHeight:6, cellAmountWidth:3, containerLeft:268, containerTop:804}} solution={[0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1]}/>
          </div>
      </div>
    )
  }, [])

  return (
    <>
    {ui}
    </>
  )
}

export default App
