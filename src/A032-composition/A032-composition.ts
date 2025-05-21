export class Engine {
  turnOn(): void {
    console.log(`Engine is on`);
  }

  speedUp(): void {
    console.log(`Engine is speeding up`);
  }

  brake(): void {
    console.log(`Engine is braking`);
  }
}

export class Car implements Engine {
  private engine: Engine = new Engine();

  constructor(private name: string) {
  }

  turnOn(): void {
    this.engine.turnOn();
  }

  speedUp(): void {
    this.engine.speedUp();
  }

  brake(): void {
    this.engine.brake();
  }
}

const car = new Car('BMW');
car.turnOn();
car.speedUp();
car.brake();
