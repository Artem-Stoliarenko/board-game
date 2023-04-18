import {useCallback, useContext, useState} from 'react';

import { BoardGameContext } from '../../hooks/useBoardGame';
import { getBoardFromMode } from '../../utils/getBoardFromMode';

import styles from './styles.module.scss'

const ModePicker = () => {
    const {modes, setBoard} = useContext(BoardGameContext);
    const [selectedMode, setSelectedMode] = useState(null)

    const handleSelectMode = useCallback((event) => {
        setSelectedMode(modes?.find((mode) => mode?.name === event.target.value))
    }, [modes])

    const handleStart = useCallback(() => {
        setBoard(getBoardFromMode(selectedMode))
    }, [selectedMode, setBoard])

    return <div className={styles.modePicker}>
        <select className={styles.selector} onChange={handleSelectMode}>
            <option value="Pick mode" style={{display: 'none'}}>Pick mode</option>
            {modes?.map((mode, idx) => (
                <option value={mode.name} key={idx}>{mode.name}</option>
            ))}
        </select>
        <button className={styles.button} onClick={handleStart}>
            START
        </button>
    </div>
};

export default ModePicker;
