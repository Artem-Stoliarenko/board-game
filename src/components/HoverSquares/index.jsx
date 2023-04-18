import { useContext } from 'react';

import { BoardGameContext } from "../../hooks/useBoardGame";

import styles from './styles.module.scss'

const HoverSquares = () => {
    const { selectedCells } = useContext(BoardGameContext);

    if (!selectedCells.length) return null;

    return <div>
        {selectedCells?.map(cell => <div className={styles.hoveredCell} key={cell?.id}>
            <span>{`row ${cell?.row} col ${cell?.col}`}</span></div>)}
    </div>
};

export default HoverSquares;
