import { useState, useMemo, useEffect, Dispatch, SetStateAction, } from "react";
import { cellOptions, cellType } from "./qrContainer";

interface TileCellProps {
    cellWidth: number,
    cellHeight: number,
    cellHandling: cellOptions,
    cell: cellType,
}

export default function TileCell({cellWidth, cellHeight, cellHandling, cell}: TileCellProps) {
    const [tileIndex, setTileIndex]: [number, Dispatch<SetStateAction<number>>] = useState(0)

    useEffect(() => {
        const stringList = cellHandling.cellList.map((cell) => cell.value)
        if (JSON.stringify(stringList) === JSON.stringify(cellHandling.solution)) {
            cellHandling.setCanInteract(false)
        }
    }, [cellHandling])

    const cellUi = useMemo(() => {

        const handleClick = (): void => {
            if (cellHandling.canInteract) {
                setTileIndex(value => value === styleArr.length-1 ? 0 : value+1)
                const newList: cellType[] = [...cellHandling.cellList]
                const cellChange: cellType = {...cellHandling.cellList[cell.index]}
                cellChange.value = tileIndex
                newList[cell.index] = cellChange;
                cellHandling.setCellList(newList);
                localStorage.setItem("qrContainer", JSON.stringify(newList))
                
            }
        }

        return (
            <div style={{width: cellWidth, height: cellHeight, ...styleArr[tileIndex]}} onClick={() => {if (cellHandling.canInteract) handleClick()}}></div>
        )
    }, [tileIndex, cellWidth, cellHeight, cell.index, cellHandling])

    return (<>{cellUi}</>)
}

const styleArr = [
    {
        backgroundColor: 'white'
    },
    {
        backgroundColor: '#1B557F'
    },
    {
        backgroundColor: '#F5915D'
    },{
        backgroundColor: '#CBA057'
    },
    {
        backgroundColor: '#A2AFD5'
    },
]