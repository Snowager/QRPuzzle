//import { Dispatch, useState } from 'react'
import { Dispatch, SetStateAction, useMemo, useState } from "react";
import "./App.css";
import QRContainer from "./components/qrContainer";
import QR from "./assets/qr-code1.png";
import DialPuzzleContainer from "./components/dialPuzzleContainer";
import RotateCubeContainer from "./components/rotateCubeContainer";
import { buttonStyle } from "./styles/button";
import { puzzleContext } from "./context/puzzleContext";
import { checkBoxWidth, tileWidth, tileHeight, cellWidth, cellHeight } from "./styles/dimensions";
import "./styles/reveal.css"
import ColorPuzzleContainer from "./components/colorPuzzleContainer";


export interface solvedList {
  puzzle1: boolean,
  puzzle2: boolean,
  puzzle3: boolean,
  puzzle4: boolean,
  puzzle5: boolean,
  puzzle6: boolean,
  puzzle7: boolean,
  puzzle8: boolean,
  puzzle9: boolean,
}

function App() {
  const [solved, setSolved]: [solvedList, Dispatch<SetStateAction<solvedList>>]  = useState<solvedList>({puzzle1:false,puzzle2:false,puzzle3:false,puzzle4:false,puzzle5:false,puzzle6:false,puzzle7:false,puzzle8:false,puzzle9:false})
  const context = useMemo(() => ({solved, setSolved}), [solved]);

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
        {/** Tile Puzzle 1 */}
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
            {/** Mail Puzzle 2 */}
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
            {/** Color Puzzle 3 */}
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
            {/** Word Puzzle 4 */}
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
            {/** Four Puzzle 5 */}
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
            {/** F shape Puzzle 6 */}
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
            {/** Puzzle 7 */}
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
            {/** Periodic Puzzle 8 */}
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
            {/** Duck Puzzle 9 */}
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
            {/** Cryptex puzzle 10 */}
            <QRContainer
              id={incrementId()}
              containerOptions={{
                cellWidth: cellWidth,
                cellHeight: cellHeight,
                cellAmountHeight: 4,
                cellAmountWidth: 6,
                containerLeft: 538,
                containerTop: 602,
              }}
              solution={[1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0]}
              checkBoxLeft={incrementCheckBox()}
            />
          </div>
        </div>
      </>
    );

    const colorFace = (
      <div>
        <ColorPuzzleContainer
          id={0}
          containerOptions={{
            cellWidth: cellWidth+32,
            cellHeight: cellHeight+30,
            cellAmountHeight: 8,
            cellAmountWidth: 11,
            containerLeft: 10,
            containerTop: 40,
          }}
          checkBoxLeft={0}
        />
      </div>
    );

    return (
      <>
      <div style={{ width: "1000px", height: "660px", display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <puzzleContext.Provider value={context}>
        <RotateCubeContainer
          frontFace={qrFace}
          leftFace={<DialPuzzleContainer />}
          rightFace={tileFace}
          backFace={<div>{colorFace}</div>}
        />
        <button onClick={() => localStorage.clear()} style={{...buttonStyle.black}}>Clear all sections</button>
        </puzzleContext.Provider>
      </div>
      </>
    );
  }, [checkBoxWidth, context]);

  return <>{ui}</>;
}

export default App;
