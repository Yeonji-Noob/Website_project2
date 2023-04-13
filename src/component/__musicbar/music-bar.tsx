import { ReactComponent as Lylics } from "../../assets/__musicbar/musicbar-lyrics.svg"
import { ReactComponent as Etc } from "../../assets/__musicbar/musicbar-etc.svg"
import { ReactComponent as Random } from "../../assets/__musicbar/musicbar-random_play.svg"
import { ReactComponent as Reverse } from "../../assets/__musicbar/musicbar-reverse.svg"
import { ReactComponent as Play } from "../../assets/__musicbar/musicbar-play_button.svg"
import { ReactComponent as Forward } from "../../assets/__musicbar/musicbar-forward.svg"
import { ReactComponent as Repeat } from "../../assets/__musicbar/musicbar-repeat_play.svg"

import { useState } from "react"

import { useToggleStore } from '../__header/toggle';

const MusicBar: React.FC = () => {

    const [heart, setHeart] = useState<boolean>(true);

    const light = useToggleStore((state: { light: boolean }) => state.light);

    return (

        <div className="music-bar" id={light ? 'light-mode' : 'dark-mode'}>
            <div className="album-frame"></div>
            <div className="song-by">
                <p>Pathos</p>
                <p>20:69</p>
            </div>
            <figure className="left-icon">
                {/* heart button */}
                <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setHeart(!heart)}>
                    <path d="M7.61527 11.2726L7.61365 11.274C7.27117 11.5762 6.73791 11.5759 6.39564 11.2696L6.39322 11.2674L6.31625 11.1994L6.31536 11.1986C4.46786 9.57422 2.98402 8.26659 1.96686 7.04129C0.956572 5.82428 0.46286 4.75349 0.502185 3.60858C0.538516 2.61223 1.06533 1.65334 1.91577 1.09064L1.91604 1.09046C3.52704 0.0230121 5.53467 0.512388 6.62429 1.75179L6.99981 2.17892L7.37532 1.75179C8.46596 0.511237 10.4731 0.0174022 12.0825 1.08975L12.0838 1.09064C12.9344 1.65342 13.4613 2.61251 13.4974 3.60902L13.4975 3.60943C13.5399 4.75358 13.0468 5.82394 12.0353 7.04309C11.0195 8.26736 9.53868 9.57487 7.69707 11.2009L7.68525 11.2114L7.68348 11.2129L7.61527 11.2726Z" stroke="#231EDC" fill={heart ? "" : "#231EDC"} />
                </svg>
                <Lylics />
                <Etc />
            </figure>
            <figure className="music-play-button">
                <Random id="music-play-button-random" />
                <Reverse id="music-play-button-reverse" />
                <Play id="play" />
                <Forward id="music-play-button-forward" />
                <Repeat id="music-play-button-repeat" />
            </figure>
            <div className="blur"></div>
            <div className="musicbar-slider_container">
                <input type="range" step={0.01} className="musicbar-slider" />
            </div>
        </div>

    )
}


export default MusicBar;