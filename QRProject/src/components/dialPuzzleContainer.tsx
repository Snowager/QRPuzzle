import React, { Dispatch, ReactElement, ReactNode, SetStateAction, useEffect, useMemo, useState } from "react"
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

    const [dialList, setDialList]: [ReactElement[], Dispatch<SetStateAction<ReactElement[]>>] = useState(null);
    useEffect(() => {
        const list: ReactElement[] = [
        ]
        for (let x = 0; x < letterLists.length; x++) {
            const randomSplitPoint = Math.floor(Math.random()*letterLists[x].length)
            if (x === 0 || x == letterLists.length - 1) {
                list.push(<LetterDial dialBox={letterLists[x]} active={false}></LetterDial>)
            } else {
                list.push(<LetterDial dialBox={[...letterLists[x].slice(randomSplitPoint, letterLists[x].length), ...letterLists[x].slice(0,randomSplitPoint)]}></LetterDial>)
            }
        }
        setDialList(list);
    }, [letterLists])

    const ui = useMemo(() => {return (
        <>
        <div style={{...styles.container}}>
            {dialList && dialList.map((dial: ReactNode) => {
                return (
                    <>{dial}</> 
                )
            })}
        </div>
        </>
    )}, [dialList])

    return <>{ui}</>
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