import { useState, useMemo } from "react";

interface QRCellProps {
    toggleState: boolean,
    cellWidth: number,
    cellHeight: number,
}

export default function QRCell({toggleState, cellWidth, cellHeight}: QRCellProps) {
    const [toggle, setToggle] = useState(toggleState)

    const cellUi = useMemo(() => {
        return (
            <div style={{width: cellWidth, height: cellHeight, ...toggle ? styles.filled : styles.empty}} onClick={() => {setToggle(!toggle)}}></div>
        )
    }, [toggle, cellWidth, cellHeight])

    return (<>{cellUi}</>)
}

const styles = {
    empty: {
        backgroundColor: 'white'
    },
    filled: {
        backgroundColor: 'black'
    }
}