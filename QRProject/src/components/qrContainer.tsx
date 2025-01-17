import { Dispatch, PropsWithChildren, ReactElement, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from "react";
import QRCell from "./qrCell";
import { v4 as uuid } from "uuid";
import TileCell from "./tileCell";
import { puzzleContext } from "../context/puzzleContext";
import { solvedList } from "../App";

export interface qrProps {
    cellList?: number[],
    containerOptions: ContainerOptions,
    solution?: number[],
    hiddenDivHandling?: ReactNode,
    finalPuzzle?: boolean,
    id: number,
    tilePuzzle?: boolean,
    checkBoxLeft: number,
}

export interface ContainerOptions {
    containerWidth?: number | string,
    containerHeight?: number | string, 
    containerLeft?: number,
    containerTop?: number,
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
    solution?: number[],
    canInteract: boolean,
    setCanInteract: Dispatch<SetStateAction<boolean>>
}

export default function QRContainer({containerOptions, solution, hiddenDivHandling, id, tilePuzzle=false, checkBoxLeft, finalPuzzle=false}: qrProps): ReactElement<PropsWithChildren> {

    const storageName: string = `qrContainer${id}`
    //const [saveToggle]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
    const [cellList, setCellList]: [cellType[], Dispatch<SetStateAction<cellType[]>>] = useState<cellType[]>(localStorage.getItem(storageName) ? JSON.parse(localStorage.getItem(`qrContainer${id}`) || "") : [])
    //const [cellListPrintable, setCellListPrintable]: [number[], Dispatch<SetStateAction<number[]>>] = useState<number[]>([]);
    const [canInteract, setCanInteract]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(true)
    const [finished, setFinished]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
    const {solved, setSolved} = useContext(puzzleContext);

    useEffect(() => {
        if (!canInteract && !solved[`puzzle${id}` as keyof solvedList]) {
            setSolved({...solved,
                [`puzzle${id}`]: true})
            console.log(localStorage.getItem(storageName))
        }
        if (finalPuzzle) {
            for (const puzzle in solved) {
                if (!solved[puzzle as keyof solvedList]) break;
            }
            if (Object.values(solved).filter(x => x).length >= Object.values(solved).length) setFinished(true);
        }
    }, [canInteract, solved, id, finalPuzzle, storageName])

    useEffect(() => {
    const tempList: cellType[]  = [];
    if (cellList.length === 0) {
        while(tempList.length < 1) {
            for (let x = 0; x < containerOptions.cellAmountWidth*containerOptions.cellAmountHeight; x++) {
            //const num = Math.floor(Math.random()*2)
            tempList.push({value:0, id:uuid(), index:x})
            }
             setCellList(tempList);
        }
    }
    },[])

    useEffect(() => {
        const list = [];
        for (const cell of cellList) {
            list.push(cell.value)
        }
        //setCellListPrintable(list)
        localStorage.setItem(`qrContainer${id}`, JSON.stringify(cellList))
    }, [cellList, id])

    const QRui = useMemo(() => {
        return (
            <>
            {<div style={{position: 'absolute', display:'flex', alignItems:'center', backgroundColor: 'white', justifyContent: 'center', top: -28, left: checkBoxLeft, width: 20, height: 20, border: `2px solid ${canInteract ? 'red' : 'green'}`, color: `${canInteract ? 'red' : 'green'}`, fontSize: 20, fontWeight: 'bold'}}>{id}</div>}
            <div>
                {!finalPuzzle ? canInteract && hiddenDivHandling : !finished && hiddenDivHandling}
                <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', width: containerOptions.cellWidth*containerOptions.cellAmountWidth, 
                            height: 'auto', border: `4px solid ${canInteract ? 'red' : 'green'}`, margin: '-1px', position: 'absolute', left: containerOptions.containerLeft, top: (containerOptions.containerTop || 0)-25, zIndex: 10
                }}>
                    {cellList.length > 1 && cellList.map((cell) => {
                        return (
                        tilePuzzle ? 
                            <TileCell 
                            key={cell.index} 
                            cellWidth={containerOptions.cellWidth} 
                            cellHeight={containerOptions.cellHeight} 
                            cellHandling={{cellList, setCellList, solution, canInteract, setCanInteract}}
                            cell={cell}
                            storageName={storageName}/>
                            :
                            <QRCell 
                            key={cell.index} 
                            cellWidth={containerOptions.cellWidth} 
                            cellHeight={containerOptions.cellHeight} 
                            toggleState={cell.value === 0 ? false : true} 
                            cellHandling={{cellList, setCellList, solution, canInteract, setCanInteract}}
                            cell={cell}
                            storageName={storageName}
                        />
                            )})}
                </div>
            </div>
            {/*<div style={{position: 'relative', left: checkBoxLeft, top: 660}}>
                    <button onClick={() => {
                        setSaveToggle(!saveToggle)
                    }}>Toggle {id}</button>
                    <button onClick={() => localStorage.removeItem(storageName)}>Clear</button>
                    {saveToggle && <div><p style={{wordWrap: 'break-word'}}>{JSON.stringify(cellListPrintable)}</p></div>}
            </div>*/}
            </>
        )
    }, [checkBoxLeft, canInteract, id, finalPuzzle, hiddenDivHandling, finished, containerOptions.cellWidth, containerOptions.cellAmountWidth, containerOptions.containerLeft, containerOptions.containerTop, containerOptions.cellHeight, cellList, tilePuzzle, solution, storageName])
    return (
    <>{QRui}</>
    )
    }

