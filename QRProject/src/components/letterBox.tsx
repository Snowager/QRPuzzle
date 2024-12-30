import { ReactElement } from "react";
import { StyleSheet } from "./dialPuzzleContainer";

export interface letterProps {
    letter: string,
    setBlackColor: boolean,
}

export default function LetterBox({letter, setBlackColor}: letterProps): ReactElement {

    const styles: StyleSheet = {
        letterItem: {
            height: '4.2%',
            width: '60%',
            backgroundColor: '#795548',
            border: '1px solid #000',
            margin: '2px',
            padding: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 'bold'
        },
        blackColor: {
            backgroundColor: '#000',
            color: '#fff'
        },
        whiteColor: {
            backgroundColor: '#fff',
            color: '#000'
        }
    }

    const letterIcon = letter;
    return (
        <>
        <div style={{...styles.letterItem, ...setBlackColor ? styles.blackColor : styles.whiteColor}}>{letterIcon}</div>
        </>
    )
}