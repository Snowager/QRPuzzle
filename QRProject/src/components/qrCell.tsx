import { useState, useMemo, useEffect, } from "react";
import { cellOptions, cellType } from "./qrContainer";

interface QRCellProps {
    toggleState: boolean,
    cellWidth: number,
    cellHeight: number,
    cellHandling: cellOptions,
    cell: cellType,
}

export default function QRCell({toggleState, cellWidth, cellHeight, cellHandling, cell}: QRCellProps) {
    const [toggle, setToggle] = useState(toggleState)

    useEffect(() => {
        const stringList = cellHandling.cellList.map((cell) => cell.value)
        if (JSON.stringify(stringList) === JSON.stringify(cellHandling.solution)) {
            cellHandling.setCanInteract(false)
        }
    }, [cellHandling])

    const cellUi = useMemo(() => {

        const handleClick = (): void => {
            if (cellHandling.canInteract) {
                setToggle(!toggle)
                const newList: cellType[] = [...cellHandling.cellList]
                const cellChange: cellType = {...cellHandling.cellList[cell.index]}
                cellChange.value = toggle ? 0:1;
                newList[cell.index] = cellChange;
                cellHandling.setCellList(newList);
                localStorage.setItem("qrContainer", JSON.stringify(newList))
                
            }
        }

        return (
            <div style={{width: cellWidth, height: cellHeight, ...toggle ? styles.filled : styles.empty}} onClick={() => {if (cellHandling.canInteract) handleClick()}}></div>
        )
    }, [toggle, cellWidth, cellHeight, cell.index, cellHandling])

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