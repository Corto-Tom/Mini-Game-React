export interface Perso {
    id: number,
    name: string,
    hp: number,
    hp_max: number,
    mp: number,
    str: number,
    int: number,
    def: number,
    res: number,
    spd: number,
    luck:number,
    race: number,
    class: number,
    rarity: number,
    sprite: string
}

export interface Lore {
    id: number,
    name: string,
    desc: string
}

export interface Item {
    id: number,
    name: string,
    desc: string,
    rarity: number,
    type: string,
    str: number
}