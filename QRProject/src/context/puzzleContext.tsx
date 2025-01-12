import { createContext, Dispatch, SetStateAction } from "react";
import { solvedList } from "../App";

export type genericContext = {
    solved: solvedList,
    setSolved:Dispatch<SetStateAction<solvedList>>
}

export const puzzleContext = createContext<genericContext>({solved: {puzzle1:false,puzzle2:false,puzzle3:false,puzzle4:false,puzzle5:false,puzzle6:false,puzzle7:false,puzzle8:false,puzzle9:false, puzzle10:false}, setSolved:() => {}});