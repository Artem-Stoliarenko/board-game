import cx from 'classnames';
import {memo, useContext} from 'react';

import styles from './styles.module.scss';
import {BoardGameContext} from "../../hooks/useBoardGame";
import Row from "../Row";
import Cell from "../Cell";

const Index = () => {
    const {board} = useContext(BoardGameContext);

    if (!board.length) return null

    return <div className={styles.board}>{board
        ?.map((row,idx) => <Row key={idx}>{row.map(cell => <Cell cell={cell} key={cell.id} />)}</Row>)}</div>

};

export default Index;
