import { useState, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import { cellType } from "./qrContainer";
import "../styles/reveal.css"

export default function TileCell({
  cellWidth,
  cellHeight,
  cellHandling,
  cell,
  storageName = "",
  colorTile = false}) {
  const [tileIndex, setTileIndex]: [number, Dispatch<SetStateAction<number>>] =
    useState(cell.value);

    const styleArr = [
      {
        backgroundColor: "white",
      },
      {
        backgroundColor: "#1B557F",
      },
      {
        backgroundColor: !colorTile ? "#F5915D" : "white",
      },
      {
        backgroundColor: "#CBA057",
      },
      {
        backgroundColor: "white",
      },
    ];

  useEffect(() => {
    const stringList = cellHandling.cellList.map((cell: { value: never; }) => cell.value);
    if (JSON.stringify(stringList) === JSON.stringify(cellHandling.solution)) {
      cellHandling.setCanInteract(false);
    }
  }, [cellHandling]);

	useEffect(() => {
		const newList: cellType[] = [...cellHandling.cellList];
		const cellChange: cellType = { ...cellHandling.cellList[cell.index] };
		cellChange.value = tileIndex;
		newList[cell.index] = cellChange;
		cellHandling.setCellList(newList);
		if (storageName) localStorage.setItem(storageName, JSON.stringify(newList));
	}, [tileIndex])

  const cellUi = useMemo(() => {
    const handleClick = (): void => {
      setTileIndex((value) => (value === styleArr.length - 1 ? 0 : value + 1));
    };

    return (
      <div
        style={{ width: cellWidth, height: cellHeight, ...styleArr[tileIndex]}}
        className={(colorTile && tileIndex==4) ? "noiseColor" : tileIndex===2 ? "noiseBlocker" : ""}
        onClick={() => {
          if (cellHandling.canInteract) handleClick();
        }}
      ></div>
    );
  }, [tileIndex, cellWidth, cellHeight, cell.index, cellHandling]);

  return <>{cellUi}</>;
}
