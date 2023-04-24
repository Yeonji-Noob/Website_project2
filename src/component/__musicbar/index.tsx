


//export components
export { LeftIcons } from "./musicbar-left_icons";
export { AlbumFrame } from "./musicbar-album_frame";
export { MusicInfo } from "./musicbar-music_info";
export { MusicControl } from "./musicbar-music_control"

//export svg files
export { ReactComponent as Play } from "../../assets/__musicbar/musicbar-play_button.svg";
export { ReactComponent as Pause } from "../../assets/__musicbar/musicbar-pause.svg";




//export mp3 files

const Mp3Files = [

    {
        title: '파도',
        artist: '20:69',
        mp3: `${process.env.PUBLIC_URL}/mp3/20-69 - tide.mp3`,
        cover: 'musicbar_tide'
    },

    {
        title: 'Kyo181',
        artist: '실리카겔',
        mp3: `${process.env.PUBLIC_URL}/mp3/Silica Gel -  Kyo181.mp3`,
        cover: 'musicbar_kyo181'
    },

    {
        title: 'NO PAIN',
        artist: '실리카겔',
        mp3: `${process.env.PUBLIC_URL}/mp3/Silica Gel - NO PAIN.mp3`,
        cover: 'musicbar_nopain'
    }




]

export default Mp3Files;