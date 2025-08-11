interface Alarm {
    activate(): void
}

class BasicAlarm implements Alarm {
    activate(): void {
        console.log(`basic alaram activated`)
    }
}

abstract class AlarmDecorator implements Alarm {
    protected wrappedAlarm: Alarm
    constructor(alarm: Alarm) {
        this.wrappedAlarm = alarm
    }
    activate(): void {
        this.wrappedAlarm.activate()
    }


}