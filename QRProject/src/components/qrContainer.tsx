import { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useEffect, useMemo, useState } from "react";
import QRCell from "./qrCell";

interface qrProps {
    containerWidth?: number | string,
    containerHeight?: number | string, 
    cellList?: number[],
    cellWidth:number,
    cellHeight: number,
    cellAmountWidth: number,
    cellAmountHeight: number,
}

export default function QRContainer({cellWidth, cellHeight, cellAmountWidth, cellAmountHeight}: qrProps): ReactElement<PropsWithChildren> {

    //const [count, setCount]: [number, Dispatch<number>] = useState(0)
    const [cellList, setCellList]: [number[], Dispatch<SetStateAction<number[]>>]= useState<number[]>([])

    useEffect(() => {
    const tempList: number[] = [];
    while(tempList.length < 1) {
        for (let x = 0; x < cellAmountWidth*cellAmountHeight; x++) {
        const x = Math.floor(Math.random()*2)
        tempList.push(x)
        }
        setCellList(tempList);
    }
    },[])

    const QRui = useMemo(() => {
        return (
            <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', width: cellWidth*cellAmountWidth, height: 'auto'
            }}>
                {cellList.length > 1 && cellList.map((cell) => {
                    return (
                    <QRCell cellWidth={cellWidth} cellHeight={cellHeight} toggleState={cell === 0 ? false : true}/>)})}
            </div>
        )
    }, [cellList, cellWidth, cellHeight, cellAmountWidth])
    return (
    <>{QRui}</>
    )
    }

