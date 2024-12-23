import { BehaviorSubject } from 'rxjs';

import { Perso, Item } from './tsLib/structureLib';
import { sleep } from './tsLib/functionLib';

import listOfEnemies from './jsonLib/enemies.json';
import listOfBoss  from './jsonLib/bosses.json';
import listOfLore from './jsonLib/lore.json';
import listOfPlayers from './jsonLib/players.json';
import listOfItem from './jsonLib/item.json';

const baseMessage: string = 'You are attacked ! Defend Yourself !';
export const gameState = new BehaviorSubject({
    currentStage:'initial stagename value',
    currentStageDesc: 'initial desc',
    player: {} as Perso,
    enemy: {} as Perso,
    gameLogs: baseMessage as string,
    isGameOver: false,
    defeatedEnemies: 0 as number,
    inventory: [] as Item[]
});

let Link: Perso = listOfPlayers[0];
let Bokoblin: Perso = listOfEnemies[1];
let stage: string[] = [listOfLore[0].name, listOfLore[0].desc];

gameState.next({
    ...gameState.value,
    currentStage: stage[0],
    currentStageDesc: stage[1],
    player: Link,
    enemy: Bokoblin,
})

function randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function getRarity(index: number): number {
    const diff_ponderation: Array<number[]> = [ 
                                                [50, 80, 94, 99],
                                                [40, 80, 97, 99],
                                                [30, 60, 95, 99],
                                                [10, 55, 85, 95],
                                                [0, 30, 75, 90]
                                              ]
    const x: number = randomIntFromInterval(0, 100);
    if ( x <= diff_ponderation[index-1][0] ) {
        return 1;
    } else if ( diff_ponderation[index-1][0] >= 1 && x  <= diff_ponderation[index-1][1] ) {
        return 2;
    } else if ( x >= diff_ponderation[index-1][1] && x <= diff_ponderation[index-1][2] ) {
        return 3;
    } else if ( x > diff_ponderation[index-1][2] && x <= diff_ponderation[index-1][3] ) {
        return 4;
    } else {
        return 5;
    }
}
export const initializeGame = () => {
    const stage = listOfLore[randomIntFromInterval(0, listOfLore.length-1)];
    const enemy = listOfEnemies[randomIntFromInterval(0, listOfEnemies.length-1)];
    const hero = listOfPlayers[randomIntFromInterval(0, listOfPlayers.length-1)];
    gameState.next({
        ...gameState.value,
        currentStage: stage.name,
        currentStageDesc: stage.desc,
        player: hero,
        enemy: enemy,
        gameLogs: baseMessage,
        inventory: [...listOfItem]
    })
};

export const handleAttack = () => {
    const player = { ...gameState.value.player };
    const enemy = { ...gameState.value.enemy };
    if (gameState.value.inventory.includes(listOfItem[6])) {
        enemy.hp -= Math.max(1, (player.str +20 )- enemy.def)
    } else {
        enemy.hp -= Math.max(1, player.str - enemy.def); 
    }
    gameState.next({ ...gameState.value, enemy });
    // Vérifier si l'ennemi est vaincu
    if (enemy.hp <= 0) {
        console.log('Enemy defeated!');
        gameState.next({
            ...gameState.value,
            gameLogs: `You defeated ${enemy.name}`,
        });
    } else {
        player.hp -= Math.max(4, enemy.str - player.def); 
        gameState.next({ ...gameState.value, player });
    }
};

export const handleHeal = () => {
    console.log('Heal clicked!');
    const player = { ...gameState.value.player };

    // Simuler un soin
    player.hp = Math.min(player.hp_max, player.hp + 10); // soin de 10 HP, sans dépasser le maximum
    gameState.next({ ...gameState.value,
      player: player, 
      gameLogs: 'You healed'
    });
};

export const handleRun = () => {
    console.log('Run clicked!');
    // Logique pour fuir un combat
    gameState.next({
        ...gameState.value,
        gameLogs: 'You fled the battle!',
    });
};

export const nextStage = () => {
    const stage_number: number = randomIntFromInterval(0, listOfLore.length -1);
    const enemyCount: number  = gameState.value.defeatedEnemies

    if ((enemyCount % 5) === 0) {
        const enemyId: number = randomIntFromInterval(0, listOfBoss.length -1);
        gameState.next({
            ...gameState.value,
            enemy: listOfBoss[enemyId],
            currentStage: listOfLore[stage_number].name,
            currentStageDesc: listOfLore[stage_number].desc,
            defeatedEnemies: (enemyCount + 1)
        })
    } else {
        const enemyId: number = randomIntFromInterval(0, listOfEnemies.length -1);
        gameState.next({
            ...gameState.value,
            enemy: listOfEnemies[enemyId],
            currentStage: listOfLore[stage_number].name,
            currentStageDesc: listOfLore[stage_number].desc,
            defeatedEnemies: (enemyCount + 1)
        })
    }
    gameState.next({
        ...gameState.value,
        gameLogs: `You encoutered ${gameState.value.enemy.name}`
    })
};

export const selectLoot = (enemyRarity: number) => {
    if (gameState.value.inventory.length <= 8) {
    const possible_item: Item[] = listOfItem.filter(i => i.rarity === getRarity(enemyRarity));
    const added_item: Item = possible_item[randomIntFromInterval(0, possible_item.length-1)];
    console.log('looted item ' + added_item)
    // gameState.next({
    //     ...gameState.value,
    //     inventory: 
    // })
    gameState.value.inventory.push(added_item);
    console.log('list of items', listOfItem);
    }
};

export const handleItem = (item: Item) => {
    console.log('dans HandleItem')
    let modif = 0;
    if(item.name.includes('Potion')) {
        modif = Math.min(gameState.value.player.hp_max, (gameState.value.player.hp + item.str)  );
        console.log('voici modif', modif)
        gameState.next({
            ...gameState.value,
            player: {
                ...gameState.value.player,
                hp: modif
            }
        })
    } else if (item.name.includes('Elixir')) {
        let modif = gameState.value.player.mp + item.str;
        gameState.next({
            ...gameState.value,
            player: {
                ...gameState.value.player,
                mp: modif
            }
        })
    }
};
export const resetLogs = () => {
    gameState.next({
        ...gameState.value,
        gameLogs: baseMessage
    })
}