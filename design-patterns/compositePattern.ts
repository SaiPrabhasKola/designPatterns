interface MusicComponent {

    play(): void
}

class Song implements MusicComponent {
    private song;
    private artist
    constructor(song: string, artist: string) {
        this.song = song
        this.artist = artist
    }
    play(): void {
        console.log(`Playing:${this.song} by ${this.artist} `)
    }
}


class Playlist implements MusicComponent {
    private name: string
    private songList: MusicComponent[] = []
    constructor(name: string) {
        this.name = name
    }
    play(): void {
        console.log(`${this.name}`)
        this.songList.forEach((song) => {
            song.play()
        })
    }
    add(component: MusicComponent) {
        this.songList.push(component)
        console.log(`added new song `)
    }

}

const song1 = new Song('run-run', 'dsp')
const song2 = new Song('Dhaga Dhaga', 'anirudh')

const playlist1 = new Playlist('new playlist')

playlist1.add(song1)
playlist1.add(song2)

playlist1.play()