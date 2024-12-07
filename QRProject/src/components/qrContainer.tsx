import { PropsWithChildren, ReactElement } from "react";
import QRCell from "./qrCell";

interface qrProps {
    containerWidth: number | string,
    containerHeight: number | string, 
    cellList: number[],
    cellWidth:number,
    cellHeight: number,
}

export default function QRContainer({containerWidth, containerHeight, cellList, cellWidth, cellHeight}: qrProps): ReactElement<PropsWithChildren> {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row', width: containerWidth, height: containerHeight
        }}>
            {cellList && cellList.map((cell) => {
                return (
                <QRCell cellWidth={cellWidth} cellHeight={cellHeight} toggleState={cell === 0 ? false : true}/>)})}
        </div>
    )
}

