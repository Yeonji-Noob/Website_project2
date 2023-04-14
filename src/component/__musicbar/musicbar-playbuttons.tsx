import { Random, Reverse, Play, Forward, Repeat } from "./";

export const MusicPlayButtons = () => {

    return (
        <div className="music-play-button">
            <Random id="music-play-button-random" />
            <Reverse id="music-play-button-reverse" />
            <Play id="play" />
            <Forward id="music-play-button-forward" />
            <Repeat id="music-play-button-repeat" />
            <div className="blur"></div>
        </div>
    );
}