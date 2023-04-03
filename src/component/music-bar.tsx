import { ReactComponent as Heartbutton } from "../assets/player_heart.svg"
import { ReactComponent as Lylics } from "../assets/lyrics.svg"
import { ReactComponent as Etc } from "../assets/etc.svg"
import { ReactComponent as Random } from "../assets/randomplay.svg"
import { ReactComponent as Reverse } from "../assets/reverse.svg"
import { ReactComponent as Play } from "../assets/playbutton.svg"
import { ReactComponent as Forward } from "../assets/forward.svg"
import { ReactComponent as Repeat } from "../assets/repeatplay.svg"
// import Parse from "../assets/parse.png"
// import { useState } from "react"
// import Heart from "react-heart"

const MusicBar: React.FC = () => {

    // const [active, setActive] = useState(false)

    return (<div className="music-bar">
        <div className="album-frame"></div>
        <div className="song-by">
            <p>Pathos</p>
            <p>20:69</p>
        </div>
        <figure className="left-icon">
            <Heartbutton />
            <Lylics />
            <Etc />
        </figure>
        <figure className="music-play-button">
            <Random id="music-play-button-random"/>
            <Reverse id="music-play-button-reverse" />
            <Play id="play"/>
            <Forward  id="music-play-button-forward"/>
            <Repeat id="music-play-button-repeat" />
        </figure>
        <div className="blur"></div>
    </div>

    )
}


export default MusicBar;