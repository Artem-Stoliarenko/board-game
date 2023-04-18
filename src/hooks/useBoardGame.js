import { createContext, useCallback, useMemo, useState } from 'react';
import { useNonInitialEffect } from './useNonInitialEffect';

export const BoardGameContext = createContext({
    board: [],
    setBoard: () => {},
    setStatus: () => {},
    setModes: () => {},
    modes: [],
    selectedCells: []
});

export const useBoardGame = () => {
    const [board, setBoard] = useState([])
    const [modes, setModes] = useState([])

    useNonInitialEffect(() => {
        fetch("https://60816d9073292b0017cdd833.mockapi.io/modes")
            .then(res => res.json())
            .then(result => {
                    setModes(result)
                }
            ).catch(error => console.warn(error))
    }, [])

    const setStatus = useCallback((selectedCell) => {
        const updatedRow = board[selectedCell?.row - 1]?.map(cell => cell?.id === selectedCell?.id ? {
            ...cell,
            isActive: !cell?.isActive
        } : cell)
        setBoard((prevState) => prevState.map((row, idx) => idx === selectedCell?.row - 1 ? updatedRow : row))
    }, [board])

    const selectedCells = useMemo(() => board?.flat()?.filter(cell => !!cell?.isActive), [board])

    return {
        board,
        setBoard,
        setStatus,
        setModes,
        modes,
        selectedCells,
    }
}
