import { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useEffect, useMemo, useState } from "react";
import QRCell from "./qrCell";
import { v4 as uuid } from "uuid";


interface qrProps {
    containerWidth?: number | string,
    containerHeight?: number | string, 
    cellList?: number[],
    cellWidth:number,
    cellHeight: number,
    cellAmountWidth: number,
    cellAmountHeight: number,
}

export interface cellType {
    value: number,
    index: number,
    id: string,
}

export interface cellOptions {
    cellList: cellType[],
    setCellList: Dispatch<SetStateAction<cellType[]>>,
}

export default function QRContainer({cellWidth, cellHeight, cellAmountWidth, cellAmountHeight}: qrProps): ReactElement<PropsWithChildren> {

    const [saveToggle, setSaveToggle]: [boolean, Dispatch<boolean>] = useState(false)
    const [cellList, setCellList]: [cellType[], Dispatch<SetStateAction<cellType[]>>]= useState<cellType[]>(localStorage.getItem("qrContainer") ? JSON.parse(localStorage.getItem("qrContainer") || "") : [])

    useEffect(() => {
    const tempList: cellType[]  = [];
    while(tempList.length < 1) {
        for (let x = 0; x < cellAmountWidth*cellAmountHeight; x++) {
        const num = Math.floor(Math.random()*2)
        tempList.push({value:num, id:uuid(), index:x})
        }
        if (cellList.length === 0) setCellList(tempList);
    }
    },[])

    useEffect(() => {
        console.log(JSON.stringify(cellList))
        localStorage.setItem("qrContainer", JSON.stringify(cellList))
    }, [cellList])

    const QRui = useMemo(() => {
        return (
            <div>
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', width: cellWidth*cellAmountWidth, height: 'auto'
                }}>
                    {cellList.length > 1 && cellList.map((cell) => {
                        return (
                        <QRCell 
                            key={cell.index} 
                            cellWidth={cellWidth} 
                            cellHeight={cellHeight} 
                            toggleState={cell.value === 0 ? false : true} 
                            cellHandling={{cellList, setCellList}}
                            cell={cell}
                        />
                            )})}
                </div>
                <p>Click here to toggle QR save data</p>
                <button onClick={() => {
                    setSaveToggle(!saveToggle)
                }}>Toggle</button>
                <button onClick={() => localStorage.clear()}>Clear Data</button>
                {saveToggle && <div style={{width: cellWidth*cellAmountWidth}}><p style={{wordWrap: 'break-word'}}>{JSON.stringify(cellList, ["value"])}</p></div>}
            </div>
        )
    }, [cellList, cellWidth, cellHeight, cellAmountWidth, saveToggle])
    return (
    <>{QRui}</>
    )
    }

