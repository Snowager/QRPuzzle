import { ReactNode, useEffect, useMemo, useRef, useState } from "react"
import { StyleSheet } from "./dialPuzzleContainer"
import { letterBox } from "../components/dialPuzzleContainer";
import LetterBox from "./letterBox";


export interface letterDialProps {
    dialBox: letterBox[]
    active?: boolean
}

export default function LetterDial({dialBox, active = true}: letterDialProps): ReactNode {

    const [letterList, setLetterList] = useState(dialBox);
    const current = useRef(3);
    const direction = useRef("forward")
    const [translateAmount, setTranslateAmount] = useState(current.current * 16)
    const [transition, setTransition] = useState("");
    console.log(letterList)

    useEffect(() => {
        if (translateAmount > 10) {
            console.log(translateAmount)
        }
    }, [translateAmount])


    

    

    const ui = useMemo(() => {

        const styles: StyleSheet = {
            dial: {
                padding: 0,
                margin: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                width: "100%",
                height: "100%",
                backgroundColor: "#ccc",
                overflow: "hidden",
            },
            dialBox: {listStyle: 'none',
                padding: 0,
                margin: 0,
                backgroundColor: '#ccc',
                display: 'flex',
                flexDirection: 'column',
                width: '80%',
                height: '100%',
                transition: `${transition}`,
                transform: `translateY(-${translateAmount}px)`,
            },
        }

        function handleTransitionEnd() {
            let _list: letterBox[] = [];
            if (direction.current === "forward") {
                _list = [...letterList.slice(-1), ...letterList].slice(0,letterList.length)
            } else if (direction.current === "backward") {
                _list = [...letterList, ...letterList.slice(0,1)].slice(1,letterList.length + 1)
            }
            setLetterList(_list);
            setTransition("");
            current.current = 3;
            setTranslateAmount(current.current * 16);
        }

        function handleForward() {
            direction.current = "forward";
            setTransition("transform 0.2s ease-in-out");
            if (current.current >= 3) {
                current.current -= 2;
                setTranslateAmount(current.current * 2);
            }
            console.log(direction.current)
            console.log(JSON.stringify(letterList))
        }

        function handleBackward() {
            direction.current = "backward"
            setTransition("transform 0.2s ease-in-out");
            if (current.current <= 3) {
                current.current += 2;
                setTranslateAmount(current.current * 19);
            }
            console.log(direction.current)
        }

        return (
            <>
            <div style={{display: 'flex', flexDirection: 'column', width: '10%',
                height: '100%', justifyContent: 'space-between'}}> 
            {active ? <button  style={{zIndex: 10, position: 'relative', top: '-5px', backgroundColor: '#f39', borderRadius: 20,
            }} onClick={() => handleForward()}></button> : <div style={{zIndex: 10, position: 'relative', top: '-25px', width: '90px', height: '24.5px'}}></div>}
            <div style={{...styles.dial}}>
            <div style={{...styles.dialBox}} onTransitionEnd={() => handleTransitionEnd()}>
                {letterList.map((letter: letterBox)=> {
                    return (
                        <LetterBox letter={letter.letter} setBlackColor={letter.setBlackColor}/>
                    )
                })}
            </div>
            </div>
            {active ? <button  onClick={() => handleBackward()} style={{zIndex: 10, position: 'relative', top: '5px', backgroundColor: '#f39', borderRadius: 20,}}></button> : 
            <div style={{zIndex: 10, position: 'relative', top: '25px', width: '90px', height: '24.5px'}}></div>}
            </div>
            </>
        )
    },[letterList, transition, translateAmount, active])

    return (
        <>{ui}</>
    )

    
}