import { useState, useMemo, useEffect, } from "react";
import { cellOptions, cellType } from "./qrContainer";

export interface QRCellProps {
    toggleState?: boolean,
    cellWidth: number,
    cellHeight: number,
    cellHandling: cellOptions,
    cell: cellType,
    storageName?: string
}

export default function QRCell({toggleState, cellWidth, cellHeight, cellHandling, cell, storageName}: QRCellProps) {
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
                if (storageName) localStorage.setItem(storageName, JSON.stringify(newList))
                
            }
        }

        return (
            <div style={{width: cellWidth, height: cellHeight, ...toggle ? styles.filled : styles.empty}} onClick={() => {if (cellHandling.canInteract) handleClick()}}></div>
        )
    }, [cellWidth, cellHeight, toggle, cellHandling, cell.index, storageName])

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