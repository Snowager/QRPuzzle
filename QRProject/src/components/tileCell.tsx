import { useState, useMemo, useEffect, Dispatch, SetStateAction } from "react";
import { cellType } from "./qrContainer";
import { QRCellProps } from "./qrCell";

export default function TileCell({
  cellWidth,
  cellHeight,
  cellHandling,
  cell,
  storageName,
}: QRCellProps) {
  const [tileIndex, setTileIndex]: [number, Dispatch<SetStateAction<number>>] =
    useState(cell.value);

  useEffect(() => {
    const stringList = cellHandling.cellList.map((cell) => cell.value);
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
		localStorage.setItem(storageName, JSON.stringify(newList));
		console.log(storageName)
	}, [tileIndex])

  const cellUi = useMemo(() => {
    const handleClick = (): void => {
      setTileIndex((value) => (value === styleArr.length - 1 ? 0 : value + 1));
    };

    return (
      <div
        style={{ width: cellWidth, height: cellHeight, ...styleArr[tileIndex] }}
        onClick={() => {
          if (cellHandling.canInteract) handleClick();
        }}
      ></div>
    );
  }, [tileIndex, cellWidth, cellHeight, cell.index, cellHandling]);

  return <>{cellUi}</>;
}

const styleArr = [
  {
    backgroundColor: "white",
  },
  {
    backgroundColor: "#1B557F",
  },
  {
    backgroundColor: "#F5915D",
  },
  {
    backgroundColor: "#CBA057",
  },
  {
    backgroundColor: "#A2AFD5",
  },
];
