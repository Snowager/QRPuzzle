import { ReactNode, useMemo, useState } from "react";
import { StyleSheet } from "./dialPuzzleContainer";

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
    const [deg, setDeg]= useState(0)
    const width = 660;
    const size = width/2;
    

    

    

    const ui = useMemo(() => {
        const styles: StyleSheet = {
            cube: {
                WebkitTransformStyle: "preserve-3d",
                transition: "transform 2s ease-in-out",
                position: 'absolute',
                WebkitTransform: `rotateY(${deg}deg)`,
                height: width,
                width: width,
                left: 200,
                top: 200,
            },
            backFace: {
                WebkitTransform: `rotateY(180deg) translateZ(${size}px)`,
                backgroundColor: 'blue',
            },
            frontFace: {
                WebkitTransform: `rotateY(0deg) translateZ(${size}px)`,
                backgroundColor: 'red',
            },
            leftFace: {
                WebkitTransform: `rotateY(270deg) translateZ(${size}px)`,
                backgroundColor: 'green',
            },
            rightFace: {
                WebkitTransform: `rotateY(90deg) translateZ(${size}px)`,
                backgroundColor: 'yellow',
            },
            face: {
                position: 'absolute',
                height: width,
                width: width,
            }
        };

        function rotateRight() {
            setDeg((value) => value+90)
            console.log(deg)
            console.log(JSON.stringify(styles))
        }
        
        return (
            
        <>
        <div style={{display: 'flex', flexDirection: 'column', height: "100%", width: "100%"}}>
            <div style={{...styles.cube}}>
                <div style={{...styles.backFace, ...styles.face}}>{backFace}</div>
                <div style={{...styles.leftFace, ...styles.face, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{leftFace}</div>
                <div style={{...styles.frontFace, ...styles.face}}>{frontFace}</div>
                <div style={{...styles.rightFace, ...styles.face}}>{rightFace}</div>
            </div>
            <button onClick={() => rotateRight()} style={{width: 60, height: '60', position: 'relative'}}>Stuff</button>
        </div>
        </>
        )
    }, [backFace, frontFace, leftFace, rightFace, deg, size])


    return (
        <>
        {ui}
        </>
    );
}


