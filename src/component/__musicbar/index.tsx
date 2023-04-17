
//export components
export { MusicSlider } from "./musicbar-slider";
export { MusicVolume } from "./musicbar-volume";
export { LeftIcons } from "./musicbar-left_icons";
export { MusicPlayButtons } from "./musicbar-playbuttons";
export { MusicListIcon } from "./musicbar-music_list";
export { AlbumFrame } from "./musicbar-album_frame";
export { MusicInfo } from "./musicbar-music_info";

//export svg files
export { ReactComponent as Random } from "../../assets/__musicbar/musicbar-random_play.svg";
export { ReactComponent as Reverse } from "../../assets/__musicbar/musicbar-reverse.svg";
export { ReactComponent as Play } from "../../assets/__musicbar/musicbar-play_button.svg";
export { ReactComponent as Forward } from "../../assets/__musicbar/musicbar-forward.svg";
export { ReactComponent as Repeat } from "../../assets/__musicbar/musicbar-repeat_play.svg";
export { ReactComponent as MusicList } from "../../assets/__musicbar/musicbar-music_list.svg";
export { ReactComponent as Lylics } from "../../assets/__musicbar/musicbar-lyrics.svg"
export { ReactComponent as Etc } from "../../assets/__musicbar/musicbar-etc.svg"
export { ReactComponent as Volume } from "../../assets/__musicbar/musicbar-volume.svg"


//export mp3 files

const Mp3Files = [

{
title: 'Kick Back',
artist: 'Yonezu Kenshi',
mp3: require('../../assets/mp3/Kenshi Yonezu - KICK BACK.mp3')
},

{
title: 'Pathos',
artist: '20:69',
}

]

export default Mp3Files;