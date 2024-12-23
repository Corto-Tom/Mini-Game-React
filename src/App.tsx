import { useState } from 'react'
import { FightDisplay } from './components/fight_display'
import { WelcomeScreen } from './components/welcome_screen';

import { gameState, initializeGame } from './gameLoop'

function App() {
  const [showfight, setShowFight] = useState(false);
  const startAdventure = () => {
    setShowFight(true);
    initializeGame();
  };

const divStyle: React.CSSProperties ={
  height: '100%',
  width: '100%',
  background: 'rgb(98, 129, 25)',
}

  return (
    <div style={divStyle}>
    {showfight ? (
        <FightDisplay gameState={gameState} setShowFight={setShowFight}/>
    ) : (
        <WelcomeScreen onStart={startAdventure} />
    )}
    </div>
  )           
}

export default App
