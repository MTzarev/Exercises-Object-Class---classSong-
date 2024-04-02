function classSong(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }
    let finalSongs = [];
    let num = input.shift();
    let typeSong = input.pop();

    for (let i = 0; i < num; i++) {
        let type = input[i].split(`_`)[0];
        let name = input[i].split(`_`)[1];
        let time = input[i].split(`_`)[2];
        let song = new Song(type, name, time);
        finalSongs.push(song);
    }

    if (typeSong === `all`) {
        finalSongs.forEach((n) => console.log(n.name));

    } else {
        let filtererd = finalSongs.filter((k) => k.type === typeSong);
        filtererd.forEach((k) => console.log(k.name));
    }
}
classSong([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'favourite']
);