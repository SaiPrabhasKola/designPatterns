interface LaptopI {
    name: string,
    processor: string,
    price: number,
    clone(): LaptopI
}

class Laptop implements LaptopI {

    constructor(public name: string, public processor: string, public price: number) {


    }
    clone(): Laptop {
        const cloneLaptop = new Laptop(this.name, this.processor, this.price)
        return cloneLaptop
    }

}


const laptopObj = new Laptop('lenovo', 'i7', 50000)

const clonedLaptopObj = laptopObj.clone()


console.log(`this is original ${laptopObj.name}`)

console.log(`this is cloned ${clonedLaptopObj.name}`)
clonedLaptopObj.name = 'dell'

console.log(`clone's name is changed ${clonedLaptopObj.name}`)

console.log(`this is original ${laptopObj.name}`)
