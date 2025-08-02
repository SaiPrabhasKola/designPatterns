
interface phoneDetails {
    name: string,
    model: string;
    processor: string
}


class Phone implements phoneDetails {

    constructor(public name: string, public model: string, public processor: string) { }
}

enum Processorconfig {
    snapDragon = 'snapDragon',
    mediaTek = 'mediaTek'
}

enum Cameraconfig {
    sony = 'sony',
    samsung = 'samsung'
}

enum BatterySize {
    big = '5000mAh',
    small = '4500mAh'
}



class PhoneBuilder {
    private phoneDetails: phoneDetails;
    constructor() {

        this.phoneDetails = {
            name: '',
            model: '',
            processor: ''
        }
    }


    processer(name: string): PhoneBuilder {
        this.phoneDetails.name = name;
        return this;
    }

    model(name: Cameraconfig): PhoneBuilder {
        this.phoneDetails.model = name;
        return this;
    }


    build() {
        return new Phone(this.phoneDetails.name, this.phoneDetails.model, this.phoneDetails.processor);
    }
}

const newPhone = new PhoneBuilder()
    .processer(Processorconfig.snapDragon)
    .model(Cameraconfig.sony)
    .build();

console.log(newPhone); 