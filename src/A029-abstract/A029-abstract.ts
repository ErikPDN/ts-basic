export abstract class Character {
  constructor(
    protected name: string,
    protected attack: number,
    protected life: number) {
  }

  private takeDamage(character: Character, damage: number): void {
    character.life -= damage;
  }

  attacks(character: Character): void {
    console.log(`${this.name} attacks ${character.name}`);
    this.catchPhrase()
    this.takeDamage(character, this.attack);
    console.log(`${character.name} has ${character.life} life left`);
  }

  abstract catchPhrase(): void;
}

export class Warrior extends Character {
  catchPhrase(): void {
    console.log('For honor!');
  }
}
export class Mage extends Character {
  catchPhrase(): void {
    console.log('For the magic!');
  }
}

const warrior = new Warrior('Erik', 15, 100)
const mage = new Mage('Kelvin', 30, 50)

console.log(mage)
warrior.attacks(mage)
