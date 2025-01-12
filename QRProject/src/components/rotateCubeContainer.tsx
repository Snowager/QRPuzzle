import { ReactNode, useContext, useMemo, useState } from "react";
import { StyleSheet } from "./dialPuzzleContainer";
import { buttonStyle } from "../styles/button";
import { puzzleContext } from "../context/puzzleContext";
import "../styles/reveal.css"

export interface cubeProps {
  frontFace: ReactNode;
  leftFace: ReactNode;
  rightFace: ReactNode;
  backFace: ReactNode;
}

export default function RotateCubeContainer({
  frontFace,
  leftFace,
  rightFace,
  backFace,
}: cubeProps) {
  const [deg, setDeg] = useState(0);
  const width = 660;
  const size = width / 2;
  const { solved } = useContext(puzzleContext);

  const ui = useMemo(() => {
    const styles: StyleSheet = {
      cube: {
        WebkitTransformStyle: "preserve-3d",
        transition: "transform .6s ease-in-out",
        position: "relative",
        WebkitTransform: `rotateY(${deg}deg)`,
        height: width,
        width: width,
      },
      backFace: {
        WebkitTransform: `rotateY(180deg) translateZ(${size}px)`,
        backgroundColor: "black",
      },
      frontFace: {
        WebkitTransform: `rotateY(0deg) translateZ(${size}px)`,
        backgroundColor: "black",
      },
      leftFace: {
        WebkitTransform: `rotateY(270deg) translateZ(${size}px)`,
        backgroundColor: "black",
      },
      rightFace: {
        WebkitTransform: `rotateY(90deg) translateZ(${size}px)`,
        backgroundColor: "black",
      },
      face: {
        position: "absolute",
        height: width,
        width: width,
      },
    };

    function rotateLeft() {
      setDeg((value) => value - 90);
    }

    function rotateRight() {
      setDeg((value) => value + 90);
    }

    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: 660,
            width: 800,
            justifyContent: "space-evenly",
          }}
        >
          {solved["puzzle2"] && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: 20,
                zIndex: 10,
              }}
            >
              <button
                onClick={() => rotateRight()}
                style={{
                  height: 60,
                  position: "relative",
                  ...buttonStyle.black,
                }}
              >
                RotateLeft
              </button>
              {/*<button
							onClick={() => rotateUp()}
							style={{ height: 60, position: "relative", ...buttonStyle.black}}
						>
							RotateUp
						</button>*/}
            </div>
          )}
          <div style={{ width: 660, height: 660 }}>
            <div style={{ ...styles.cube }}>
              <div className="" style={{ ...styles.backFace, ...styles.face}}>
                {backFace}
              </div>
              <div
                style={{
                  ...styles.leftFace,
                  ...styles.face,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {leftFace}
              </div>
              <div style={{ ...styles.frontFace, ...styles.face }}>
                {frontFace}
              </div>
              <div style={{ ...styles.rightFace, ...styles.face }}>
                {rightFace}
              </div>
            </div>
          </div>
          {(
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                paddingLeft: 20,
              }}
            >
              <button
                onClick={() => rotateLeft()}
                style={{
                  height: 60,
                  position: "relative",
                  ...buttonStyle.black,
                }}
              >
                RotateRight
              </button>
              {/*<button
							onClick={() => rotateDown()}
							style={{ height: 60, position: "relative", ...buttonStyle.black}}
						>
							RotateDown
						</button>*/}
            </div>
          )}
        </div>
      </>
    );
  }, [deg, size, solved, backFace, leftFace, frontFace, rightFace]);

  return <>{ui}</>;
}
