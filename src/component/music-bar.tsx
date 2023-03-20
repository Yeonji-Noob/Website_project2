import Heart from "../assets/heart.svg"
import Lylics from "../assets/lyrics.svg"
import Etc from "../assets/etc.svg"
import Random from "../assets/randomplay.svg"
import Reverse from "../assets/reverse.svg"
import Play from "../assets/playbutton.png"
import Forward from "../assets/forward.svg"
import Repeat from "../assets/repeatplay.svg"

const MusicBar: React.FC = () => (

    <div className="music-bar">
        <div className="album-frame"></div>
        <div className="song-by">
            <p>Pathos</p>
            <p>20:69</p>
        </div>
        <figure className="left-icon">
            <img src={Heart} alt="heart" />
            <img src={Lylics} alt="lylics" />
            <img src={Etc} alt="etc" />
        </figure>
        <figure className="music-play-button">
            <img src={Random} alt="random" />
            <img src={Reverse} alt="reverse" />
            <img src={Play} alt="play" />
            <img src={Forward} alt="forward" />
            <img src={Repeat} alt="repeat" />
        </figure>
        <div className="blur"></div>
    </div>

)

export default MusicBar;