
let isOn: boolean = true
let volume: number = 20
class BoseSoundBar {
    turnOnOff(isOn: boolean): boolean {
        if (isOn) {
            console.log(`Turning off the soundBar`)
            return isOn = false
        } else {
            console.log(`Turning On the SoundBar`)
            return isOn = true
        }
    }

    increaseVol(sound: number): number {
        console.log(`sound increase by 20 ${sound + 20}`)
        return sound + 20;
    }

    decreaseVol(sound: number): number {
        console.log(`sound decrease by 20 ${sound - 20}`)
        return sound - 20
    }

}

enum TvSource {
    HDMI1 = 'HDMI1',
    HDMI2 = 'HDMI2',
    VGA = 'VGA'
}


enum Count {
    ONE,
    TWO,
    THREE,
}

console.log(Count.ONE);


class SonyTV {
    turnOnOff(isOn: boolean): boolean {
        if (isOn) {
            console.log(`Turning off the Tv`)
            return isOn = false
        } else {
            console.log(`Turning On the Tv`)
            return isOn = true
        }
    }


    changeSource(source: TvSource): TvSource {
        console.log(`source changed to ${source}`)
        return source
    }


}

class SetTopBox {
    turnOnOff(isOn: boolean): boolean {
        if (isOn) {
            console.log(`Turning off the SetTop Box`)
            return isOn = false
        } else {
            console.log(`Turning On the SetTop Box`)
            return isOn = true
        }
    }

    channel(channelNo: number) {
        console.log(`changed channel number to ${channelNo}`)
    }
}




interface Remote {
    turnOnoff: () => string,
    increaseVol(): number,
    decreaseVol(): number,
    changeSource(): TvSource,
    changeChannel(channel: number): string
}

let source: TvSource = TvSource.HDMI1

class UniversalRemote implements Remote {
    constructor(private sonyTv: SonyTV, private boseSoundBar: BoseSoundBar,
        private setTopBox: SetTopBox
    ) { }

    turnOnoff(): string {
        this.sonyTv.turnOnOff(isOn ? true : false)
        this.setTopBox.turnOnOff(isOn ? true : false)
        this.boseSoundBar.turnOnOff(isOn ? true : false)
        return (`all the devices are turned ${isOn}`)
    }
    increaseVol(): number {
        return this.boseSoundBar.increaseVol(volume)
    }
    decreaseVol(): number {
        return this.boseSoundBar.decreaseVol(volume)
    }
    changeSource(): TvSource {
        return this.sonyTv.changeSource(source)
    }
    changeChannel(channel: number): string {
        this.setTopBox.channel(channel)
        return (`channel changed to ${channel}`)
    }
}

const sonytv = new SonyTV()
const soundbar = new BoseSoundBar()
const settopbox = new SetTopBox()
const universalRemoteObj = new UniversalRemote(sonytv, soundbar, settopbox)

