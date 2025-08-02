interface CarInterface {
    carName(): string
}


class Car1 implements CarInterface {
    carName(): string {
        return `I am car 1`
    }
}

class Car2 implements CarInterface {
    carName(): string {
        return `I am Car 2`
    }
}


abstract class BaseFactory {
    protected abstract makeCar(): CarInterface


}


class E1 extends BaseFactory {
    makeCar(): CarInterface {
        return new Car1()
    }
}

class E2 extends BaseFactory {
    makeCar(): CarInterface {
        return new Car2()
    }
}


const firstE = new E1()

const makeFirstCar = firstE.makeCar()

console.log(makeFirstCar.carName())