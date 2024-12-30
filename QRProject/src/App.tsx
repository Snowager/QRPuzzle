//import { Dispatch, useState } from 'react'
import { useMemo } from "react";
import "./App.css";
import QRContainer from "./components/qrContainer";
import QR from "./assets/qr-code1.png";
import DialPuzzleContainer from "./components/dialPuzzleContainer";

function App() {

  const PADDING = 10;
  const cellWidth = 20;
  const cellHeight = 20;
  const checkBoxWidth = 20 + PADDING;

  const ui = useMemo(() => {
    let checkBoxLoc = 20;
    let QRid = 0;
    function incrementId() {
      QRid += 1;
      return QRid;
    }
  
    function incrementCheckBox() {
      checkBoxLoc += checkBoxWidth;
      return checkBoxLoc;
    }

    return (
      <div style={{ width: "1000px", height: "800px" }}>
        <img
          src={QR}
          style={{
            position: "absolute",
            left: "40%",
            right: 0,
            height: 660,
            width: 660,
          }}
        ></img>
        <div style={{ position: "absolute", left: "40%" }}>
          <DialPuzzleContainer />
          <div
            style={{
              position: "absolute",
              left: "40%",
              height: 660,
              width: 660,
            }}
          >
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 3,
                cellAmountWidth: 4,
                containerLeft: 398,
                containerTop: 242,
              }}
              solution={[1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1]}
              checkBox={<div style={{position: 'absolute', top: -28, left: checkBoxLoc, width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 8,
                cellAmountWidth: 11,
                containerLeft: 300,
                containerTop: 22,
              }}
              solution={[
                0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0,
                0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0,
                1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1,
                0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
                1, 0, 0, 0,
              ]}
              hiddenDivHandling={
                <div
                  style={{
                    width: 20,
                    height: 20,
                    position: "absolute",
                    backgroundColor: "white",
                  }}
                ></div>
              }
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 11,
                cellAmountWidth: 10,
                containerLeft: -3,
                containerTop: 324,
              }}
              solution={[
                0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0,
                0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0,
                1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
              ]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 5,
                cellAmountWidth: 3,
                containerLeft: 376,
                containerTop: 442,
              }}
              solution={[0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 5,
                cellAmountWidth: 3,
                containerLeft: 198,
                containerTop: 180,
              }}
              solution={[0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 5,
                cellAmountWidth: 5,
                containerLeft: 476,
                containerTop: 404,
              }}
              solution={[
                1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1,
                1, 1, 1, 1,
              ]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 7,
                cellAmountWidth: 7,
                containerLeft: 700,
                containerTop: 242,
              }}
              solution={[
                0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
                0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1,
                1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
                0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0,
                0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
              ]}
              tilePuzzle={true}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 6,
                cellAmountWidth: 5,
                containerLeft: 276,
                containerTop: 482,
              }}
              solution={[
                0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                1, 0, 0, 0, 0, 0, 0, 0, 1,
              ]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 6,
                cellAmountWidth: 3,
                containerLeft: 178,
                containerTop: 544,
              }}
              solution={[0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1]}
              checkBox={<div style={{position: 'absolute', top: -28, left: incrementCheckBox(), width: 20, height: 20, border: '2px solid red'}}></div>}
            />
          </div>
        </div>
      </div>
    );
  }, []);

  return <>{ui}</>;
}

export default App;
