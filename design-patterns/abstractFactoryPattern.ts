interface IEngine {
    engineName(): string,
    name: string
}

interface IChassis {
    chassisName(): string,
    name: string
}


class Engine implements IEngine {

    name: string;

    constructor(public engine: string) {
        this.name = engine;
    }

    engineName(): string {
        return this.name
    }





}

class Chassis implements IChassis {

    name: string;

    constructor(public chassis: string) {
        this.name = chassis;
    }

    chassisName(): string {
        return this.name
    }
}


class BMWEngine extends Engine {

    constructor() {
        super('bww engine')
    }

}

class BMWChassis extends Chassis {

    constructor() {
        super('bww chassis')
    }
}


abstract class CarFactory {
    abstract createEngine(): Engine
    abstract createChassis(): IChassis
}


class BMWFactory extends CarFactory {
    createChassis(): IChassis {
        return new BMWChassis()
    }
    createEngine(): Engine {
        return new BMWEngine()
    }


}


console.log(new BMWFactory().createChassis().chassisName());

