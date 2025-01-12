import {
  Dispatch,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { v4 as uuid } from "uuid";
import TileCell from "./tileCell";
import { qrProps } from "./qrContainer";
import "../styles/reveal.css";

export interface ContainerOptions {
  containerWidth?: number | string;
  containerHeight?: number | string;
  containerLeft?: number;
  containerTop?: number;
  cellWidth: number;
  cellHeight: number;
  cellAmountWidth: number;
  cellAmountHeight: number;
}

export interface cellType {
  value: number;
  index: number;
  id: string;
}

export interface cellOptions {
  cellList: cellType[];
  setCellList: Dispatch<SetStateAction<cellType[]>>;
  solution?: number[];
  canInteract: boolean;
  setCanInteract: Dispatch<SetStateAction<boolean>>;
}

export default function ColorPuzzleContainer({
  containerOptions,
  id,
  checkBoxLeft,
}: qrProps): ReactElement<PropsWithChildren> {
  //const [saveToggle]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false)
  const [cellList, setCellList]: [
    cellType[],
    Dispatch<SetStateAction<cellType[]>>
  ] = useState<cellType[]>([]);
  //const [cellListPrintable, setCellListPrintable]: [number[], Dispatch<SetStateAction<number[]>>] = useState<number[]>([]);
  const [canInteract, setCanInteract]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const colorTileList = [
    0, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0, 0, 1, 1, 0, 2, 0, 0, 1, 2, 0, 2, 1, 0, 1,
    1, 0, 0, 1, 1, 0, 1, 0, 2, 0, 2, 0, 1, 0, 1, 2, 2, 1, 0, 1, 2, 0, 1, 0, 2,
    1, 0, 1, 0, 2, 2, 1, 0, 2, 0, 1, 1, 1, 0, 1, 2, 2, 1, 0, 1, 0, 1, 0, 1, 2,
    1, 0, 2, 2, 0, 2, 0, 2, 0, 1, 0, 2, 0,
  ];

  useEffect(() => {
    const tempList: cellType[] = [];
    if (cellList.length === 0) {
      while (tempList.length < 1) {
        for (
          let x = 0;
          x <
          containerOptions.cellAmountWidth * containerOptions.cellAmountHeight;
          x++
        ) {
          //const num = Math.floor(Math.random()*2)
          tempList.push({
            value: colorTileList[x] === 1 ? 4 : colorTileList[x],
            id: uuid(),
            index: x,
          });
        }
        setCellList(tempList);
      }
    }
  }, []);

  useEffect(() => {
    const list = [];
    for (const cell of cellList) {
      list.push(cell.value);
    }
    //setCellListPrintable(list)
    localStorage.setItem(`qrContainer${id}`, JSON.stringify(cellList));
  }, [cellList, id]);

  const QRui = useMemo(() => {
    return (
      <>
        {
        }
        <div style={{display:'flex', alignItems: "center",
              backgroundColor: "white",
              justifyContent: "center",}}>
        <div
          className=""
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-start",
            flexDirection: "row",
            width:
              containerOptions.cellWidth * containerOptions.cellAmountWidth,
            height: "auto",
            border: `4px solid ${canInteract ? "red" : "green"}`,
            margin: "-1px",
            position: "absolute",
            left: containerOptions.containerLeft+30,
            top: (containerOptions.containerTop || 0) + 80,
          }}
        >
          {cellList.length > 1 &&
            cellList.map((cell) => {
              return (
                <TileCell
                  key={cell.index}
                  cellWidth={containerOptions.cellWidth}
                  cellHeight={containerOptions.cellHeight}
                  cellHandling={{
                    cellList,
                    setCellList,
                    canInteract,
                    setCanInteract,
                  }}
                  cell={cell}
                  colorTile
                />
              );
            })}
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
    );
  }, [
    checkBoxLeft,
    canInteract,
    id,
    containerOptions.cellWidth,
    containerOptions.cellAmountWidth,
    containerOptions.containerLeft,
    containerOptions.containerTop,
    containerOptions.cellHeight,
    cellList,
  ]);
  return (
    <>
      {QRui}
      <div
        className="noise"
        style={{ height: 660, width: 660, zIndex: 20 }}
      ></div>
    </>
  );
}
