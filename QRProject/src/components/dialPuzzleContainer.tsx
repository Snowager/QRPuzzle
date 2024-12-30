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
        if (x === 0) {
            dialList.push(<LetterDial dialBox={letterLists[x]} active={false}></LetterDial>)
        } else {
            dialList.push(<LetterDial dialBox={letterLists[x]}></LetterDial>)
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
        width: 900,
        height: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        position: 'absolute',
        margin: '100px',
        left: -1100,
        backgroundColor: "#fff",
    },
}