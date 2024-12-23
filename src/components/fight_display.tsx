import { DownBar } from './down_bar'
import { EnemyBox } from './enemy_box'
import { HeroBox } from './hero_box'
import { StageBar } from './stage_bar'
import { AboveBarBox } from './status_bar'
import { AudioMain } from './audio_main'
import { Bag } from './bag'
import { Status } from './status'

import { useEffect, useState } from 'react'
import { nextStage,handleAttack, handleHeal, handleRun, selectLoot, handleItem } from '../gameLoop'

export const FightDisplay = ({gameState, setShowFight}: {gameState: any, setShowFight: any}) => {
  const [state, setState] = useState(gameState.value)
  const [temporaryStage, setTemporaryStage] = useState<{ name: string; desc: string } | null>({
    name: 'Vous pénétrez dans le château de Ganon, il faut battre le boss',
    desc: ' ',
  });
  const [isInInventory, setIsInInventory] = useState(false);
  const [isInStatus, setIsInStatus] = useState(false)

  useEffect(() => {
    const subscription = gameState.subscribe(setState);
    const timer = setTimeout(() => {
      setTemporaryStage(null); // Rétablir l'état normal après 10 secondes
    }, 5000);

    return () => {
      subscription.unsubscribe();
      clearTimeout(timer); // Nettoyer le timer si le composant est démonté
    };
  }, []
  )

  if (state.enemy.hp <= 0) {
    console.log('go to next stage');
    selectLoot(state.enemy.rarity)
    nextStage();
  }

  return (
      <div>
        <div>
          <AudioMain />
          <StageBar stage={temporaryStage || {name: state.currentStage, desc: state.currentStageDesc}}/>
          <HeroBox player={{name: state.player.name, hp: state.player.hp, sprite: state.player.sprite}}/>
          <EnemyBox enemy={{name: state.enemy.name, hp: state.enemy.hp, sprite: state.enemy.sprite}}/>
          <AboveBarBox gamelogs={{gamelogs: state.gameLogs}} />
          { isInInventory ? (
            <Bag inventory={state.inventory} setIsInInventory={setIsInInventory} handleItem={handleItem}/>
          ) : ( isInStatus ? (
            <Status player={state.player} setIsInStatus={setIsInStatus}></Status>
          ) : (
            <DownBar onAttack={handleAttack} onHeal={handleHeal} setIsInInventory={setIsInInventory} onRun={handleRun} setShowFight={setShowFight} setIsInStatus={setIsInStatus}/>
          ))}

          </div>
      </div>
    )
}