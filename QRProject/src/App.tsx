//import { Dispatch, useState } from 'react'
import { useMemo } from "react";
import "./App.css";
import QRContainer from "./components/qrContainer";
import QR from "./assets/qr-code1.png";
import DialPuzzleContainer from "./components/dialPuzzleContainer";
import RotateCubeContainer from "./components/rotateCubeContainer";

function App() {
  const PADDING = 20;
  const cellWidth = 20;
  const cellHeight = 20;
  const tileWidth = 90;
  const tileHeight = 90;
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

    const tileFace = (
      <div>
        <QRContainer
          id={incrementId()}
          containerOptions={{
            cellWidth: tileWidth,
            cellHeight: tileHeight,
            cellAmountHeight: 7,
            cellAmountWidth: 7,
            containerLeft: 10,
            containerTop: 40,
          }}
          solution={
            [0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,2,2,2,2,2,2,0,0,3,3,3,3,3,3,0,0,0,1,0,0,0,0,0,0,1,0,0,0]}
          tilePuzzle
          checkBoxLeft={incrementCheckBox()}
        />
      </div>
    );

    const qrFace = (
      <>
        <img
          src={QR}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            height: 660,
            width: 660,
          }}
        ></img>
        <div style={{ position: "absolute" }}>
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
              checkBoxLeft={checkBoxLoc}
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
                    width: 150,
                    height: 150,
                    position: "absolute",
                    backgroundColor: "white",
                  }}
                ></div>
              }
              checkBoxLeft={incrementCheckBox()}
            />
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 11,
                cellAmountWidth: 10,
                containerLeft: -3,
                containerTop: 264,
              }}
              solution={[
                0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1,
                0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0,
                0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1,
                0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0,
                0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0,
                0, 1, 1, 0, 0,
              ]}
              checkBoxLeft={incrementCheckBox()}
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
              hiddenDivHandling={
                <div
                  style={{
                    width: 150,
                    height: 150,
                    position: "absolute",
                    backgroundColor: "white",
                    left: 520,
                  }}
                ></div>
              }
              solution={[0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0]}
              checkBoxLeft={incrementCheckBox()}
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
              checkBoxLeft={incrementCheckBox()}
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
              solution={[0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1]}
              hiddenDivHandling={
                <div
                  style={{
                    width: 150,
                    height: 150,
                    position: "absolute",
                    backgroundColor: "white",
                    top: 520,
                  }}
                ></div>
              }
              checkBoxLeft={incrementCheckBox()}
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
              checkBoxLeft={incrementCheckBox()}
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
              checkBoxLeft={incrementCheckBox()}
            />
          </div>
        </div>
      </>
    );

    return (
      <div style={{ width: "1000px", height: "800px" }}>
        <RotateCubeContainer
          frontFace={qrFace}
          leftFace={<DialPuzzleContainer />}
          rightFace={tileFace}
          backFace={<div></div>}
        />
      </div>
    );
  }, []);

  return <>{ui}</>;
}

export default App;
