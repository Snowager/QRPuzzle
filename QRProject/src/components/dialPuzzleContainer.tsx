import React, { ReactNode } from "react"
import LetterDial from "./letterDial"
import { letterLists } from "../data/letterLists"

export interface StyleSheet {
    [key: string]: React.CSSProperties
}

export interface letterBox {
    letter: string,
    setBlackColor: boolean,
}

export default function DialPuzzleContainer() {

    const dialList: ReactNode[] = [
    ]

    for (let x = 0; x < letterLists.length; x++) {
        const randomSplitPoint = Math.floor(Math.random()*letterLists[x].length)
        if (x === 0 || x == letterLists.length - 1) {
            dialList.push(<LetterDial dialBox={letterLists[x]} active={false}></LetterDial>)
        } else {
            console.log([...letterLists[x].slice(randomSplitPoint, letterLists[x].length), ...letterLists[x].slice(0,randomSplitPoint)])
            dialList.push(<LetterDial dialBox={[...letterLists[x].slice(randomSplitPoint, letterLists[x].length), ...letterLists[x].slice(0,randomSplitPoint)]}></LetterDial>)
        }
    }

    return (
        <>
        <div style={{...styles.container}}>
            {dialList.map((dial: ReactNode) => {
                return (
                    dial
                )
            })}
        </div>
        </>
    )
}

const styles: StyleSheet = {
    container:  {
        width: 580,
        height: 580,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: 'absolute',
        backgroundColor: "#000",
    },
}