import {memo, useContext} from 'react';
import cx from 'classnames';
import {BoardGameContext} from "../../hooks/useBoardGame";

import styles from './styles.module.scss';

const Cell = ({ cell }) => {
    const { setStatus } = useContext(BoardGameContext);

    return <div
        className={cx(styles.cell, {[styles.cellhovered]: cell?.isActive,})}
        onMouseEnter={() => {
            setStatus(cell)
        }}>
    </div>

};

export default memo(Cell);
