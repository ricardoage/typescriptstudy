interface AudioPlayer{
    audioVolumne: number;
    songDuration:number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author:'Ed Sheeran',
        year: 2015
    }
}

//desestructuracion de objetos

const song = 'NewSong';
const {
    song: anotherSong,
    songDuration:duration,
    details
} = audioPlayer;

const {author} = details;

console.log('Song:',anotherSong);
console.log('Duration:',duration);
console.log('Author:',author);

//desestructuracion de arreglos

const [,,trunks='defaultnotfound' ]: string[] = ['goku','vegeta','trunk'];



console.log('personaje 3:', trunks);


export {};