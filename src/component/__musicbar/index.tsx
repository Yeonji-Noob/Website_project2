


//export components
export { LeftIcons } from "./musicbar-left_icons";
export { AlbumFrame } from "./musicbar-album_frame";
export { MusicInfo } from "./musicbar-music_info";
export { MusicControl } from "./musicbar-music_control"

//export svg files
// export { ReactComponent as Random } from "../../assets/__musicbar/musicbar-random_play.svg";
// export { ReactComponent as Reverse } from "../../assets/__musicbar/musicbar-reverse.svg";
export { ReactComponent as Play } from "../../assets/__musicbar/musicbar-play_button.svg";
export { ReactComponent as Pause } from "../../assets/__musicbar/musicbar-pause.svg";
// export { ReactComponent as Forward } from "../../assets/__musicbar/musicbar-forward.svg";
// export { ReactComponent as Repeat } from "../../assets/__musicbar/musicbar-repeat_play.svg";





// export { ReactComponent as MusicList } from "../../assets/__musicbar/musicbar-music_list.svg";
// export { ReactComponent as Volume } from "../../assets/__musicbar/musicbar-volume.svg";
// export { ReactComponent as Lyrics } from "../../assets/__musicbar/musicbar-lyrics.svg"
// export { ReactComponent as Etc } from "../../assets/__musicbar/musicbar-etc.svg"



//export mp3 files

const Mp3Files = [

    {
        title: '파도',
        artist: '20:69',
        mp3: require('../../assets/mp3/20-69 - tide.mp3'),
        cover: 'musicbar_tide'
    },

    {
        title: 'Kyo181',
        artist: '실리카겔',
        mp3: require('../../assets/mp3/Silica Gel -  Kyo181.mp3'),
        cover: 'musicbar_kyo181'
    },

    {
        title: 'NO PAIN',
        artist: '실리카겔',
        mp3: require('../../assets/mp3/Silica Gel - NO PAIN.mp3'),
        cover: 'musicbar_nopain'
    }




]

export default Mp3Files;