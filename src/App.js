import './App.css';

import ModePicker from './components/ModePicker';
import HoverSquares from './components/HoverSquares';
import Board from './components/Board';

import { useBoardGame } from './hooks/useBoardGame';
import { BoardGameContext } from './hooks/useBoardGame'

function App() {
    const boardGame = useBoardGame()

    return (
        <BoardGameContext.Provider value={boardGame}>
            <div className="App">
                <ModePicker/>
                <div style={{display: 'flex', justifyContent: 'space-between', padding: '10px'}}><Board/>
                    <HoverSquares/>
                </div>
            </div>
        </BoardGameContext.Provider>
    );
}

export default App;
