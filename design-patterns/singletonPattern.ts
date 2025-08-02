class Singleton {
    private static instance: Singleton

    instanceCount = 0
    private constructor() {
        console.log('this is an instance')
        this.instanceCount++
        console.log(this.instanceCount)
    }

    public static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton()
        }
        return Singleton.instance
    }
}

const obj = Singleton.getInstance()


